import React, {useState} from 'react';
import FormTestVar from "./FormTestVar";

const CoreTest = (props) => {
    const [result, setResult] = useState('')
    const updateResult = value => {

        setResult(result + value)
    }
    let questNumber = props.answer.length
    return (
        <div>
            {props.answer.map((answer, key)=>
            <FormTestVar answer={answer} key={key} updateResult={updateResult}></FormTestVar>)}
            <div>{result}</div>
        </div>
    );
};

export default CoreTest;