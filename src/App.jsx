// src/App.jsx
import './App.css';
// Later on, we'll import button components here

const App = () => {
  return (
    <div className="App">
      {
        <Button1 buttonText="Example 1" />
        <Button2 buttonText="Example 1" />
        <Button3 buttonText="Example 1" />
        <Button4 buttonText="Example 1" />
        <Button5 buttonText="Example 1" />
        <Button6 buttonText="Example 1" />
      }
    </div>
  );
};

export default App;
