import { useState, createContext } from 'react'
import Parent from './Parent';

export const Context = createContext();

function ContextApp() {
  const [data, setData] = useState([
    {
      "id": 1,
      "name": "naveen"
    },
    {
      "id": 2,
      "name": "kumar"
    },
    
  ]);

  return (
    <Context.Provider value={[data, setData]}>
      <div>
        <Parent/>
      </div>
    </Context.Provider>
  );
}

export default ContextApp;
