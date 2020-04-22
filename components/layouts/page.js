import Layout from './default'

function Page ({ meta, children }) {
  return (
    <Layout pageTitle={meta.title}>
      <article>
        <header>
          <h1>{meta.title}</h1>
        </header>
        <div>{children}</div>
      </article>
      <style jsx>{`
        header {
          margin-top: 2em;
          margin-bottom: 2em;
        }
      `}</style>
    </Layout>
  )
}

export default Page
