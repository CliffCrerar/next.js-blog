const
  { stringify } = JSON,
  { writeFileSync } = require('fs'),
  { join } = require('path'),
  { siteMeta } = require('../blog.config'),
  posts = require('./get-blog-posts');

// https://jsonfeed.org/version/1
const feed = {
  version: 'https://jsonfeed.org/version/1',
  title: siteMeta.title,
  home_page_url: siteMeta.siteUrl,
  feed_url: `${siteMeta.siteUrl}/feed.json`,
  description: siteMeta.description,
  icon: `${siteMeta.siteUrl}/static/apple-touch-icon-152x152.png`,
  favicon: `${siteMeta.siteUrl}/static/favicon.ico`,
  author: {
    name: siteMeta.author,
    url: siteMeta.siteUrl,
    avatar: `${siteMeta.siteUrl}/static/_jolvera-avatar.jpg`
  },
  items: posts.map(post => ({
    id: `${siteMeta.siteUrl}${post.path}`,
    url: `${siteMeta.siteUrl}${post.path}`,
    title: post.title,
    content_text: `${post.summary} - ${siteMeta.siteUrl}${post.path}`,
    summary: post.summary,
    image: `${siteMeta.siteUrl}${post.image}`,
    date_published: post.publishedAt,
    author: siteMeta.author
  }))
}

writeFileSync(join('./.next/static', 'feed.json'), stringify(feed))
