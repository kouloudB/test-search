import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [ cats, setCats] = useState('no url')
  const [ cat, setCat] = useState('nooo url')
  const history = useHistory();
useEffect( ()=> {
     (async function anyNameFunction() {
      const cache = await caches.open('accounts-cache');
      cache.add('/cats.json') 
      cache.put('/cats.json', new Response('{"james": "kitten", "daniel": "kitten"}'))
      const response = await cache.match('/cats.json');
      console.log("cache===>", response)
      setCats(response? response?.toString() : 'fail')
      const respo = await cache.match('accounts-cache');
      console.log("cache===>", respo)
      setCat(respo? respo?.toString() : 'fail respo')
    })();
   
  }, [])
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
