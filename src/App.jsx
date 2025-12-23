import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { db } from "../firebase";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import Modal from "./components/Modal"
import Contactcard from "./components/Contactcard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import{toast} from "react-toastify"



const App = () => {

  const [contact, setcontact] = useState([]);

  const [editing, setediting] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");



  const getcontact = async () => {       //db is the firestore database and contact is the name of the collection 
    const contactref = collection(db, "contacts");  // means Point to the contacts collection in Firestore

    const Snapshot = await getDocs(contactref);  //Fetches ALL documents inside contacts and Wait until Firebase finishes fetching data  //snapshpt is A container holding all fetched documents
    const contactlist = Snapshot.docs.map((doc) => ({    //Snapshot.docs = array of documents
      id: doc.id,
      ...doc.data()


    }));
    console.log("Contacts from Firestore:", contactlist);

    setcontact(contactlist);

  }
  useEffect(() => {
    getcontact();
  }, []);    // [] means--->“When my page opens, run this code one time”



  const handledelete = async (id) => {      //recieves the id of the deletd item from contactcard and do the operation of deleting  

    await deleteDoc(doc(db, "contacts", id)) //for deleting firebase used deleteDoc

    setcontact((prev) => prev.filter((c) => c.id != id));  // remove from UI instantly (no refetch needed)
     toast.success("Contact Deleted successfully 🎉");



  }



  const [isModalOpen, setIsModalOpen] = useState(false);  //created a usestate to handle modal

  const handleEdit = (contact) => {
    setediting(contact);
    setIsModalOpen(true);
  };

  const filtercontact = contact.filter((c) => c.name.toLowerCase()
                                              .includes(searchTerm.toLowerCase()));

  return (
    <div className="mx-auto max-w-[830px]">

      <Navbar />
      <Search onaddclick={() => setIsModalOpen(true)} onsearch={setSearchTerm} /> {/* made a function which setmodal to true adn send it to search */}


      <div className="mt-5 ml-4">
        {filtercontact.map((contact) => (
          <Contactcard onedit={handleEdit} contact={contact} ondelete={handledelete} /> //passed the handle delete function

        ))}
      </div>
      <div>
        <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setediting(null) }} onaddcontact={getcontact} editingContact={editing} />{/* made a function which setmodal to false adn send it to modal */}


      </div>
       <ToastContainer position="top-right" autoClose={2000} />

    </div>



  )


}
export default App;