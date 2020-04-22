import React from 'react'
import PropTypes from 'prop-types'
import Head from './head'
import Nav from './nav'
import Title from './title'

function Header({ path, pageTitle, ogImage }) {
  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} />

      <header>
        <Title path={path} />
        <Nav />
      </header>

      <style global jsx>{`
          
          @import url('/static/css/normalize.css');
          @import url('/static/css/skeleton.css');

          header{
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
          }
      `}</style>

    </>
  )
}

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string
}

export default Header
