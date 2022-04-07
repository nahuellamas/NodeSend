import Head from 'next/head'
import Header from '../components/Header'

const Layout = ({children, pagina}) => {
  return (
    <>
        <Head>
            <title>NodeSend - {pagina}</title>
            <link rel="icon" href="/favicon.svg" />
        </Head>
        
        <div className="bg-gray-100 min-h-screen">
          <div className="container mx-auto">
            <Header/>
            <main className="mt-10">
              {children}
            </main>
          </div>
        </div>
    </>
  )
}

export default Layout