import Practices from 'components/Practices';
import ContextApp from 'components/useContext';

import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'plus':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>
        <h2>State: {state} </h2>
      </div><br />
      <button onClick={() => dispatch({ type: 'plus'})}>Plus</button>
      <button onClick={() => dispatch({ type: 'minus'})}>Minus</button>
      <br />
      <Practices />
    </div>
  );
}

export default App;
