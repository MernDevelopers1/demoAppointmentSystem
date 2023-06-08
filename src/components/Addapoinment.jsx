import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";
import PropTypes from "prop-types";
const AddApoinment = ({lastId,sendinfo}) => {
    const cleardata = {
        ownerName: "",
        petName: "",
        aptDate: "",
        aptTime: "",
        aptNotes:""
    }
    const [appointmentflag, setapointmentflag] = useState(false);
    const [formdata, setformdata] = useState(cleardata);
    const handleChange = (e) => {
        setformdata(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const publishcontent = () => {
        console.log("called");
        const aptinfo = {
            id: lastId + 1,
            petName: formdata.petName,
            ownerName: formdata.ownerName,
            aptDate: formdata.aptDate + " " + formdata.aptTime,
            aptNotes: formdata.aptNotes
        };
        sendinfo(aptinfo);
        setformdata(cleardata);
        setapointmentflag(prev => !prev);
    }
    return (
        <div>
            <button onClick={() => setapointmentflag(prev => !prev)}
                className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${appointmentflag? "rounded-t-md":"rounded-md"}`}>
                <div><BiCalendarPlus className="inline-block align-text-top" />  Add Appointment</div>
            </button>
            {
                appointmentflag &&  <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Owner Name
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="ownerName" id="ownerName" value={formdata.ownerName} onChange={(e)=>handleChange(e)}
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Pet Name
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="petName" id="petName" onChange={(e)=>handleChange(e)} value={formdata.petName}
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Apt Date
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="date" name="aptDate" id="aptDate" onChange={(e)=>handleChange(e)} value={formdata.aptDate}
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Apt Time
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="time" name="aptTime" id="aptTime" onChange={(e)=>handleChange(e)} value={formdata.aptTime}
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Appointment Notes
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea id="aptNotes" name="aptNotes" rows="3" onChange={(e)=>handleChange(e)} value={formdata.aptNotes}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="flex justify-end">
                        <button type="submit" onClick={publishcontent} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
           }
        </div>
    );
};
AddApoinment.propTypes = {
  lastId: PropTypes.number.isRequired,
  sendinfo: PropTypes.func.isRequired
};
export default AddApoinment;