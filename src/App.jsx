import './App.css'
import {BiCalendar} from "react-icons/bi"
import Search from './components/Search'
import AddApoinment from './components/Addapoinment'
// import appointmentList from "./data.json";
import Appointmentinfo from './components/Appointmentinfo';
import { useCallback, useEffect, useState } from 'react';
function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const onDeleteAppointment = (appointmentId) => {
    setAppointmentList(prev => prev.filter(item => item.id !== appointmentId))
  };
  const fetchdata = useCallback(() => {
    fetch('./public/data.json')
      .then(Response => Response.json())
      .then(res=>setAppointmentList(res))
      .catch(e => console.log(e));
  },[]);
  useEffect(() => {
    fetchdata();
  }, [fetchdata]);
  return (
    <>
      <div className="App container mx-auto mt-3 font-thin">
        <h1 className="text-5xl mb-3">
          <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments</h1>
        <AddApoinment />
        <Search />
        <ul className='divide-y divide-gray-200'>
          {
            appointmentList.map((appointment) => {
              return (
                <Appointmentinfo key={appointment.id} appointment={appointment} onDeleteAppointment={onDeleteAppointment} />
              )
            })
          }
        </ul>
      </div>
    </>
  );
}
export default App
