import type { AppProps } from 'next/app'
import '@/styles/globals.css'

import Layout from "@/components/Layout";
import {DarkModeProvider} from "@/contexts/DarkModeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <DarkModeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </DarkModeProvider>
  )
}
