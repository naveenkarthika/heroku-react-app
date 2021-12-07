import { useEffect, useState, memo, useCallback, useMemo } from 'react';
import ParentComponent from './ParentComponent';
import GlobalStyle from '../global-styles';
import axios from 'axios';
import Input from './Input';


const arr = ['one','two','three'];

function Practices() {

  const [data, setData] = useState([])
  const [count, setCount] = useState([])
  // const arr = useMemo(() => {
  //   return ['one','two','three']
  // }, []); // not dependancy array then move the array into outside of the function

  const handleFetch = async () => {
    try {
      let result = await axios.get('https://jsonplaceholder.typicode.com/comments').then(res => res.data);
      setData(result);
    } catch (e) { 
      console.log('e',e) 
    }
  }

  const handleIncrement = useCallback(() => {
    setCount(Math.floor(Math.random() * 10))
  }, [])
  
  useEffect(() => {
    handleFetch();
  }, [])

  return (
    <div>
      {/* <GlobalStyle /> */}
      <ParentComponent />
      {/* {data && data.length > 0 && data.map(el => (
        <p>{el.name} - {el.email}</p>
      ))} */}
      <Input />
      {count}
      <br />
      <Increment increment={handleIncrement} arr={arr}/>
    </div>
  );
}

const Increment = memo(({ increment }) => {
  console.log('Increment called')
  return (
    <button onClick={increment}>increment</button>
  )
})



export default Practices;
