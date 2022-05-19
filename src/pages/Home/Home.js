import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Home = () => {

    const [items, setItems] = useState([]);
    const [stateChange, setStateChange] = useState(0);
    const [completeTask, setCompleteTask] = useState(0);

    useEffect(() => {
        fetch(' https://morning-springs-86841.herokuapp.com/items')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [stateChange, completeTask])

    const handleAdd = (e) => {
        e.preventDefault();
        if (e.target.name.value && e.target.description.value) {
            const name = e.target.name.value;
            const description = e.target.description.value;
            const item = { name, description }

            fetch(' https://morning-springs-86841.herokuapp.com/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            })
                .then(response => response.json())
                .then(data => {
                    setStateChange(stateChange + 1);
                })
            e.target.reset();
        }
    }

    const handleDelete = (id, item) => {
        if (item.textStyle) {
            setCompleteTask(completeTask - 1)
        }
        console.log(item.textStyle);
        fetch(` https://morning-springs-86841.herokuapp.com/items/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data.deletedCount) {
                    setStateChange(stateChange + 1);
                }
            })
    }

    const handleComplete = (id) => {
        const style = { textStyle: true }
        fetch(` https://morning-springs-86841.herokuapp.com/items/${id}`, {
            method: 'PUT',
            body: JSON.stringify(style),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setCompleteTask(completeTask + 1);
                    toast.success('Task Complete', { autoClose: 1000 });
                }
            });
    }



    return (
        <div className='flex justify-center my-8'>
            <div className='w-8/12 bg-stone-800 p-5'>
                <h2 className='text-3xl font-medium text-white text-center'>Complete Task {completeTask}</h2>
                <div className='my-5'>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th className='w-64'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td className={item.textStyle ? "line-through" : ""}>{item.name.slice(0, 20)}</td>
                                    <td className={item.textStyle ? "line-through" : ""}>{item.description.slice(0, 40)}</td>
                                    <td>
                                        <button onClick={() => handleComplete(item._id)} className="btn btn-primary btn-sm mr-5">Complete</button>
                                        <button onClick={() => handleDelete(item._id, item)} className="btn btn-error text-white btn-sm">Delete</button>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <form onSubmit={handleAdd} className="text-center">
                    <input name='name' type="text" placeholder="Task Name" className="input w-full max-w-xs mr-7" />
                    <input name='description' type="text" placeholder="Task Description" className="input w-full max-w-xs mr-7" />
                    <input type="submit" value="Add Task" className="btn btn-success text-white" />
                </form>
            </div>
        </div>
    );
};

export default Home;