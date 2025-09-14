import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Simple Todo app with React thanhxcode </p>
        {/* <MyComponent /> */}
        <ListTodo />
      </header >

      <ToastContainer />
    </div >
  );
}

export default App;
