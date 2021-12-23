import { Accordion, AccordionPanel, Box, Heading, Text } from 'grommet'

export default function FAQ() {
  return (
    <Box pad={{ vertical: 'medium' }}>
      <Heading textAlign="center">FAQ</Heading>

      <Accordion background="#333">
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
              No. The amount you can claim is changing while the market changes,
              you can claim whenever you want, but choose a good time, you can
              claim more.
            </Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="What can I use $SODL for?">
          <Box pad="medium">
            <Text>
              Nothing, for now. Later you may use it for a lot things, see
              below.
            </Text>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  )
}
