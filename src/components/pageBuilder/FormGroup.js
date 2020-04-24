import React, {useEffect} from 'react';

const FormGroup = (props) => {

    let formGroupClassNames = ['form-group'];

    formGroupClassNames = props.formGroupClassNames ? [...formGroupClassNames, ...props.formGroupClassNames] : formGroupClassNames;
    let inputClassNames = ['form-control'];
    inputClassNames = props.inputClassNames ? [...inputClassNames, ...props.inputClassNames] : inputClassNames;
    return (
        <div className={formGroupClassNames}>
            { props.label ? <label>{props.label}</label> : '' }
            <input
                name={props.input.name}
                type={props.input.type}
                className={inputClassNames}
                value={ props.input.value ? props.input.value : '' }
                placeholder={ props.input.placeholder ? props.input.placeholder : '' }
                onChange={(e)=> props.onInputChange(e)}
            />
        </div>
    );
};

export default FormGroup;