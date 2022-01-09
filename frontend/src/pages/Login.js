import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../store/actions/userActions';
import styled from "styled-components";
import {
    Form,
    Container,
    Input,
    Label,
    Button
} from 'reactstrap';

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
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <InputWrapper>
                    <Label>Email: </Label>
                    <Input name="email" type="email" onChange={handleEmailChange}/>    
                    
                    <Label>Password:</Label>
                    <Input type="password" onChange={handlePasswordChange}/>
                </InputWrapper>

                <Button>Submit</Button>

            </Form> 
        </Wrapper> 
    );
}

const InputWrapper = styled.div`
    margin-bottom: 20px;
`;

const Wrapper = styled(Container)`
    padding-top: 20px;
    width: 50%
`
export default Login;





