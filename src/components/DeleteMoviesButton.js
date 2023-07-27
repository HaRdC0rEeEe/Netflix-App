import React from 'react';
import "./DeleteMoviesButton.css"

const DeleteMoviesButton = (props) => {
    return (
        <div>
            <button type="button" className='delete-button' onClick={props.deleteEveryMovie}>Remove every movie</button>
        </div>
    );
}

export default DeleteMoviesButton;
