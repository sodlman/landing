import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Heading,
  Text,
  ThemeContext,
} from 'grommet'
import { APP_HOST } from 'utils/constants'

export default function FAQ() {
  const highlight = 'txt-clipping--subtle-2 txt-clipping'
  return (
    <Box pad="medium">
      <Heading textAlign="center">FAQ</Heading>

      <ThemeContext.Extend
        value={{
          global: {
            colors: { doc: '#ff99cc' },
          },
          accordion: {
            hover: {
              heading: {
                color: {
                  dark: 'status-ok',
                  light: 'dark-3',
                },
              },
            },
          },
        }}
      >
        <Accordion id="faq-list" background="black" hoverIndicator={false}>
          <AccordionPanel label="Why can't I claim if I sodl on Binance?">
            <Box pad="small">
              <Text>
                When you buy or sell cryptocurrency on Binance, the transactions
                are created in Binance database rather than Blockchain, which is
                the difference between DEX(Decentralized Exchange) and
                CEX(Centralized Exchange)
              </Text>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Should I claim now?">
            <Box pad="medium">
              <Text>
                No hurry. The amount you can claim is changing while the market
                changes, you can claim whenever you want, but choose a good
                time, you can claim more. Right?
              </Text>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="What can I use $SODL for?">
            <Box pad="medium">
              <Text>
                With <span className="gradient">$SODL</span>, you can vote for{' '}
                <Anchor label="more pairs" href={`${APP_HOST}/pair`} /> to be
                supported. And then you can claim more{' '}
                <span className="gradient">$SODL</span> of those tokens you{' '}
                <span className={highlight}>SODL</span>.
              </Text>
            </Box>
          </AccordionPanel>
        </Accordion>
      </ThemeContext.Extend>
    </Box>
  )
}
