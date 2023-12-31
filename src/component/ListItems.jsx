import React from 'react';

function ListItems({ id, title, deleteHandler, doneHandler, done }) {
    return (
        <li className={`list-group-item d-flex justify-content-between${done ? ' bg-success text-white' : ''}`} >
            {done ? <del>{title}</del> : title}
            <div>
                <button className="btn btn-small bg-danger text-white ms-2" onClick={() => deleteHandler(id)} > <i className="fas fa-trash"></i></button>
                <button className={`btn btn-small text-white ${done ? "bg-warning" : " bg-success"}`} onClick={() => doneHandler(id)}>
                    {
                        done ? <i className="fa fa-undo-alt"></i> : <i className="fa fa-check"></i>
                    }



                </button>
            </div>
        </li>
    );
}

export default ListItems;
