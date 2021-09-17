import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const { push } = useHistory()

  const [credentials, setCredentials] = useState({username:'', password:''})
  const [error, setError] = useState('')

  const handleLogin = (evt) =>{
    evt.preventDefault()

    if (credentials.username === '' || credentials.password === ''){
      setError('Username or Password not valid.')
    } else{
      setError('')
      axios.post('http://localhost:5000/api/login', credentials)
        .then(res=>{
          console.log(res.data.payload)
          localStorage.setItem('token', res.data.payload)
          push('/BubblePage')
        })
        .catch(err=>{
          console.error(err)
        })
    }
  }

  const handleChange = (evt) =>{
    setCredentials({
      ...credentials,
      [evt.target.id]: evt.target.value
    })

    if (evt.target.value === '') {
      setError(`${evt.target.placeholder} not valid.`)
    }else{
      setError('')
    }
  }



  // const error = ""; ------ replaced
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">


        <form onSubmit={handleLogin}>

          <input
            id="username"
            type='type'
            placeholder='Username'
            onChange={handleChange}
          />

          <input
            id="password"
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />

          <input
            id="submit"
            type='submit'
            value='Login'
          />
          

        </form>
      </div>
    
      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"