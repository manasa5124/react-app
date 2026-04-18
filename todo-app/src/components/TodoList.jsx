import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, deleteTodo, toggleTodo}){
    if (todos.length === 0) {
        return (
            <div className="text-center py-10 px-4 text-slate-400 border border-dashed border-white/10 rounded-2xl bg-white/5">
                <p>No tasks yet. Add one above!</p>
            </div>
        );
    }

    return(
        <div className="space-y-3">
            {/* Efficiency: use unique todo.id for key instead of index to prevent unnecessary re-renders */}
            {todos.map((todo)=>(
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    deleteTodo={deleteTodo} 
                    toggleTodo={toggleTodo} 
                />
            ))}
        </div>
    )
}

export default TodoList