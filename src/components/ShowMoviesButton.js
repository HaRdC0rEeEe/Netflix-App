import React from 'react';

const ShowMoviesButton = (props) => {
    return (
        <div>
            <button type="button" className='delete-button' onClick={props.showEveryMovie}>Show all movies</button>
        </div>
    );
}

export default ShowMoviesButton;
