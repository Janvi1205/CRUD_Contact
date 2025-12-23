import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Modal from "./components/Modal"
import Contactcard from "./components/Contactcard";


const App = () => {

  const [contact, setcontact] = useState([]);



  const getcontact = async () => {                    //db is the firestore database and contact is the name of the collection 
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





  const [isModalOpen, setIsModalOpen] = useState(false);  //created a usestate to handle modal


  return (
    <div className="mx-auto max-w-[830px]">

      <Navbar />
      <Search onaddclick={() => setIsModalOpen(true)} /> {/* made a function which setmodal to true adn send it to search */}


      <div className="mt-5 ml-4">
        {contact.map((contact) => (
          <Contactcard key={contact.id} contact={contact} />

        ))}
      </div>
      <div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onaddcontact={getcontact} />{/* made a function which setmodal to false adn send it to modal */}


      </div>


    </div>



  )


}
export default App;