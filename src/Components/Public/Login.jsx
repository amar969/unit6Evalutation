import React from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";




const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmailWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
`;

const InputWrapper = styled.input`
  border: none;
  outline: none;
`;

export const Login = () => {

    const {user} = useSelector(state => state)
    const dispatch = useDispatch()

    console.log(user)

    const [email, setEmail] = React.useState("")
    const [pass, setPass] = React.useState("")
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    } 

    const handlePass = (e) => {
        setPass(e.target.value)
    } 

    const handleSubmit = async() => {

        const payload = {
            email : email, 
            password: pass,
        }

        let res = await fetch("https://reqres.in/api/login", {
            method: "POST", 
            body: JSON.stringify(payload),
            headers: {
                "Content-type" : "application/json"
            }
        })
        let data = await res.json()
        console.log(data.token)

        // data.token ? dispatch(LOGIN(data.token)) : ""

        localStorage.setItem("user", true)
    }

  return (
    <>
      <LoginWrapper>
        <h1> Welcome to Movie App </h1>
        <h2>Login</h2>

        <EmailWrapper>
          <h4>Email</h4>
          <input
            value= {email}
            onChange={handleEmail}
            style={{
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none",
              outline: "none",
              fontSize: "18px",
            }}
            type="text"
          />
        </EmailWrapper>

        <EmailWrapper>
          <h4>Password</h4>
          <input
            value={pass}
            onChange={handlePass}

            style={{
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none",
              outline: "none",
              fontSize: "18px",
            }}
            type="text"
          />
          <br />
        </EmailWrapper>
        <button onClick={handleSubmit}  style={{ backgroundColor: "#8879B0", padding: "15px", fontSize: "18px", color: "white", border: "none", borderRadius: "10px", marginTop:"20px"    }} > Login </button>
      </LoginWrapper>
    </>
  );
};
