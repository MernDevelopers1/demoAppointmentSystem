import './App.css'
import {BiCalendar} from "react-icons/bi"
import Search from './components/Search'
import AddApoinment from './components/Addapoinment'
// import appointmentList from "./data.json";
import Appointmentinfo from './components/Appointmentinfo';
import { useCallback, useEffect, useState } from 'react';
function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [query,setQuery] = useState('');
  const [sortBy,setSortBy] = useState("petName");
  const [orderBy,setOrderBy] = useState("asc");
  const onDeleteAppointment = (appointmentId) => {
    setAppointmentList(prev => prev.filter(item => item.id !== appointmentId))
  };
  const fetchdata = useCallback(() => {
    fetch('./data.json')
      .then(Response => Response.json())
      .then(res=>setAppointmentList(res))
      .catch(e => console.log(e));
  },[]);
  useEffect(() => {
    fetchdata();
  }, [fetchdata]);
  const filteredData = appointmentList.filter(item => {
    return(
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase()) 
    )
  }).sort((a,b)=>{
    const order = (orderBy === 'asc')? 1 : -1;
    return(
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()? -1 * order : 1 * order
    );
  })
  return (
    <>
      <div className="App container mx-auto mt-3 font-thin">
        <h1 className="text-5xl mb-3">
          <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments</h1>
        <AddApoinment />
        <Search Query={query} OnQueryChange={(Querystring)=>{
          console.log(Querystring);
          setQuery(Querystring)}} />
        <ul className='divide-y divide-gray-200'>
          {
            filteredData.map((appointment) => {
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
