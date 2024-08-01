import React, { useState } from 'react';

const AnunnakiCalculator = () => {
  const [display, setDisplay] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const cuneiformMap = {
    '0': '𒐼', '1': '𒐕', '2': '𒐖', '3': '𒐗', '4': '𒐘',
    '5': '𒐙', '6': '𒐚', '7': '𒐛', '8': '𒐜', '9': '𒐝',
    '+': '𒃎', '-': '𒁁', '*': '𒀫', '/': '𒁉',
    '=': '𒈬', '.': '𒑱'
  };

  const cuneiformWords = {
    'clear': '𒆤𒂊𒊏',
    'submit': '𒉺𒅁𒊒',
    'error': '𒅗𒈨𒂊',
    'calculator': '𒉌𒄑𒉿',
    'anunnaki': '𒀭𒀀𒉣𒈾𒆠',
    'disapprove': '𒆷𒈠𒄀𒊒'
  };

  const toCuneiform = (str) => {
    return str.split('').map(char => cuneiformMap[char] || char).join('');
  };

  const fromCuneiform = (str) => {
    const reverseCuneiformMap = Object.fromEntries(
      Object.entries(cuneiformMap).map(([k, v]) => [v, k])
    );
    return str.split('').map(char => reverseCuneiformMap[char] || char).join('');
  };

  const handleClick = (value) => {
    setDisplay(display + value);
    setError('');
    setResult('');
  };

  const handleClear = () => {
    setDisplay('');
    setError('');
    setResult('');
  };

  const handleSubmit = () => {
    try {
      const arabicExpression = fromCuneiform(display);
      // eslint-disable-next-line no-eval
      const calculationResult = eval(arabicExpression);
      setResult(toCuneiform(calculationResult.toString()));
      setError('');
    } catch (err) {
      setError(cuneiformWords['disapprove']);
      setResult('');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg border-4 border-yellow-600">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-300 mb-2">{cuneiformWords['anunnaki']}</h2>
        <h3 className="text-xl text-yellow-400">{cuneiformWords['calculator']}</h3>
      </div>
      <div className="mb-4 relative">
        <input
          type="text"
          value={display}
          readOnly
          className="w-full p-3 text-right text-xl bg-black text-yellow-300 border-2 border-yellow-600 rounded-md shadow-inner"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent pointer-events-none rounded-md"></div>
      </div>
      {result && (
        <div className="mb-4 relative">
          <input
            type="text"
            value={result}
            readOnly
            className="w-full p-3 text-right text-xl bg-black text-cyan-300 border-2 border-cyan-600 rounded-md shadow-inner"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent pointer-events-none rounded-md"></div>
        </div>
      )}
      {error && (
        <div className="mb-4 p-4 bg-purple-900 border-2 border-purple-500 text-yellow-200 rounded-md">
          <h4 className="text-yellow-300 font-bold mb-2">{cuneiformWords['error']}</h4>
          <p>{error}</p>
        </div>
      )}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {['7', '8', '9', '/'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(cuneiformMap[btn])}
            className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-700 text-black rounded-md hover:from-yellow-600 hover:to-yellow-800 transition-colors shadow-md"
          >
            {cuneiformMap[btn]}
          </button>
        ))}
        {['4', '5', '6', '*'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(cuneiformMap[btn])}
            className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-700 text-black rounded-md hover:from-yellow-600 hover:to-yellow-800 transition-colors shadow-md"
          >
            {cuneiformMap[btn]}
          </button>
        ))}
        {['1', '2', '3', '-'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(cuneiformMap[btn])}
            className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-700 text-black rounded-md hover:from-yellow-600 hover:to-yellow-800 transition-colors shadow-md"
          >
            {cuneiformMap[btn]}
          </button>
        ))}
        <button
          onClick={() => handleClick(cuneiformMap['0'])}
          className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-700 text-black rounded-md hover:from-yellow-600 hover:to-yellow-800 transition-colors shadow-md"
        >
          {cuneiformMap['0']}
        </button>
        <button
          onClick={() => handleClick(cuneiformMap['.'])}
          className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-700 text-black rounded-md hover:from-yellow-600 hover:to-yellow-800 transition-colors shadow-md"
        >
          {cuneiformMap['.']}
        </button>
        <button
          onClick={() => handleClick(cuneiformMap['='])}
          className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-md hover:from-yellow-500 hover:to-yellow-700 transition-colors shadow-md"
        >
          {cuneiformMap['=']}
        </button>
        <button
          onClick={() => handleClick(cuneiformMap['+'])}
          className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-700 text-black rounded-md hover:from-yellow-600 hover:to-yellow-800 transition-colors shadow-md"
        >
          {cuneiformMap['+']}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={handleClear}
          className="p-3 bg-gradient-to-br from-purple-500 to-purple-700 text-yellow-200 rounded-md hover:from-purple-600 hover:to-purple-800 transition-colors shadow-md"
        >
          {cuneiformWords['clear']}
        </button>
        <button
          onClick={handleSubmit}
          className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-700 text-yellow-200 rounded-md hover:from-cyan-600 hover:to-cyan-800 transition-colors shadow-md"
        >
          {cuneiformWords['submit']}
        </button>
      </div>
    </div>
  );
};

export default AnunnakiCalculator;
