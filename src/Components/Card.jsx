import { Card, CardBody, CardHeader, HStack, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"

const Cards = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(props.data[0])
  }, [props])

  console.log(data)
  return (


    <HStack>
      {data &&
        <>
      <Card bgColor='#44397B' color="white" size="lg">


        <CardBody>
          <Text>Texas</Text>
          <Text>Austin, Texas</Text>
        </CardBody>
      </Card>
      <Card bgColor='#44397B' color="white" size="lg">


        <CardBody>
          <Text>{data.tempmin + " °F"}</Text>
          <Text>Low Temp</Text>
        </CardBody>
      </Card>

      <Card bgColor='#44397B' color="white" size="lg" justify="center">

        <CardBody>
          <Text>{data.moonrise} pm</Text>
          <Text>Moon Rise</Text>
        </CardBody>
      </Card>

      <Card bgColor='#44397B' color="white" size="lg" >

        <CardBody align="center">
          <Text>🌕</Text>
          <Text>Moon phase</Text>
        </CardBody>
      </Card>
</>
      }
    </HStack>


  )
}
export default Cards