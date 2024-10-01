import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
const Sidenav = () => {
    const navLink = [
        {
            icon: MdDashboard,
            text: "Dashboard",
            linke: "/"
        },
        {
            icon: GrTransaction,
            text: "Transactions",
            linke: "/transaction"
        },

    ]
    return (
        <Stack boxShadow={{
            base: "none",
            lg: "lg"
        }} w={{
            base: "full",
            lg: "16rem"
        }} h="100vh"
            justify="space-between"
            bg="white"

        >
            <Box >
                <Heading as="h1" fontSize="20px" pt="56px" textAlign="center">@Crypto</Heading>
                <Box mx="12px" mt="24px">
                    {navLink.map((nav) => (
                        <Link to={nav.linke} key={nav.text} >
                            <HStack py="12px" px="16px"
                                borderRadius="10px"
                                _hover={{
                                    bg: "#F3F3F7",
                                    color: "#171717"
                                }}
                                color="#797E82"
                            >
                                <Icon as={nav.icon} />
                                <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
                            </HStack>
                        </Link>
                    ))}
                </Box>
            </Box>
            <Box mx="12px" mt="24px" mb="16px">
                <Link to="/support">
                    <HStack py="12px" px="16px"
                        borderRadius="10px"
                        _hover={{
                            bg: "#F3F3F7",
                            color: "#171717"
                        }}
                        color="#797E82"
                    >
                        <Icon as={MdOutlineSupportAgent} />
                        <Text fontSize="14px" fontWeight="medium">Support</Text>
                    </HStack>
                </Link>
            </Box>
        </Stack>
    )
}

export default Sidenav