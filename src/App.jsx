import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";


const App = () => {

  const [contact, setcontact] = useState([]);

  useEffect(() => {

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

    getcontact();

  }, [])// [] means--->“When my page opens, run this code one time”



  return (
    <div className="mx-auto max-w-[830px]">

      <Navbar />
      <Search />

      <div className="mt-5 ml-4">
        {contact.map((item) => (
          <div className="bg-amber-400 w-[450px] justify-around  flex items-center p-1 rounded-xl" key={item.id}>
            <div className="flex items-center gap-7 ">
              <CgProfile className="text-4xl  " />
              <div className="">
                <p >{item.name}</p>
                <p>{item.email}</p>
              </div>

            </div>
            <div className="flex gap-3">
              <RiEditCircleFill className="text-4xl" />
              <MdDelete className="text-4xl" />

            </div>
          </div>
        ))}
      </div>

    </div>



  )


}
export default App;