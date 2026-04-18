import React from "react";

function TodoItem({ todo, deleteTodo, toggleTodo }){
    return(
        <div className={`group flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors ${todo.completed ? 'opacity-60 bg-black/20' : ''}`}>
            
            <div 
                className="flex items-center gap-4 flex-1 overflow-hidden cursor-pointer" 
                onClick={() => toggleTodo(todo.id)}
            >
                {/* Custom Checkbox */}
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${todo.completed ? 'bg-emerald-500 border-emerald-500' : 'border-slate-500 group-hover:border-indigo-400'}`}>
                    {todo.completed && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
                
                {/* Task Text with strike-through animation */}
                <p className={`text-lg truncate transition-all duration-300 ${todo.completed ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                    {todo.text}
                </p>
            </div>

            <button 
                onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}
                className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-400/10 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-rose-500/50 flex-shrink-0 ml-2"
                aria-label="Delete task"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
        </div>
    )
}

export default TodoItem