import React, { useState } from 'react';
import { Link } from "react-router-dom";
import signUpSchema from '../../verification/signUpSchema';
import useForm from "../../hooks/useForm";
import styled, { createGlobalStyle, css } from "styled-components";
import * as yup from "yup";
import axios from 'axios';


const GlobalStyle = createGlobalStyle`
html {
	height: 100%;
	


}

body {
	font-family: Arial, Helvetica, sans-serif;
	background: linear-gradient(to bottom, #24C6DC, #514A9D);
	height: 100%;
	margin: 0;
	color: #555;
}
	
h2 {
	text-align: center;
	color: #ffffff;
}
input {
display: block;
width: 100%;
background-color: #eee;
border: 1px sold #ddd;
box-sizing: border-box;
margin: 10px 0 20px 0;
padding: 10px;
}
div {
    padding-top: 2rem;
    text-align: center;
}
`;

const sharedStyles = css`
	background-color: #eee;
	border-radius: 5px;
	border: 1px sold #ddd;
	margin: 10px 0 20px 0;
	padding: 20px;
	box-sizing: border-box;
`;


const StyledForm = styled.form`
	width: 100%;
	max-width: 700px;
	padding: 100px;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;


const StyledInput = styled.label`
	display: block;
	width: 100%;
	${sharedStyles};
`;

const StyledButton = styled.button`
	display: block;
	background-color: #ade8f4;
	color: #0077b6;
	font-size: 0.9rem;
	border: 0;
	border-radius: 5px;
	height: 40px;
    width: 11rem;
	padding: 0 20px;
    //====SPACE BETWEEN BUTTON AND EMAIL=====
    margin-top: 3rem;
	cursor: pointer;
	box-sizing: border-box;
    
    
`;

const NavLink = styled(Link)`
	color: white;
	text-decoration: none;
	&:hover {
		color: red;
		background: blue;
	}
`;
const schema = yup.object().shape({
	username: yup.string().required('A username is required'),
	password: yup.string().required('A password is required'),
	confirmPw: yup.string().required('You must confirm your password').oneOf([yup.ref('password')], 'The passwords must be the same'),
	role_id: yup.string()
  });
  

const defaultValues = {
    username: "",
    password: "",
    confirmPassword: "",
    roleType: "2",
}
const initialFormErrors = {
	username: "A username is required",
	password: "A password is required",
	confirmPw: "You must confirm your password",
	roleType: ""
  };


function SignUp() {

    const [formValues, error, setFormValues] = useForm(signUpSchema, defaultValues);
	const [formErrors, setFormErrors, currentError, setCurrentError, displayError, setDisplayError ] = useState([])


    const onSubmit = evt => {
        evt.preventDefault();
        schema.isValid(formValues).then((valid) => {
			if (valid) {
			  axios.post('https://bw-anywhere-fitness1-app.herokuapp.com/api/auth/register', {username:formValues.username, password:formValues.password, role_type:formValues.role_type})
				.then(() => {
				  axios.post('https://bw-anywhere-fitness1-app.herokuapp.com/api/auth/register', {username:formValues.username, password:formValues.password})
					.then(resp => {
					  localStorage.setItem('token', resp.data.token);
					  localStorage.setItem('user_id', resp.data.user_id);
					  localStorage.setItem('role_type', resp.data.role_type);
					  localStorage.setItem('username', formValues.username);
				  })
				})
				.catch(err => {
				  setCurrentError(err.response.data.message);
				  setDisplayError(true);
				})
			} else {
			  setDisplayError(true);
			}
		  });
		}
		const onChange = (event) => {
			const { name, value } = event.target;
			setFormValues({ ...formValues, [name]: value });
			if(name==='confirmPassword'){
			  if(formValues.password===value){
				setFormErrors({ ...formErrors, [name]: ''});
				setCurrentError(formErrors.username ? formErrors.username : formErrors.role_type ? formErrors.role_type : formErrors.password);
			  } else {
				setFormErrors({ ...formErrors, [name]:value ? 'The passwords must be the same' : initialFormErrors[name]});
				setCurrentError(value ? 'The passwords must be the same' : initialFormErrors[name]);
			  }
			} else {
			  if(name==='password'){
				if(formValues.confirmPassword===value){
				  setFormErrors({ ...formErrors, confirmPassword: ''});
				  setCurrentError(formErrors.username ? formErrors.username : formErrors.role_id ? formErrors.role_id : formErrors.password);
				} else {
				  setFormErrors({ ...formErrors, confirmPassword:value ? 'The passwords must be the same' : initialFormErrors['confirmPw']});
				  setCurrentError(value ? 'The passwords must be the same' : initialFormErrors['confirmPw']);
				}
			  }
			  yup
      .reach(schema, name)
      .validate(value)
      .then(() => {setFormErrors({ ...formErrors, [name]: "" }); setCurrentError(name!=='username'&&formErrors.username ? formErrors.username : name!=='role_type'&&formErrors.role_id ? formErrors.role_id : name!=='password'&&formErrors.password ? formErrors.password : formErrors.confirmPw);})
      .catch((err) => {setFormErrors({ ...formErrors, [name]: err.errors[0] }); setCurrentError(err.errors[0]);});
    }
    console.log(formValues);
  };


    return (
			<>
				<GlobalStyle />

				<h2>Create an Account:</h2>
				<StyledForm onSubmit={onSubmit}>
      				{displayError && <p style={{color: 'red'}}>{currentError}</p>}
      				<label>
        				Username:
        				<input
          					type="text"
          					name="username"
          					value={formValues.username}
          					onChange={onChange}
        				/>
      				</label>
      				<label>
        				Password:
        				<input
          					type="password"
          					name="password"
          					value={formValues.password}
          					onChange={onChange}
        				/>
      				</label>
      				<label>
       					 Confirm Password:
        				<input
          					type="password"
          					name="confirmPassword"
          					value={formValues.confirmPassword}
          					onChange={onChange}
        				/>
      				</label>
      				<label>
        				Role:
        				<select name='role_type' onChange={onChange}>
          					<option value='2'>Client</option>
          					<option value='1'>Instructor</option>
        				</select>
      				</label>
					<StyledButton data-cy="submit" disabled={error} type="submit">
						Create Account
					</StyledButton>
					<div>
						<NavLink to="/login">Already have an account?</NavLink>
					</div>
				</StyledForm>
			</>
		);
}

export default SignUp;