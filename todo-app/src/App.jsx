import { useState } from "react";
import Header from "./components/Header";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";                          

function App(){
    // Improved efficiency: State now stores objects with unique IDs and completion status
    const [todos,setTodos] = useState([])

    const handleAddTodo = (newTodoText) => {
        setTodos([{ id: crypto.randomUUID(), text: newTodoText, completed: false }, ...todos])
    }

    const handleDeleteTodo = (id) => {
        // Efficiency: Filter by unique id instead of rely on array indices
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleToggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    // Calculate stats dynamically
    const completedCount = todos.filter(t => t.completed).length;
    const pendingCount = todos.length - completedCount;

    return(
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4 sm:p-8">
            <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden shadow-indigo-500/20">
                <Header />
                
                {/* Stats Dashboard */}
                <div className="px-6 sm:px-8 pt-6">
                     <div className="flex justify-between items-center text-sm font-medium text-slate-300 bg-black/20 rounded-2xl p-4 border border-white/5 mb-6 shadow-inner">
                        <div className="flex flex-col items-center flex-1">
                            <span className="text-3xl font-bold text-white">{todos.length}</span>
                            <span className="text-xs uppercase tracking-wider text-slate-400 mt-1">Total Tasks</span>
                        </div>
                        <div className="w-px h-12 bg-white/10"></div>
                        <div className="flex flex-col items-center flex-1">
                            <span className="text-3xl font-bold text-emerald-400">{completedCount}</span>
                            <span className="text-xs uppercase tracking-wider text-slate-400 mt-1">Completed</span>
                        </div>
                        <div className="w-px h-12 bg-white/10"></div>
                        <div className="flex flex-col items-center flex-1">
                            <span className="text-3xl font-bold text-rose-400">{pendingCount}</span>
                            <span className="text-xs uppercase tracking-wider text-slate-400 mt-1">Pending</span>
                        </div>
                    </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <Todoinput addTodo={handleAddTodo} />
                    <TodoList 
                        todos={todos} 
                        deleteTodo={handleDeleteTodo} 
                        toggleTodo={handleToggleTodo}
                    />
                </div>
            </div>
        </div>
    )
}

export default App  