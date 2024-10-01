import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Tfoot, Icon, Stack, Text, Tag } from '@chakra-ui/react'
import React from 'react'
import { IoCaretDown } from "react-icons/io5";
const TransactionTable = ({ searchItem }) => {
    const TransDetail = [
        {
            id: "HD82NA2H1",
            date: "2022-06-09",
            time: "09.54",
            type: {
                name: "INR Deposit",
                transBy: "E-Transfer",
            },
            amount: "+ ₹81,123.10",
            status: "Pending"
        },
        {
            id: "HD82NA2H2",
            date: "2022-06-09",
            time: "09.54",
            type: {
                name: "INR Deposit",
                transBy: "E-Transfer",
            },
            amount: "+ ₹81,123.10",
            status: "processing"
        }, {
            id: "HD82NA2H3",
            date: "2022-06-09",
            time: "09.54",
            type: {
                name: "INR Deposit",
                transBy: "E-Transfer",
            },
            amount: "+ ₹81,123.10",
            status: "cancelled"
        }, {
            id: "HD82NA2H4",
            date: "2022-06-09",
            time: "09.54",
            type: {
                name: "INR Deposit",
                transBy: "E-Transfer",
            },
            amount: "+ ₹81,123.10",
            status: "completed"
        }, {
            id: "HD82NA25",
            date: "2022-06-09",
            time: "09.54",
            type: {
                name: "INR Deposit",
                transBy: "E-Transfer",
            },
            amount: "+ ₹81,123.10",
            status: "cancelled"
        },

    ]
    const statusColor = {
        Pending: "#797EB2",
        cancelled: "#DC2626",
        completed: "#059669",
        processing: "#F5A50B"
    };
    const filteredTransaction = searchItem
        ? TransDetail.filter((data) => {
            return (
                data.id.toLowerCase().includes(searchItem.toLowerCase()) || // Filter by ID
                data.type.name.toLowerCase().includes(searchItem.toLowerCase()) // Or filter by type name
            );
        })
        : TransDetail;
    return (
        <TableContainer>
            <Table variant='simple' colorScheme='gray'>
                <TableCaption>Transcations Details </TableCaption>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date & Time <Icon as={IoCaretDown} /></Th>
                        <Th>Type</Th>
                        <Th>Amount</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredTransaction.map((trans) => (
                        <Tr key={trans.id}>
                            <Td>{trans.id}</Td>
                            <Td>
                                <Stack spacing={0}>
                                    <Text fontSize="sm" fontWeight="medium">{trans.date}</Text>
                                    <Text fontSize="xs" color="black.60">{trans.time}</Text>
                                </Stack>
                            </Td>
                            <Td>
                                <Stack spacing={0}>
                                    <Text fontSize="sm" fontWeight="medium">{trans.type.name}</Text>
                                    <Text fontSize="xs" color="black.60">{trans.type.transBy}</Text>
                                </Stack>
                            </Td>
                            <Td fontSize="sm" fontWeight="medium">{trans.amount}</Td>
                            <Td>
                                <Tag bg={statusColor[trans.status]} color="white" borderRadius="full">
                                    {trans.status}
                                </Tag>
                            </Td>
                        </Tr>
                    ))
                    }
                </Tbody>
            </Table>
        </TableContainer >
    )
}

export default TransactionTable