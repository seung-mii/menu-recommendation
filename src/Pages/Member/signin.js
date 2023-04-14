import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Signin() {
  const [pwState, setPwState] = useState(false);

  const toggleIsOn = () => {
    setPwState(!pwState);
  }

  return (
    <Container>
      <Form>
        <Div $id>
          <Title>ID</Title>
          <Input type="text" placeholder="아이디를 입력하세요."/>
        </Div>
        <Div>
          <Title>PW</Title>
          {pwState ? (
            <Input type="text" placeholder="비밀번호를 입력하세요."/>
            ) : (
            <Input type="password" placeholder="비밀번호를 입력하세요."/>
          )}
          {pwState ? (
            <Icon className="material-symbols-outlined" onClick={toggleIsOn}> visibility </Icon>
            ) : (
            <Icon className="material-symbols-outlined" onClick={toggleIsOn}> visibility_off </Icon>
          )}
        </Div>
        <Button> 완료 </Button>
        <Button $primary> 취소 </Button>
        <Link
          to="/signup"
          style={{ color: "#6c8074", marginLeft: "350px", textDecoration: "none"}}
        >
          Sign up &rang;
        </Link>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
  font-family: 'Titan One', 'cursive';
`

const Div = styled.div`
  position: relative;
  display: flex;
  margin: 20px 30px 30px 30px;
  margin-top: ${props => props.$id ? "80px" : "0px"};
  justify-content: space-between;
`

const Form = styled.form`
  width: 430px;
  margin: 0 auto;
`

const Title = styled.h3`
  margin: 0px;
  padding: 0px;
  color: #6c8074;
  padding-top: 10px;
  font-size: 23px;
  font-weight: 100;
  vertical-align: middle;
`

const Input = styled.input`
  width: 260px;
  height: 35px;
  outline: none;
  font-size: 17px;
  font-weight: 400;
  padding: 5px 15px 5px 15px;
  margin-left: 16px;
  border-radius: 1ch;
  border: 1px solid #6c8074;
`

const Icon = styled.span`
  position: absolute;
  top: 11px;
  left: 325px;
  color: #6c8074;
  cursor: pointer;
`

const Button = styled.button`
  color: ${props => props.$primary ? "#6c8074" : "white"};
  background: ${props => props.$primary ? "white" : "#6c8074"};

  width: 90px;
  height: 42px;
  padding: 10px;
  margin: ${props => props.$primary ? "10px 20px 20px 20px" : "10px 20px 30px 105px"};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border: 2px solid #6c8074;
  border-radius: 4px;
  cursor: pointer;
`

export default Signin;