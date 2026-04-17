import { useState } from "react"

function Todoinput({addTodo}) {
    const [input,setInput] = useState("")

    const handleChange = (e) => {
        if(input.trim() !== ""){
            addTodo(input)
            setInput("")
        }
    }
    return(
        <div>
            <input type="text" placeholder="Enter your todo" 
            value={input} onChange={e=>setInput(e.target.value)} />
            <button onClick={handleChange}>Add</button>       
        </div>
       
    )
}

export default Todoinput    