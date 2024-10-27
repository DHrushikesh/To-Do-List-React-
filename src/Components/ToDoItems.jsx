import { MdDelete } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import {  MdSave } from "react-icons/md";

function ToDoItems(prop){
    const [marked , setmarked] = useState(false)
    const [isEditing , setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(prop.ListofValues);
    function Delete(){
        prop.output(prop.Listid)
    }
    function MarkCompleted(){
        setmarked(!marked)
    }
    function handleEdit() {
        setIsEditing(true);
    }

    function handleSave() {
        editValue == "" ? alert("Please Enter Some Value") 
        : 
        prop.updateItem(prop.Listid, editValue);
        setIsEditing(false);
    }
    return (
        <>
            <div className={`min-w-[400px] rounded-lg min-h-[100px] mt-5 bg-[#9B7EBD] ${marked && " line-through decoration-4"}
               flex  items-center justify-between px-4 overflow-x-auto font-poppins border-2 border-black shadow-xl `}>

                <button >
                <FaBookmark onClick={MarkCompleted} className={`${marked ? "text-green-400" : "text-white"} text-black size-[30px]`}/>
                </button>   

                {isEditing ? (
                <input
                    className="mx-[2px] text-[#3B1E54] font-bold text-xl  px-2 rounded"
                    value={editValue}
                    name="EditingExsisting Value"
                    onChange={(e) => setEditValue(e.target.value)}
                />
                 ) : (
                    <h1 className="ml-[2px] text-[#EEEEEE] font-bold text-xl">{prop.ListofValues}</h1>
                )}


                <div>
                {isEditing ? (
                    <button onClick={handleSave}>
                        <MdSave className="text-white size-[30px] " />
                    </button>
                ) : (
                    <button onClick={handleEdit}>
                        <IoMdSettings className="text-black size-[30px]" />
                    </button>
                )}

                <button onClick={(e)=>(Delete(e))}>
                <MdDelete className="hover:animate-bounce text-red-700 size-[30px]"/>
                </button>
                </div>


            </div>
        </>
    )
}
export default ToDoItems