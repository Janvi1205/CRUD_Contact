
import { CgProfile } from 'react-icons/cg'

const Navbar=()=>{
    return(
        <div className='bg-white h-[60px]   flex  justify-center items-center gap-3  rounded-2xl mt-3'>
            <CgProfile className='text-2xl'/>
            <p className='text-xl font-bold'>Firebase Contact App</p>
        </div>


    );
}
export default Navbar;