import Link from 'next/link'
import { useEffect } from 'react';
import router from 'next/router';

const
  otherAreas = [
    { key: 0, title: 'About', href: "/about", caption: 'About', hidden: false }
    // { key: 1, title: 'Contact', href: "/contact", caption: 'Contact' }
  ],
  Nav = () => {

    useEffect(() => {
      console.log(location.pathname);
      // hideThisPageNav(location.pathname)
    });

    const

      goBack = () => router.back(),

      hideThisPageNav = (path) => {
        const currentArea = otherAreas.filter((area) => area.href === location.pathname)[0];
        if (currentArea === undefined) return;
        currentArea.hidden = currentArea.href === path;
      },

      NavAreas = () => otherAreas.map(area => (
        <Link key={area.key} href={area.href}>
          <a title={area.title} hidden={area.hidden}>
            <button className="button" type="button">
              {area.caption}
            </button>
          </a>
        </Link>
      ))

    return (
      <nav>
        <NavAreas />
        {/* <button onClick={goBack}>Back</button> */}
        <style jsx>{`
          nav {
            display: flex;
          }

          a:not(:last-child) {
            margin-right: 1em;
          }
        `}
        </style>
      </nav>
    )
  }

export default Nav;
