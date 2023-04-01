import { Flex, VStack, Text, Heading, HStack } from '@chakra-ui/react'
import './App.css'
import Cards from "./Components/Card"
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import List from './Components/List'
import Charts from "./Components/LineChart"
import TempChart from "./Components/tempChart"
import VisualizationToggle from './Components/VisualizationToggle'





export default function DashBoard({ data }) {

  return (
    <Flex
      width='100vw'
      h='100vh'
     
      backgroundImage="url('src/assets/space-background.jpg')"
      bgRepeat="no-repeat"
      bgPosition="center"
    >

      <VStack

        mr="6"
        width='20%'
        height='100%'
        sx={innerBoxStyles} backdropFilter='auto' backdropContrast='80%'
        color='whiteAlpha.700'
      >
        <Header />
        <Navbar />
      </VStack>

      <VStack
        
        width='60%'
        height="100vh"
        //bgColor='#44397B'
        sx={innerBoxStyles} backdropFilter='auto' backdropContrast='80%'
        color='whiteAlpha.700'
      >
        <Cards data={data} />
        <List data={data} />
         
      </VStack>
      <VStack
        
        width='40%'
        height="100vh"
        //bgColor='#44397B'
        sx={innerBoxStyles} backdropFilter='auto' backdropContrast='80%'
        color='whiteAlpha.700'
      >
          <VStack mt="10em">
{/*           <Charts data={data}/>
          <TempChart data={data}/> */}
            <VisualizationToggle data={data}/>
          </VStack>
           
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