import MainContext from './MainContext'
import ToDoItems from './ToDoItems'
import { useState } from 'react'


function TodoList() {
  
    const [List , setList] = useState([]) 

  function inputList(inputvalue){
    setList([...List,inputvalue])
  }

  function deletedList(id){
    const new_array = List.filter((_,index)=>index!==id)
    setList(new_array)
  }
  function updateItem(id, newValue) {
    const updatedList = List.map((item, index) => (index === id ? newValue : item));
    setList(updatedList);
  }


  return (
    <div>
      
      {/* Input values are taken from here */}
      <MainContext  outputList={inputList}/>

      <div className={`flex flex-col items-center gap-2 mt-[100px] ml-auto mr-auto w-2/3 px-[100px]
      h-[500px] ${List.length > 0 && "border-2 border-black shadow-xl rounded" }  overflow-y-auto`}>

          {
            List.map((value,index)=>
            (
              // Here we give ListofVAlues and index , in return we take edited values or any deleted Value
                <ToDoItems key={index} Listid={index} ListofValues = {value} output = {deletedList} updateItem = {updateItem}/>
            )) 
          }
      
      </div>

    </div>
  )
}

export default TodoList
