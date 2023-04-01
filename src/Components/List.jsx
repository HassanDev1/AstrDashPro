import {RangeSlider,RangeSliderFilledTrack,RangeSliderTrack,RangeSliderThumb,Button,Text,Heading,TableContainer,Table,Thead,Tr,Th,Td,Tbody,HStack,Input,Icon} from "@chakra-ui/react"
import { Search2Icon, SunIcon,LinkIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const List=({data})=>{
 const [searchByPhase, setSearchByPhase] = useState(data);
  const [moonphase, setMoonphase] = useState(0.0);
  const [searchByDate, setSearchByDate] = useState([]);
  const [date, setDate] = useState("");
  

  useEffect(() => {
    const showByDate = data.filter(
      (item) => item.datetime === (date === "" ? item.datetime : date)
    );
    setSearchByDate(showByDate);
  }, [data, date]);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const handleSearch = () => {
   const showByDate = data.filter((item) => item.datetime === (date === "" ? item.datetime : date));
    setSearchByDate(showByDate);

   const showByMoonPhase = searchByDate.filter(
      (item) => item.moonphase <= moonphase
    );
    setSearchByPhase(showByMoonPhase);
  
  };
  const moonEmoji = (moonphas) => {
    if (moonphas === 0) {
      return (
        <>
          <Text>🌑</Text>
          <Text fontSize='xs'>New Moon</Text>
        </>
      );
    } else if (moonphas < 0.25) {
      return (
        <>
          🌒
          <Text fontSize='xs'>Waxing Crescent</Text>
        </>
      );
    } else if (moonphas === 0.25) {
      return (
        <>
          🌓
          <Text fontSize='xs'>First Quarter</Text>
        </>
      );
    } else if (moonphas < 0.5) {
      return (
        <>
          🌔
          <Text fontSize='xs'>Waxing Gibbous</Text>
        </>
      );
    } else if (moonphas === 0.5) {
      return (
        <>
          🌕
          <Text fontSize='xs'>Full</Text>
        </>
      );
    } else if (moonphas < 0.75) {
      return (
        <>
          🌖
          <Text fontSize='xs'>Wanning Gibbous</Text>
        </>
      );
    } else if (moonphas === 0.75) {
      return (
        <>
          🌗
          <Text fontSize='xs'>Last Quarter</Text>
        </>
      );
    } else if (moonphas < 1.0) {
      return (
        <>
          🌘
          <Text fontSize='xs'>Waning Crescent</Text>
        </>
      );
    } else {
      return (
        <>
          <Text>🌑</Text>
          <Text fontSize='xs'>New Moon</Text>
        </>
      );
    }
  };
  

  return(
     <TableContainer width='50vw'  color='whiteAlpha.900'>
         <HStack spacing={"8"} mb={"6"}>
        <Input
          type='text'
          placeholder='Enter date'
          value={date}
          onChange={handleChange}
        />

        <RangeSlider
          defaultValue={[0, 100]}
          onChange={(val) => setMoonphase(val[1] / 100)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Button colorScheme='teal' onClick={handleSearch}>
          <Icon as={Search2Icon} />
        </Button>
      </HStack>
        <Table size='sm' variant='unstyled'>
          <Thead>
            <Tr>
              <Th fontSize='md'>Date</Th>
              <Th fontSize='md'>Temperature</Th>
              <Th fontSize='md'>Time</Th>
              <Th fontSize='md'>Phase</Th>
              <Th fontSize='md'>Details</Th>
            </Tr>
          </Thead>
          <Tbody >
            {searchByPhase && searchByPhase.length > 0 ? (
              searchByPhase.map((item, id) => (
                <Tr  key={id}>
                  <Td>{item.datetime}</Td>
                  <Td>{item.temp + " °F"}</Td>

                  <Td>{item.sunrise}</Td>

                  <Td>{moonEmoji(item.moonphase)}</Td>
                  <Td ><Link to={item.datetime} > <LinkIcon  boxSize={5}/></Link></Td>
                </Tr>
              ))
            ) : (
              <tr>
                <td>
                  <Heading m={"80%"}>No Data</Heading>
                </td>
              </tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
  )
}

export default List