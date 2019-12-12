import React from 'react';

export default function Result(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <td>Execution result:</td>
                    <td>{`${props.executionResult}`}</td>
                </tr>
                <tr>
                    <td>Time spent:</td>
                    <td>{props.timeSpent} ms (This is just the time that was needed to execute the above code. The rest of the time you've waited was used to create the array.)</td>
                </tr>
            </tbody>
        </table>
    );
}
