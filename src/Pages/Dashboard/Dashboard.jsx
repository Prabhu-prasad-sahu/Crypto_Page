import React from 'react'
import Dashboardlayout from '../../Components/Dashboardlayout';
import Portfolio from './Components/Portfolio';
import PriceingSec from './Components/PriceingSec';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import Transactions from './Components/Transactions';
import InfoCard from './Components/InfoCard';
const Dashboard = ({ title }) => {
    console.log(title)
    return (
        <Dashboardlayout title={title}>
            <Grid
                gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    xl: "repeat(2, 1fr)",
                }}
                gap="6"
            >
                <GridItem colSpan={{
                    base: 1,
                    xl: 2,
                }}
                >
                    <Portfolio />
                </GridItem>
                <GridItem colSpan={1}>
                    <PriceingSec />
                </GridItem>
                <GridItem colSpan={1}>
                    <Transactions />
                </GridItem>
                <GridItem colSpan={1}>
                    <InfoCard imgUrl="/Shapes.png"
                        text={"Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"}
                        tagText={"Loans"}
                        inverted={false}
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <InfoCard imgUrl="/Visual.png"
                        text={"Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"}
                        tagText={"Contact"}
                        inverted={true}
                    />
                </GridItem>
            </Grid>
        </Dashboardlayout>
    )
}

export default Dashboard