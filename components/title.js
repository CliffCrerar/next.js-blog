import Link from 'next/link'
import { siteMeta } from '../blog.config'

const Title = ({ path }) => (
  <>
    {path === '/' ? (
      <a href={siteMeta.siteUrl}>
        <h1>
          {siteMeta.title}
        </h1>
      </a>
    ) : (
        <p>
          <Link href='/'>
            <a rel='me'>{siteMeta.title}</a>
          </Link>
        </p>
      )}
    <style jsx>{`
      h1 {
        margin-top: 20px;
      }

      a {
        color: #333;
        text-decoration: none;
      }

      p {
        font-size: 1.3em;
        font-weight: bold;
      }
    `}</style>
  </>
)

export default Title
