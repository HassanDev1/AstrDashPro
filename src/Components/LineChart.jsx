import {Text, VStack,Card} from "@chakra-ui/react"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  Legend
} from "recharts";

const Charts = ({data}) => {



  return (
  <Card bgColor='#44397B' color="white" size="md" fontSize="sm" mb="2em">
    <LineChart
    width={350}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <Line
      type="monotone"
      dataKey="moonphase"
      stroke="#8884d8"
      activeDots={{r:8}}
    />
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="datetime" interval={4} dx={80}/ >
    

    <YAxis />
     <Tooltip />
    <Legend />
    
  </LineChart>
     </Card> 
     
  )
}

export default Charts