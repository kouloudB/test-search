import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [ cats, setCats] = useState('no url')
  const [ cat, setCat] = useState('nooo url')

  const history = useHistory();
  useEffect( ()=> {
    (async function anyNameFunction() {
      const cache = await caches.open('cats-cache');
      cache.add('/cats.json') 
      cache.put('/cats.json', new Response('{"james": "kitten", "daniel": "kitten"}'))
      const response = await cache.match('/cats.json');
      console.log("cache===>", response)
      setCats(response? response.toString() : 'fail')
      const respo = await cache.match('cats-cache');
      console.log("cache===>", respo)
      setCat(respo? respo.toString() : 'fail respo')
    })();
   
  }, [])
  const handleLogin= ()=>{
    history.push('/home')
    
  }
 
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <p>{"cats "+cats}</p>
      <p>{"cat=>>> "+cat}</p>

    </div>
  );
}

export default Login;
