import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import { useEffect, useState } from "react";
import {isLoggedIn} from "../Sessions/sessions.js";
import { useHistory } from "react-router";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpaperaccess.com/full/1076692.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  // const navigate = useNavigate();
  const history = useHistory();
  // useEffect(() => {
  //   if (!isLoggedIn()){
  //     alert("you are already logged in!")
  //     history.push({
  //       pathname:  "/"
  //     });
  //   }
  // })
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState("")
  const [img, setImg] = useState("")



  const updateUserName = (event) =>{
    setUserName(event.target.value);
  }
  const updateEmail = (event) =>{
    setEmail(event.target.value);
  }
  const updatePassword = (event) =>{
    setPassword(event.target.value);
  }
  const updateIsAdmin = (event) =>{
    setIsAdmin(event.target.value);
  }
  const updateImg = (event) =>{
    setImg(event.target.value);
  }
  
  const fetchUserDetails = (event) =>{
    event.preventDefault()
    const options = {
      method: 'POST',
      url: '/api/auth/register/',
      headers: {'Content-Type': 'application/json'},
      data: {
        username: userName,
        email: email,
        password: password,
        isAdmin: isAdmin,
        img: img
      }
    };
    
    axios.request(options).then(function (response) {
      alert("Thank you! for registeration");
      console.log("hello")

      history.push({
        pathname:  "/"
      });
      // navigate("/")
      // console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={fetchUserDetails}>
          <Input placeholder="NAME" />
          <Input placeholder="LAST NAME" />
          <Input placeholder="USERNAME" value={userName} onChange={updateUserName} />
          <Input placeholder="EMAIL" value={email} onChange={updateEmail} type= {email}/>
          <Input placeholder="PASSWORD" type="password" value={password} onChange={updatePassword}/>
          <Input placeholder="CONFIRM PASSWORD" type="password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
