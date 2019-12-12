import React from 'react';

export default function Result(props) {
    return (
        <table className="table is-fullwidth">
            <thead>
                <tr>
                    <th>Execution result</th>
                    <th>Time spent</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{`${props.executionResult}`}</td>
                    <td>{props.timeSpent} ms (This is just the time that was needed to execute the above code. The rest of the time you've waited was used to create the array.)</td>
                </tr>
            </tbody>
        </table>
    );
}
