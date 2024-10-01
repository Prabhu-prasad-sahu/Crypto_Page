import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import Sidedrawer from './Sidedrawer'

const Dashboardlayout = ({ title, children }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <div>
            <Flex>
                <Box
                    display={{
                        base: "none",
                        lg: "flex"
                    }}
                    position={{
                        lg: "fixed",
                        xl: "fixed"
                    }}
                    top="0"
                    left="0"
                    height="100vh"
                    width={{
                        lg: "250px",
                        xl: "250px"
                    }}
                >
                    <Sidenav />
                </Box>
                <Sidedrawer
                    isOpen={isOpen}
                    onClose={onClose}
                    size="full"
                    maxW={{
                        base: "100vh",
                        lg: "250px",
                        xl: "250px"
                    }}
                    height={{
                        base: "calc(100vh - 88px)",
                        lg: "calc(100vh - 88px)",
                        xl: "calc(100vh - 88px)"
                    }}
                    overflowY="auto"
                />
                <Box flexGrow={1} pl={{
                    lg: "250px",
                    xl: "250px"
                }}>
                    <Box position="sticky" top="0" zIndex="1">
                        <Topnav title={title} onOpen={onOpen} />
                    </Box>
                    <Container maxW="870px" mt="36px" >{children}</Container>
                </Box>
            </Flex>
        </div >
    )
}

export default Dashboardlayout