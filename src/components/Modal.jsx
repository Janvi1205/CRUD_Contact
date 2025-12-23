
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react"; 
import { toast } from "react-toastify";



const Modal = ({ isOpen, onClose, onaddcontact, editingContact }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Pre-fill when editing
    useEffect(() => {
        if (editingContact) {
            setName(editingContact.name);
            setEmail(editingContact.email);
        } else {
            setName("");
            setEmail("");
        }
    }, [editingContact]);

    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log({ name, email });


        if (editingContact) {
            // UPDATE
            await updateDoc(doc(db, "contacts", editingContact.id),
                { name, email }
            );
            toast.success("Contact updated successfully...!")
        } 
        else {
            // ADD
            await addDoc(collection(db, "contacts"), { name, email });
             toast.success("Contact added successfully 🎉");
        }

        setName("");
        setEmail("");

        onaddcontact();// refresh UI
        onClose();




    }


    if (!isOpen) return null; //if modal is not open dont render anything
    return (
        <div className="fixed flex  inset-0 z-50 items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-amber-400 relative w-[600px] h-[300px] p-10 rounded-2xl ">
                <form onSubmit={handlesubmit} action="">
                    <button className="absolute cursor-pointer -mt-6 ml-127" onClick={onClose}><MdClose className="text-3xl font-bold" type="button" /></button>{/*on clicking on this button it calls onclose button in the app.jsx and setmodal to false....which means modal will be closed */}
                    {/*mentioned here type=button coz it is under the form so if use click on cross button it might trigger the <on>                                                                                                        </on>sumbit thing */}

                    <div className="">
                        <p className="text-2xl font-bold">Enter the name </p>
                        <input className="bg-white w-lg mt-3 p-1 rounded-lg" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mt-5">
                        <p className="text-2xl font-bold">Enter your Email</p>
                        <input className="bg-white w-lg mt-3 p-1 rounded-lg" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>




                    <div className="gap-30 flex mt-7 justify-center">
                        <button type="submit" className=" px-7 py-1 bg-green-400 text-white font-bold rounded-md cursor-pointer">{editingContact ? "Update" : "Save"}</button>
                        <button onClick={onClose} className="px-5 py-1  bg-red-600 text-white font-bold rounded-md cursor-pointer">Cancel</button>
                    </div>
                </form>

            </div>
        </div>

    )
}
export default Modal;
