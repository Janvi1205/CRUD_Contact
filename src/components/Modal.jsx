import { MdClose } from "react-icons/md";



const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; //if modal is not open dont render anything
    return (
        <div className="fixed flex  inset-0 z-50 items-center justify-center bg-black//40 backdrop-blur-sm">
            <div className="bg-amber-400  w-[600px] h-[300px] p-10 rounded-2xl ">

                <button className="absolute cursor-pointer -mt-6 ml-127" onClick={onClose}><MdClose className="text-3xl font-bold" /></button>{/*on clicking on this button it calls onclose button in the app.jsx and setmodal to false....which means modal will be closed */}

                <div className="">
                    <p className="text-2xl font-bold">Enter the name </p>
                    <input className="bg-white w-lg mt-3 p-1 rounded-lg" type="text" name="" id="" />
                </div>
                 <div className="mt-5">
                    <p className="text-2xl font-bold">Enter your Email</p>
                    <input className="bg-white w-lg mt-3 p-1 rounded-lg" type="text" name="" id="" />
                 </div>
                 
                 <div className="gap-30 flex mt-7 justify-center">
                    <button className=" px-7 py-1 bg-green-400 text-white font-bold rounded-md cursor-pointer">Save</button>
                    <button onClick={onClose} className="px-5 py-1  bg-red-600 text-white font-bold rounded-md cursor-pointer">Cancel</button>
                 </div>

            </div>
        </div>

    )
}
export default Modal;
