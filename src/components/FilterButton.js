import React from 'react';

const FilterButton = (props) => {
    return (
        <div>
            <button type='button' onClick={props.filterMovies}>Filtruj {props.category}</button>
        </div>
    );
}

export default FilterButton;
