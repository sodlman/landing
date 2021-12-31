import {
  Box,
  Image,
  Footer as FooterComp,
  Anchor,
  ThemeContext,
  ResponsiveContext,
} from 'grommet'
import { Github, Twitter } from 'grommet-icons'

export default function Footer({ background }: { background: string }) {
  return (
    <ThemeContext.Consumer>
      {(theme: any) => {
        return (
          <ResponsiveContext.Consumer>
            {(size) => {
              const isMobile = size === 'small'
              return (
                <FooterComp
                  background={background}
                  align="center"
                  pad={{ horizontal: isMobile ? 'medium' : 'xlarge' }}
                >
                  <Box
                    direction="row"
                    align="center"
                    justify="center"
                    pad={{ vertical: 'medium' }}
                    border={{ side: 'top', size: 'small', color: '#eaeaea' }}
                    fill
                  >
                    <ResponsiveContext.Consumer>
                      {(size: any) => {
                        const isMobile = size === 'small'
                        return (
                          <Box
                            direction={isMobile ? 'column' : 'row'}
                            align={isMobile ? 'start' : 'center'}
                            gap="medium"
                          >
                            <Anchor
                              label="Twitter"
                              href="https://twitter.com/sodldao"
                              target="_blank"
                              icon={<Twitter color="plain" />}
                            />
                            <Anchor
                              label="Discord"
                              href="https://discord.gg/28kzMnjreN"
                              target="_blank"
                              icon={
                                <Image
                                  src="/discord.svg"
                                  width="24px"
                                  alt="Discord"
                                />
                              }
                            />
                            <Anchor
                              label="Mirror"
                              href="https://mirror.xyz/0xc8399CA553E74894c211B55a85AC9E16D8a2751e"
                              target="_blank"
                              icon={
                                <Image
                                  src="/mirror.svg"
                                  width="16px"
                                  style={{
                                    marginLeft: isMobile ? 4 : 0,
                                    marginRight: isMobile ? 4 : 0,
                                  }}
                                  alt="Mirror"
                                />
                              }
                            />
                          </Box>
                        )
                      }}
                    </ResponsiveContext.Consumer>
                  </Box>
                </FooterComp>
              )
            }}
          </ResponsiveContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
