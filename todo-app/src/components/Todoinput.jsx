import { useState } from "react"

function Todoinput({addTodo}) {
    const [input,setInput] = useState("")

    const handleChange = () => {
        if(input.trim() !== ""){
            addTodo(input)
            setInput("")
        }
    }
    return(
        <div className="flex gap-3 mb-8">
            <input 
                type="text" 
                placeholder="What needs to be done?" 
                value={input} 
                onChange={e=>setInput(e.target.value)} 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-inner"
                onKeyDown={(e) => { if(e.key === 'Enter') handleChange() }}
            />
            <button 
                onClick={handleChange}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 active:scale-95 flex items-center justify-center min-w-[100px]"
            >
                Add
            </button>       
        </div>
    )
}

export default Todoinput