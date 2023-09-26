import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo((input)));
        setInput(" ");
    }
    return (
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='border border-gray-300 p-2 rounded-md' />
            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add Todo</button>
        </form>
    )
}

export default AddTodo