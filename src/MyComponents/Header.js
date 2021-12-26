import React, { useState} from 'react'

export const Header = (props) => {
    const [name, setname] = useState("");
    const [rating, setrating] = useState("");


    const submit = (e) =>{
        e.preventDefault();
        if(!name || !rating){
            alert("name or rating Cannot be blak")
        }

        props.addTask(name,rating);
    }

    return (
        <div className="container my-3">
        <h3>Add Review</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" value={name} className="form-control" onChange={(e) =>{
                    setname(e.target.value)
                }} id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="rating" className="form-label">Review</label>
                <input type="text" value={rating} className="form-control" onChange={(e) => {
                    setrating(e.target.value)
                }} id="rating" />
            </div>
            
            <button type="submit" className="btn btn-sm btn-success">Add</button>
        </form>
        </div>
    )
}
