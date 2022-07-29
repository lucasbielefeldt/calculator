import { useState } from 'react';
import './Calculator.css';

export function Calculator(){

    const [firstNum, setFirstNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operation, setOperation] = useState('');

    const getButtonValue = (e) => {
        let value = e.target.value;
        if(firstNum === 0){
            setFirstNum(value);
        }else {
            setFirstNum(firstNum + value);
        }
    }

    const operationHandler = (e) => {
        let operator = e.target.value;
        setOperation(operator);
        setOldNum(firstNum);
        setFirstNum(0)
    }

    const calculate = () => {
        if (operation === "+") {
            setFirstNum(parseFloat(oldNum) + parseFloat(firstNum))
        } else if (operation === "-") {
            setFirstNum(oldNum - firstNum)
        } else if (operation === "X") {
            setFirstNum(oldNum * firstNum)
        } else if (operation === "/") {
            setFirstNum(oldNum / firstNum)
        }
    }

    const changeSign = () => {
        if(firstNum > 0){
            setFirstNum(-firstNum);
        }else {
            setFirstNum(Math.abs(firstNum));
        }
    }

    const clearResult = () => {
        setFirstNum(0)
    } 

    const porcentage = () => {
        if(firstNum === 0){
            setFirstNum(0);
        }else {
            setFirstNum(firstNum / 100);
        }
    }

    return(
        <div className='container'>
        <div className='wrapper'>
            <div className="result">
                <h2>{firstNum}</h2>
            </div>
            <button className="btnRounded gray" onClick={clearResult} value={'AC'}>AC</button>
            <button className="btnRounded gray" onClick={changeSign} value={'+/-'}>+/-</button>
            <button className="btnRounded gray" onClick={porcentage} value={'%'}>%</button>
            <button className="btnRounded orange" onClick={operationHandler} value={'/'}>/</button>
            <br />
            <button className="btnRounded" onClick={getButtonValue} value={7}>7</button>
            <button className="btnRounded" onClick={getButtonValue} value={8}>8</button>
            <button className="btnRounded" onClick={getButtonValue} value={9}>9</button>
            <button className="btnRounded orange" onClick={operationHandler} value={'X'}>X</button>
            <br />
            <button className="btnRounded" onClick={getButtonValue} value={4}>4</button>
            <button className="btnRounded" onClick={getButtonValue} value={5}>5</button>
            <button className="btnRounded" onClick={getButtonValue} value={6}>6</button>
            <button className="btnRounded orange" onClick={operationHandler} value={'-'}>-</button>
            <br />
            <button className="btnRounded" onClick={getButtonValue} value={1}>1</button>
            <button className="btnRounded" onClick={getButtonValue} value={2}>2</button>
            <button className="btnRounded" onClick={getButtonValue} value={3}>3</button>
            <button className="btnRounded orange" onClick={operationHandler} value={'+'}>+</button>
            <br />
            <button className="btnRounded zero" onClick={getButtonValue} value={0}>0</button>
            <button className="btnRounded" onClick={getButtonValue} value={'.'}>,</button>
            <button className="btnRounded orange" onClick={calculate} value={'='}>=</button>
        </div>
        </div>
    )
}