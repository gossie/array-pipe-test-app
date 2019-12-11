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
                    <td>{props.timeSpent}</td>
                </tr>
            </tbody>
        </table>
    );
}
