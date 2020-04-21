import React from 'react'
import Link from 'next/link'
import moment from 'moment'

function PublishedAt (props) {
  const { link, date } = props
  return (
    <>
      <Link href={link}>
        <a href={link} className='u-url' mcolor='#aaa' {...props}>
          {moment().format('DD MMM YYYY')}
        </a>
      </Link>
      <style jsx>{`
        a {
          color: #555;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default PublishedAt
