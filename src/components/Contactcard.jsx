import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";


const Contactcard=({contact})=>{
    return(
        <div key={contact.id} className="bg-amber-400 w-[450px] justify-around  flex items-center p-1 rounded-xl mt-5" >
            <div className="flex items-center gap-7 ">
              <CgProfile className="text-4xl"/>
              <div className="">
                <p >{contact.name}</p>
                <p>{contact.email}</p>
              </div>

            </div>
            <div className="flex gap-3">
              <RiEditCircleFill className="text-4xl" />
              <MdDelete className="text-4xl" />

            </div>
          </div>

    )
}
export default Contactcard;