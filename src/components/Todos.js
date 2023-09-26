import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();



    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-xl font-semibold mb-4">Todos</h1>
            {todos.map((todo) => (
                <div key={todo.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className="text-gray-800">{todo.text}</span>
                    <button className="text-red-600 hover:text-red-800 transition duration-300 ease-in-out" onClick={() => dispatch(removeTodo(todo.id))}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Todos