const Modal=({isOpen,onClose})=>{
    if (!isOpen) return null; //if modal is not open dont render anything
    return(
        <div className="bg-amber-100 ">
            <input className="bg-white" type="text" name="" id="" />
            <button onClick={onClose} >close</button>{/*on clicking on this button it calls onclose button in the app.jsx and setmodal to false....which means modal will be closed */}


        </div>

    )
}
export default Modal;
