import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../store/actions/userActions';
import styled from "styled-components";

function Login({history}) {

const dispatch = useDispatch();

const userLogin = useSelector((state)=> state.userLogin); //reducername userLogin  
const { userInfo } = userLogin;

useEffect(() => {
    console.log("inside useeffect");
  if(userInfo && userInfo.isAdmin){
      history.push('/admin');
  }
}, [userInfo, history]);

const [formState, setFormState] = useState({
    email: "",
    password: ""
});

const handleEmailChange = (e) => {
    const email = e.target.value;
    const stateCopy = {...formState};
    stateCopy.email = email;
    setFormState(stateCopy);
}

const handlePasswordChange = (e) => {
    const password = e.target.value;
    const stateCopy = {...formState};
    stateCopy.password = password;
    setFormState(stateCopy);
}

const handleSubmit =(e) => {
    e.preventDefault();
    dispatch(login(formState.email, formState.password))
}

    return ( 
    <form onSubmit={handleSubmit}>
        <InputWrapper>
            <label>email: <input type="text" onChange={handleEmailChange}/></label> <br/>
            <label>password: <input type="password" onChange={handlePasswordChange}/></label> <br />
        </InputWrapper>
        <input type="submit"/>
    </form> 
    );
}

export default Login;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;



