import React from 'react';



const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
                >
                X
                </button>
        </div>
    );
}

export default Option;