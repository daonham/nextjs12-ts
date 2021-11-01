import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Cookies from 'js-cookie'
import { USER_TOKEN } from '@lib/constants'

const sampleFetch = `await fetch('/api?edge')
await fetch('/api')`

const Home: NextPage = () => {
  const [token, setToken] = useState(Cookies.get('token'))

  useEffect(() => {
    setToken(Cookies.get(USER_TOKEN))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="mb-6">
          <pre className="border-accents-2 border rounded-md bg-white overflow-x-auto p-6 mb-2">
            {token}
          </pre>

          <pre className="border-accents-2 border rounded-md bg-white overflow-x-auto p-6 mb-2">
            {sampleFetch}
          </pre>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

export default Home
