import { FaSearch } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";


const Search = ({onaddclick}) => {
    return (
        <div className="flex justify-center mt-10 gap-3">
            <div className="flex   relative items-center ">
                <FaSearch className=" ml-3 text-2xl absolute" />
                <input className="bg-white w-[740px]  p-2 rounded-2xl pl-12 text-lg  " type="text" name="" id="" placeholder="Search By Name" />

                
            </div>
            <button onClick={onaddclick}> {/* on clicking on this button this calls onaddclick function in app.jsx shose work was to setmodal=true..which means it will open the model*/}
                <IoAddCircleOutline  className=" cursor-pointer text-5xl text-white" />
            </button>
        </div>

    )
}
export default Search;
