/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {
  Box,
  Grommet,
  Button,
  ResponsiveContext,
  Header,
  Main,
  dark,
  grommet,
} from 'grommet'
import TextLogo from './TextLogo'
import Footer from './Footer'
import { GRADIENT } from 'utils/constants'

interface Props {
  title: string
  children: any
  mainWidth?: number | string
  isLoading?: boolean
}

const Layout = ({ title, children, mainWidth, isLoading }: Props) => {
  return (
    <Grommet theme={dark} full>
      <Head>
        <title>{`sodlDAO${title ? ` | ${title}` : ''}`}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="referrer" content="no-referrer" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Fredoka+One"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Secular+One"
        />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      </Head>

      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'
          return (
            <Header
              direction={isMobile ? 'column' : 'row'}
              pad={{ vertical: 'medium', horizontal: 'large' }}
              height={isMobile ? '160px' : 'xsmall'}
              style={{ borderBottom: '1px solid #e3e3e3' }}
            >
              <Box
                direction={isMobile ? 'column' : 'row'}
                align="center"
                gap={isMobile ? 'small' : 'medium'}
              >
                <TextLogo />
              </Box>

              <Button
                primary
                size="large"
                active
                // color={GRADIENT}
                label="Launch dAPP"
                // style={{ color: 'white', border: 0 }}
                href="https://app.sodl.xyz/"
              />
            </Header>
          )
        }}
      </ResponsiveContext.Consumer>

      <Main>
        <ResponsiveContext.Consumer>
          {(size) => {
            const isMobile = size === 'small'
            return (
              <Box
                style={{
                  margin: '0 auto',
                  width: isMobile ? '100%' : mainWidth || 1300,
                }}
              >
                {children}
              </Box>
            )
          }}
        </ResponsiveContext.Consumer>
      </Main>
      <Footer background="" />
    </Grommet>
  )
}

export default Layout
