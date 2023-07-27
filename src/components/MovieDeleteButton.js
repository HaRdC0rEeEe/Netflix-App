import React from 'react';
import "./MovieDeleteButton.css"

const MovieDeleteButton = (props) => {
    return (
        <div>
            <button type="button" onClick={props.delete}>Smazat film</button>
        </div>
    );
}

export default MovieDeleteButton;
