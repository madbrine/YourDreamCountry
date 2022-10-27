import React, {useState} from 'react';
import FormTestVar from "./FormTestVar";
import ResultTest from "./ResultTest";

const CoreTest = (props) => {
    const [result, setResult] = useState([
        '0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0',
        '0','0'
        ]
    )
    const updateResult = (v, ans)=> {
        let i = 0
        let value = v -1
        let newResult = result
        while(i<result.length){
            if(value == i){
                newResult[i] = ans
            }
            i++
        }
        setResult(newResult)
        console.log(result)
    }
    let questNumber = props.answer.length
    return (
        <div>
            {props.answer.map((answer, key)=>
            <FormTestVar answer={answer} key={key} updateResult={updateResult}></FormTestVar>)}
            <ResultTest result={result}/>
        </div>
    );
};

export default CoreTest;