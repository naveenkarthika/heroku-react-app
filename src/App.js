import Practices from 'components/Practices';
import ContextApp from 'components/useContext';
import State from 'StateManagement';
import LoginForm from 'formik/components/LoginForm';
import './App.css'


function App() {
  return (
    <div className="App">
      <LoginForm test="naveen" />
    </div>
  );
}

export default App;
