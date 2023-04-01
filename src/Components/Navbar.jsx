import { Text, VStack, Icon } from "@chakra-ui/react"
import { InfoIcon, MoonIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom"
const Navbar = () => {

  return (
    <VStack color="whiteAlpha.800" fontSize={"3xl"} spacing={10}>

      <Link to={"/"}><Text>Dashboard</Text></Link>
      <Link to={"/"}><Text>Search</Text></Link>
      <Link to={"/"}> <Text> <Icon as={InfoIcon}  /> {'   About'}</Text>
      </Link>
    </VStack>
  )
}
export default Navbar