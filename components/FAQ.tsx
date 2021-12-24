import {
  Accordion,
  AccordionPanel,
  Box,
  Heading,
  Text,
  ThemeContext,
} from 'grommet'

export default function FAQ() {
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
          <AccordionPanel label="Why I can claim if I sodl on Binance?">
            <Box pad="small">
              <Text>
                When you buy or sell cryptocurrency on Binance, the transactions
                are created in Binance database rather than Blockchain, which is
                the different between DEX(Decentralized Exchange) and
                CEX(Centralized Exchange)
              </Text>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Should I claim as soon as possible?">
            <Box pad="medium">
              <Text>
                No. The amount you can claim is changing while the market
                changes, you can claim whenever you want, but choose a good
                time, you can claim more.
              </Text>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="What can I use $SODL for?">
            <Box pad="medium">
              <Text>
                Nothing, for now. Later you may use it for a lot things, see
                RoadMap.
              </Text>
            </Box>
          </AccordionPanel>
        </Accordion>
      </ThemeContext.Extend>
    </Box>
  )
}
