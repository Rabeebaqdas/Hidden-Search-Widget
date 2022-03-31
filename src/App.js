import { useState } from 'react';
import './App.css';

function App() {
  const [count,setcount] = useState(false);
  return (
    <div className={`search ${count ? "active" : ""}`}>
      <input type="text" className='input' placeholder='Search....' />
      <button className='btn' onClick={()=>setcount(!count)}>
        <i className=' fas fa-search'></i>
      </button>
    </div>
  );
}

export default App;
