import { useState } from 'react';

export default function AgeCalc() {
  const [inputYear, setInputYear] = useState('');
  const [rememberAge, setRememberAge] = useState(null);

  const calculateAge = () => {
    const now = new Date().getFullYear();
    setRememberAge(now - inputYear + 1);
  };

  return (
    <div>
      <h1 className='px-8 py-6 font-bold text-2xl'>👴나이 계산기</h1>
      <input
        className='px-3 py-2 mx-5 my-5 rounded-md border border-gray-800'
        type="number"
        value={inputYear}
        onChange={(e) => setInputYear(e.target.value)}
        placeholder="태어난 연도"
      />
      <button className='mb-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-md' onClick={calculateAge}>계산</button>
      {rememberAge && <p className='px-8 mt-4 text-2xl font-bold'>나이: {rememberAge}세</p>}
    </div>
  );
}