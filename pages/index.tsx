import type { NextPage } from 'next'
import Head from 'next/head'
import { Switch, ThemeProvider, Stack, Typography } from '@mui/material'
import { useState } from 'react'

import { MOCK_DATA } from '../data/mock'
import AssetsOverview from '../components/assets-overview'

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
      <Stack component="main" bgcolor="primary.dark" padding={2} justifyContent="center">
        <Typography variant="h4" color="text.primary">Dark Mode</Typography>
        <Switch color="secondary" checked={theme===darkTheme} onChange={toggleDarkMode} />
        <AssetsOverview { ...MOCK_DATA } />
      </Stack>
    </ThemeProvider>
  )
}

export default Home
