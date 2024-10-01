import React, { useState } from 'react'
import Dashboardlayout from '../../Components/Dashboardlayout'
import { Button, Card, Flex, Icon, Input, InputGroup, InputLeftElement, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from '@chakra-ui/react'
import { MdDownload } from "react-icons/md";
import TransactionTable from './Components/TransactionTable';
import { CiSearch } from "react-icons/ci";

const TransactionPage = ({ title }) => {
    const [searchItem, setSearchItem] = useState(null);
    const tabData = [
        {
            name: "All",
            notification: "345"
        },
        {
            name: "Deposit",
            notification: "114"
        },
        {
            name: "Withdraw",
            notification: "210"
        },
        {
            name: "Trade",
            notification: "39"
        }
    ]
    const handleChange = (e) => {
        setSearchItem(e.target.value)
    }
    return (
        < Dashboardlayout title={title} >
            <Flex justify="end" mt="6" mb="4">
                <Button leftIcon={<Icon as={MdDownload} />}>Export CSV</Button>
            </Flex>
            <Card>
                <Tabs position='relative' variant='unstyled'>
                    <Flex >
                        <TabList fontSize="10px" py="4" justify="space-between">
                            {
                                tabData.map((data) => (
                                    <Tab key={data.name} ml="10px" >
                                        {data.name}
                                        <Tag ml="10px" colorScheme="gray" borderRadius="10px" py="4px">{data.notification}</Tag>
                                    </Tab>
                                ))
                            }
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <CiSearch color='gray.300' />
                                </InputLeftElement>
                                <Input type='text'
                                    placeholder='Search by ID or destination'
                                    border="none"
                                    onChange={handleChange}
                                    value={searchItem}
                                />
                            </InputGroup>
                        </TabList>
                    </Flex>
                    <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                    <TabPanels>
                        <TabPanel>
                            <TransactionTable searchItem={searchItem} />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable searchItem={searchItem} />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable searchItem={searchItem} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </ Dashboardlayout >
    )
}

export default TransactionPage