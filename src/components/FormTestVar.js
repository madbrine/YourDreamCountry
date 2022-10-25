import React, {useState} from 'react';

const FormTestVar = (props) => {
    let a1 = props.answer.ans1
    let a2 = props.answer.ans2
    let a3 = props.answer.ans3
    let a4 = props.answer.ans4
    const [colorStyle, setColorStyle] = useState({
        a1:{color:'black'},
        a2:{color:'black'},
        a3:{color:'black'},
        a4:{color:'black'},})
    const resulter1 = () => {
        props.updateResult(props.answer.key + 'a ')
        setColorStyle({
            a1:{color:'green'},
            a2:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},
            a3:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},
            a4:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},})}
    const resulter2 = () => {
        props.updateResult((props.answer.key + 'b '))
        setColorStyle({
            a1:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},
            a2:{color:'green'},
            a3:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},
            a4:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},})}
    const resulter3 = () => {
        props.updateResult((props.answer.key + 'c '))
        setColorStyle({
            a1:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},
            a2:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},
            a3:{color:'green'},
            a4:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},})}
    const resulter4 = () => {
        props.updateResult((props.answer.key + 'd '))
        setColorStyle({
            a1:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},
            a2:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},
            a3:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'},
            a4:{color:'green'},})}

    if(a3==null){return (<div style={containerStyle}><div>{props.answer.question}</div>
            <div style={{marginLeft: 10, marginRight: 10,}}>
                <div style={variableStyle}>
                    <button style={AnswerStyle} onClick={resulter1}><td style={colorStyle.a1}>{a1}</td></button>
                </div>
                <div style={variableStyle}>
                    <button style={AnswerStyle} onClick={resulter2}><td style={colorStyle.a2}>{a2}</td></button>
                </div>
            </div></div>);}
    if(a4==null&&a3!=null){return (<div style={containerStyle}><div>{props.answer.question}</div>
        <div style={{marginLeft: 10, marginRight: 10,}}>
            <div style={variableStyle}>
                <button style={AnswerStyle} onClick={resulter1}><td style={colorStyle.a1}>{a1}</td></button>
            </div>
            <div style={variableStyle}>
                <button style={AnswerStyle} onClick={resulter2}><td style={colorStyle.a2}>{a2}</td></button>
            </div>
            <div style={variableStyle}>
                <button style={AnswerStyle} onClick={resulter3}><td style={colorStyle.a3}>{a3}</td></button>
            </div>
        </div></div>);}
    if(a4!=null){return (<div style={containerStyle}><div>{props.answer.question}</div>
        <div style={{marginLeft: 10, marginRight: 10,}}>
            <div style={variableStyle}>
                <button style={AnswerStyle} onClick={resulter1}><td style={colorStyle.a1}>{a1}</td></button>
            </div>
            <div style={variableStyle}>
                <button style={AnswerStyle} onClick={resulter2}><td style={colorStyle.a2}>{a2}</td></button>
            </div>
            <div style={variableStyle}>
                <button style={AnswerStyle} onClick={resulter3}><td style={colorStyle.a3}>{a3}</td></button>
            </div>
            <div style={variableStyle}>
                <button style={AnswerStyle} onClick={resulter4}><td style={colorStyle.a4}>{a4}</td></button>
            </div>
        </div></div>);}
};

export default FormTestVar;

const containerStyle = {
    textAlign: 'center',
    margin: 4,
    justifyContent: 'center',
    border: 'solid',
    paddingTop: 10,
    backgroundColor: '#e3e3e3',
    borderColor: '#dadada',
    borderRadius: 7,
}
const variableStyle = {
    marginTop: 12,
    marginBottom: 12
}
const AnswerStyle ={
    backgroundColor: '#cbcb',
    borderColor: '#cbcb',
    borderRadius: 5,
    padding: 8,
    border: 'none',
}