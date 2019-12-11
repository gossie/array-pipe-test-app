import React from 'react';
import Test from './Test';

export default function App() {
    const left = 'array\n  .map(s => parseInt(s))\n  .some(n => n%2 === 0);';
    const right = 'array.pipe(\n  map(s => parseInt(s)),\n  some(n => n%2 === 0)\n);'

    return (
        <div>
            <span>
                <Test defaultCode={left} />
            </span>
            <span>
                <Test defaultCode={right} />
            </span>
        </div>
    );
}
