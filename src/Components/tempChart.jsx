import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Card} from "@chakra-ui/react"



const TempChart=({data})=> {
 
  
    return (
     <Card bgColor='#44397B' color="white" size="md" fontSize="sm">
        <BarChart
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="#8884d8" />
          
        </BarChart>
       </Card>
    
    );
  
}
export default TempChart