import { useState } from 'react';
import { BiSearch, BiCaretDown,BiCheck } from 'react-icons/bi';
import PropTypes from 'prop-types';
const DropDown = ({ SortBy, onSortChange, OrderBy, onOrderChange }) => {
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div
          onClick={()=>onSortChange("petName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Pet Name {(SortBy==="petName" )&&<BiCheck />}</div>
        <div
          onClick={()=>onSortChange("ownerName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Owner Name  {(SortBy==="ownerName" )&&<BiCheck />}</div>
        <div
          onClick={()=>onSortChange("aptNotes")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Notes {(SortBy=== "aptNotes")&&<BiCheck />}</div>
        <div
          onClick={()=>onOrderChange("asc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem">Asc {(OrderBy=== "asc")&&<BiCheck />}</div>
        <div
          onClick={()=>onOrderChange("desc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Desc {(OrderBy=== "desc")&&<BiCheck />}</div>
      </div>
    </div>
  )
};
DropDown.propTypes = {
  SortBy: PropTypes.string.isRequired,
  OrderBy: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired,
};
const Search = ({Query,OnQueryChange,SortBy,onSortChange,OrderBy,onOrderChange}) => {
    const [tooglesort, settooglesort] = useState(false);
    return (
        <div className="py-5">
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiSearch />
                    <label htmlFor="query" className="sr-only" />
                </div>
                <input type="text" name="query" id="query" value={Query}
                onChange={(e)=>{
                  console.log(e.target.value);
                  OnQueryChange(e.target.value)}}
                    className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Search" />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <div>
                        <button type="button"
                            onClick={()=>settooglesort(prev=>!prev)}
                            className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center" id="options-menu" aria-haspopup="true" aria-expanded="true">
                            Sort By <BiCaretDown className="ml-2" />
                        </button>
                        {tooglesort && <DropDown SortBy={SortBy} onSortChange={(sortval)=>onSortChange(sortval)} OrderBy={OrderBy} onOrderChange={(orderval)=>onOrderChange(orderval)}/>}
                    </div>
                </div>
            </div>
        </div>
    )
};
Search.propTypes = {
  Query: PropTypes.string.isRequired,
  SortBy: PropTypes.string.isRequired,
  OrderBy: PropTypes.string.isRequired,
  OnQueryChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired,
};
export default Search;