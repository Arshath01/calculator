import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setDisplayValue('');
    } else if (value === '=') {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (value === 'Del') {
      setDisplayValue((prevValue) => prevValue.slice(0, -1));
    } else {
      setDisplayValue((prevValue) => prevValue + value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4 text-white">Calculator</h1>
        <input
          type="text"
          value={displayValue}
          className="border bg-gray-700 text-white w-full p-2 rounded mb-4"
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => handleButtonClick('7')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            7
          </button>
          <button
            onClick={() => handleButtonClick('8')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            8
          </button>
          <button
            onClick={() => handleButtonClick('9')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            9
          </button>
          <button
            onClick={() => handleButtonClick('/')}
            className="col-span-1 bg-blue-500 text-white p-4 rounded"
          >
            /
          </button>
          <button
            onClick={() => handleButtonClick('4')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            4
          </button>
          <button
            onClick={() => handleButtonClick('5')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            5
          </button>
          <button
            onClick={() => handleButtonClick('6')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            6
          </button>
          <button
            onClick={() => handleButtonClick('*')}
            className="col-span-1 bg-blue-500 text-white p-4 rounded"
          >
            *
          </button>
          <button
            onClick={() => handleButtonClick('1')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            1
          </button>
          <button
            onClick={() => handleButtonClick('2')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            2
          </button>
          <button
            onClick={() => handleButtonClick('3')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            3
          </button>
          <button
            onClick={() => handleButtonClick('-')}
            className="col-span-1 bg-blue-500 text-white p-4 rounded"
          >
            -
          </button>
          <button
            onClick={() => handleButtonClick('0')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            0
          </button>
          <button
            onClick={() => handleButtonClick('.')}
            className="col-span-1 bg-gray-700 text-white p-4 rounded"
          >
            .
          </button>
          <button
            onClick={() => handleButtonClick('=')}
            className="col-span-2 bg-green-500 text-white p-4 rounded"
          >
            =
          </button>
          <button
            onClick={() => handleButtonClick('+')}
            className="col-span-1 bg-blue-500 text-white p-4 rounded"
          >
            +
          </button>
          <button
            onClick={() => handleButtonClick('Del')}
            className="col-span-1 bg-red-600 text-white p-4 rounded"
          >
            Del
          </button>
          <button
            onClick={() => handleButtonClick('C')}
            className="col-span-2 bg-red-600 text-white p-4 rounded"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
