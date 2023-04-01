import {Text} from "@chakra-ui/react"
const MoonEmoji = ({moonphas}) => {
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
export default MoonEmoji