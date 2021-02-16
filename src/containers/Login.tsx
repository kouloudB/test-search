import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {

  const history = useHistory();

  const handleLogin= ()=>{
    history.push('/home')
    
  }
 
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
