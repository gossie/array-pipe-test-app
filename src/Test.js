import React, { useState } from 'react';
import '@gossie/array-pipe';
import Result from './Result';

// This only exists so the code in the eval can reference the operators.
var filter = require('@gossie/array-pipe/operators/filter').default;
var map = require('@gossie/array-pipe/operators/map').default;
var distinct = require('@gossie/array-pipe/operators/distinct').default;
var first = require('@gossie/array-pipe/operators/first').default;
var some = require('@gossie/array-pipe/operators/some').default;
var every = require('@gossie/array-pipe/operators/every').default;



export default function Test(props) {
    const [numberOfElements, setNumberOfElements] = useState(1000000);
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
        <div>
            <div class="field">
                <label class="label">Number of elements</label>
                <div class="control">
                    <input type="text" className="input" value={numberOfElements} onChange={event => setNumberOfElements(event.target.value)} />
                </div>
            </div>
            <div class="field">
                <label class="label">Code</label>
                <div class="control">
                    <textarea className="textarea" rows="7" value={code} onChange={event => setCode(event.target.value)} />
                </div>
            </div>
            <div class="control">
                <button className="button is-primary" onClick={callback}>Run</button>
            </div>
            { executionResult && <Result executionResult={executionResult} timeSpent={time} />}
        </div>
    );
}
