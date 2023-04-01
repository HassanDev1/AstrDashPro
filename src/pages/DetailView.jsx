import { Card, CardBody, CardHeader, Text, Flex, VStack } from '@chakra-ui/react';
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import MoonEmoji from "../Components/MoonPhaseIcon"
const DetailView = ({ data }) => {

  let { datetime } = useParams()
  let description = data.filter((item) => item.datetime === datetime)


  return (
    <Flex
      width='100vw'
      h='100vh'
      alignItems='center'
      justifyContent='space-between'
      gap='2'
      backgroundImage="url('src/assets/space-background.jpg')"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <VStack

        p='2em'
        width='20%'
        height='100%'
        sx={innerBoxStyles} backdropFilter='auto' backdropContrast='80%'
        color='whiteAlpha.700'
      >
        <Header />
        <Navbar />
      </VStack>

      <VStack

        p='2em'
        width='80%'

        sx={innerBoxStyles} backdropFilter='auto' backdropContrast='80%'
        color='whiteAlpha.700'
      >
        {description[0] && description.length > 0 ? (
          <Card color="white" size="lg" sx={innerBoxStyles} backdropFilter='auto' backdropContrast='80%'>

            <CardHeader>
              <Text>Date: {description[0].datetime}</Text>
              <Text>Phase: <MoonEmoji moonphas = {description[0].moonphase}/></Text>
              <Text>Visibility: {description[0].visibility}% </Text>
              <Text>Moonrise: {description[0].moonrise} pm</Text>
              <Text>Moonset: {description[0].moonset} pm</Text>
            </CardHeader>
            <CardBody>
              Description: {description[0].description}
            </CardBody>

          </Card>) :

          <Text color="white" fontSize={"4xl"}>No Data</Text>
        }
      </VStack>
    </Flex>

  )

}



const innerBoxStyles = {
  display: 'flex',
  color: '#44397B',
  textShadow: '0 0 20px black',
  fontWeight: 'bold',
  fontSize: '20px',
}
export default DetailView