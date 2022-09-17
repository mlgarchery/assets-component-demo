import type { NextPage } from 'next'
import Head from 'next/head'
import { Switch, ThemeProvider, Stack, Typography } from '@mui/material'
import { useState } from 'react'

import { MOCK_DATA } from '../data/mock'
import AssetsOverview from '../components/assets-overview'

import styles from '../styles/home.module.scss'
import {darkTheme, lightTheme} from '../styles/themes'


const Home: NextPage = () => {

  let [theme, setMode] = useState(darkTheme);
  let toggleDarkMode = () => {
    theme === darkTheme ? setMode(lightTheme) : setMode(darkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Assets component demo</title>
        <meta name="description" content="A component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack component="main" className={styles.main} bgcolor="primary.dark">
        <Typography variant="h4" color="text.primary">Dark Mode</Typography>
        <Switch checked={theme===darkTheme} onChange={toggleDarkMode} />
        <AssetsOverview { ...MOCK_DATA } />
      </Stack>
    </ThemeProvider>
  )
}

export default Home
