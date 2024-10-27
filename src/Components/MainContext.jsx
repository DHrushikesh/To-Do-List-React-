import { useState } from "react";
function MainContext(prop){
    const [inputvalue , setInputValue] = useState("");

    function OnSubmit(){
        (inputvalue=="") ? alert("Please Enter a Value") :
        prop.outputList(inputvalue)
        setInputValue("")
    }

    return (
        <>
        {/*Field To Take Input Values  */}

        <div className="h-fit w-[350px] mt-8 mx-auto bg-[#9977c0] rounded-lg flex
        flex-col  items-center gap-6 py-5 text-[#EEEEEE]  font-poppins">

            <h1 className="font-poppins mt-[10px] font-bold">Enter Details of your List Here </h1>
            
            
            <input id="inputfield" value={inputvalue} onChange={(e)=>{setInputValue(e.target.value);}}
            className="rounded-lg px-2 text-[#3B1E54]" type="text" />
           
            {/* Submit Button */}
            <button  onClick={()=>(OnSubmit())}
            className="border-2 border-yellow-200 p-1 h-fit w-fit bg-[#3B1E54]
            rounded-lg ">
                Submit
            </button>


        </div>

        </>
    )
}
export default MainContext