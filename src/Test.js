import React, { useState } from 'react';
import './Test.css';
import '@gossie/array-pipe';
import Result from './Result';

var filter = require('@gossie/array-pipe/operators/filter').default;
var map = require('@gossie/array-pipe/operators/map').default;
var distinct = require('@gossie/array-pipe/operators/distinct').default;
var first = require('@gossie/array-pipe/operators/first').default;
var some = require('@gossie/array-pipe/operators/some').default;
var every = require('@gossie/array-pipe/operators/every').default;



export default function Test(props) {
    const [numberOfElements, setNumberOfElements] = useState(10000000);
    const [code, setCode] = useState(props.defaultCode);
    const [executionResult, setExecutionResult] = useState(undefined);
    const [time, setTime] = useState(-1);

    const callback = () => {
        console.debug('start building array');
        const array = [];
        for (let i = 1; i <= numberOfElements; i++) {
            array.push(`${i}`);
        }
        console.debug(`array created with the numbers from 1 to ${numberOfElements} as strings`);
        
        console.debug('start evaluating your code');
        const date1 = new Date();
        const result = eval(code);
        setExecutionResult(result);
        const date2 = new Date();
        const duration = date2.getTime() - date1.getTime()
        setTime(duration);

        console.debug(`finished evaluating. result: ${result}, time: ${duration}`);
    };

    return (
        <span className="test-container">
            <table>
                <tbody>
                    <tr>
                        <td>Number of elements:</td>
                        <td><input value={numberOfElements} onChange={event => setNumberOfElements(event.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Code:</td>
                        <td><textarea cols="50" rows="10" value={code} onChange={event => setCode(event.target.value)} /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={callback}>Run</button>
            { executionResult && <Result executionResult={executionResult} timeSpent={time} />}
        </span>
    );
}