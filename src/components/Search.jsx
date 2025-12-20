import { FaSearch } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";


const Search = () => {
    return (
        <div className="flex justify-center mt-10 gap-3">
            <div className="flex   relative items-center ">
                <FaSearch className=" ml-3 text-2xl absolute" />
                <input className="bg-white w-[740px]  p-2 rounded-2xl pl-12 text-lg  " type="text" name="" id="" placeholder="Search By Name" />

                
            </div>
            <div>
                <IoAddCircleOutline  className=" text-5xl text-white" />
            </div>
        </div>

    )
}
export default Search;
