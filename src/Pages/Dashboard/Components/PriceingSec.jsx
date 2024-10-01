import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Button, HStack, Box, Icon, Image, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, Flex } from '@chakra-ui/react'
import { GoArrowUpRight } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const PriceingSec = () => {
    const timeStamp = ["9.30AM", "10.00AM", "10.30AM", "11.00AM", "11.30AM"];

    return (
        <CustomCard >
            <Flex justify="space-between" align="start" mb={4}>
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm">Wallet Balances</Text>
                    </HStack>
                    <HStack
                        spacing={2}
                        align={{
                            base: "flex-start",
                            sm: "center",
                        }}
                        flexDir={{
                            base: "column",
                            sm: "row",
                        }}
                    >
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium">
                                22.39401000
                            </Text>
                            <HStack fontWeight="medium" color="green.500">
                                <Icon as={GoArrowUpRight} />
                                <Text fontSize="sm" fontWeight="medium">
                                    22%
                                </Text>
                            </HStack>
                        </HStack>
                    </HStack>
                </Stack>
                <HStack >
                    <Button leftIcon={<Icon as={FaPlus} />} py={2} fontSize="14px">Buy</Button>
                    <Button leftIcon={<Icon as={FaMinus} />} py={2} fontSize="14px">Sell</Button>
                </HStack>
            </Flex>
            <Tabs position='relative' variant='unstyled' mb={4} >
                <Box display="flex" justifyContent="end">
                    <TabList bg="gray.200" width="fit-content">
                        {["1H", "1D", "1W", "1M"].map((data) => (
                            <Tab fontSize="sm" key={data}>{data}</Tab>
                        ))}
                    </TabList>
                </Box>
                <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                <TabPanels>
                    <TabPanel>
                        <Image src='Graph.png' w="100%" mb={4} />
                        <HStack justify="space-between">
                            {timeStamp.map((time) => (
                                <Text fontSize="10px" color="black.80" key={time}>{time}</Text>
                            ))}
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        No Data For This Day
                    </TabPanel>
                    <TabPanel>
                        <p>No Data For This Week</p>
                    </TabPanel>
                    <TabPanel>
                        <p>No Data For This Month</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </CustomCard >
    )
}

export default PriceingSec