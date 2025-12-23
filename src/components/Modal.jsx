
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"; 



const Modal = ({ isOpen, onClose,onaddcontact }) => {

     const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handlesubmit = async (e) => {

        e.preventDefault();
        console.log({name,email});

        await addDoc(collection(db,"contacts"),{
            name,
            email,
        });

        setName("");
        setEmail("");

        onaddcontact();
        onClose();




    }


    if (!isOpen) return null; //if modal is not open dont render anything
    return (
        <div className="fixed flex  inset-0 z-50 items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-amber-400 relative w-[600px] h-[300px] p-10 rounded-2xl ">
                <form onSubmit={handlesubmit}  action="">
                    <button className="absolute cursor-pointer -mt-6 ml-127" onClick={onClose}><MdClose className="text-3xl font-bold"  type="button"/></button>{/*on clicking on this button it calls onclose button in the app.jsx and setmodal to false....which means modal will be closed */}
                                                                                                                                        {/*mentioned here type=button coz it is under the form so if use click on cross button it might trigger the <on>                                                                                                        </on>sumbit thing */}

                    <div className="">
                        <p className="text-2xl font-bold">Enter the name </p>
                        <input className="bg-white w-lg mt-3 p-1 rounded-lg" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="mt-5">
                        <p className="text-2xl font-bold">Enter your Email</p>
                        <input className="bg-white w-lg mt-3 p-1 rounded-lg" type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>




                    <div className="gap-30 flex mt-7 justify-center">
                        <button type="submit"  className=" px-7 py-1 bg-green-400 text-white font-bold rounded-md cursor-pointer">Save</button>
                        <button onClick={onClose} className="px-5 py-1  bg-red-600 text-white font-bold rounded-md cursor-pointer">Cancel</button>
                    </div>
                </form>

            </div>
        </div>

    )
}
export default Modal;
