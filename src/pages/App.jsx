import DashBoard from "../DashBoard"
import { useRoutes, RouterProvider, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import DetailView from "./DetailView"
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"

import axios from "axios";




const App = () => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY
  const location = "Austin, Tx"
  const options = '&include=days&elements=id,temp,feelslikemin,tempmin,datetime,moonphase,sunrise,sunset,moonrise,moonset,description,visibility,conditions'
  const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=' + API_KEY + options;
  const [data, setData] = useState([]);
  const [time, setTime] = useState("");
  const getWeather = async () => {
    const response = await axios.get(
      url
    );

    setData(response.data.days);

    setTime(response.data.days[0].moonrise);

  };

  useEffect(() => {
    getWeather().catch(e => console.log(e))
  }, [])

  let element = useRoutes([
    {
      path: "/",
      element: <DashBoard data={data} />
    },
    {
      path: "/:datetime",
      element: <DetailView data={data} />
    }
  ])

  return (
    <>
      
      {element}
    </>
  )
}
export default App;