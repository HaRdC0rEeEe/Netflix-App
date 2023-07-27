import React from 'react';
import "./Question.css"
import { useState } from 'react';

const Question = ({ title, info }) => {

    const [show, setShow] = useState(false);

    return (
        <div className='flex'>
            <button className="accordion" onClick={() => setShow(!show)}>{title}</button>
            <div className={`panel ${show ? 'show' : ''}`}>
                <p>{info}</p>
            </div>
        </div>
    );
}

export default Question;
