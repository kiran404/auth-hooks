import React from 'react';
import { Menu } from './components/Menu';
import { Signup } from './components/Signup';


function App() {
  return (
    <div className="App">
      <Menu />
      <h1>SignUp Sign In</h1>
      <Signup />
    </div>
  );
}

export default App;
