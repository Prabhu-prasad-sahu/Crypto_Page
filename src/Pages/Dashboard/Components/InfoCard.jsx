import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Text, Tag } from '@chakra-ui/react';

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {


    return (
        <CustomCard
            bgColor={inverted ? "p.purple" : "white"}
            bgImg={imgUrl}
            bgSize="cover"
            bgRepeat='no-repeat'

        >
            <Tag
                bg={!inverted ? "p.purple" : "white"}
                color={inverted ? "p.purple" : "white"}
            >{tagText}</Tag>
            <Text textStyle="h5" fontWeight="medium" gap="16px" color={inverted ? "white" : "black"}>
                {text}
            </Text>
        </CustomCard >
    );
};


export default InfoCard