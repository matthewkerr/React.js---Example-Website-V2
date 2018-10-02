import React from 'react';

const input = ( props ) => {
    let inputElement = null;
    const inputClass = "form-control";

    if (props.invalid && props.shouldValidate && props.touched) {
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = 
                <input type="input" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name"
                    onChange={props.changed}
                />
            break;
        case ( 'textarea' ):
            inputElement = 
                <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    placeholder="message" 
                    rows="3"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}>
                </textarea>
            break;
        
        default:
            inputElement = 
                <input type="input" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name"
                    {...props.elementConfig}
                    onChange={props.changed}
                    value={props.value}
                />
    }

    return (
        <div>
            <label htmlFor="exampleFormControlInput1">Name</label>
            {inputElement}
        </div>
    );

};

export default input;