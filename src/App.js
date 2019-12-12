import React from 'react';
import Test from './Test';

export default function App() {
    const left = 'array\n  .map(s => parseInt(s))\n  .some(n => n%2 === 0);';
    const right = 'array.pipe(\n  map(s => parseInt(s)),\n  some(n => n%2 === 0)\n);'

    return (
        <div>
            This application was created to quickly compare <a href="https://github.com/gossie/array-pipe">array-pipe</a> implementation with conventional implementations. Check out the documentation to find out more about <a href="https://github.com/gossie/array-pipe">array-pipe</a>.<br/>
            When you click "Run" an array "Number of elements" many entries will be created. The variable name will just be array. The array consists of string encoded numbers in ascending order, beginning with 1 (something like this: ['1', '2', '3', ..., '1000000']). That array can then be used in your code in the codebox.
            <span>
                <Test defaultCode={left} />
            </span>
            <span>
                <Test defaultCode={right} />
            </span>
        </div>
    );
}
