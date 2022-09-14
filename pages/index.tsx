import { MOCK_DATA } from '../utils/data/mock'
import type { NextPage } from 'next'
import Head from 'next/head'
import Assets from '../components/assets'
import styles from '../styles/home.module.scss'
import { useState } from 'react'
import { Switch } from '@mui/material'

const Home: NextPage = () => {

  let [mode, setMode] = useState("light");
  let toggleDarkMode = () => {
    mode=="dark" ? setMode("light") : setMode("dark")
  }

  return (
    <div className={styles.container} theme-mode={mode}>
      <Head>
        <title>Assets component demo</title>
        <meta name="description" content="A component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        Dark Mode
        <Switch checked={mode==="dark"} onChange={toggleDarkMode} />
        <Assets {...MOCK_DATA} />
      </main>
    </div>
  )
}

export default Home
