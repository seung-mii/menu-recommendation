import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Modify() {
  const [pwState, setPwState] = useState(false);

  const toggleIsOn = () => {
    setPwState(!pwState);
  }

  // const useConfirm = (message = null, onConfirm, onCancel) => {
  //   if (!onConfirm || typeof onConfirm !== "function") {
  //     return  <Link to="/"></Link>;
  //   }
  //   if (onCancel && typeof onCancel !== "function") {
  //     return;
  //   }

  //   const confirmAction = () => {
  //     if (window.confirm(message)) {
  //       onConfirm();
  //     } else {
  //       onCancel();
  //     }
  //   };

  //   return confirmAction;
  // };

  // const modifyConfirm = () => {
  //   console.log("수정했습니다.");
  // }
  // const cancelConfirm = () => {
  //   console.log("취소했습니다.");
  // }

  // const confirmModify = useConfirm(
  //   "수정하시겠습니까?",
  //   modifyConfirm,
  //   cancelConfirm
  // );

  // const confirmCancel = useConfirm(
  //   "취소하시겠습니까?",
  //   modifyConfirm,
  //   cancelConfirm
  // );

  return (
    <Container>
      <Form>
        <Div $id>
          <Title>ID</Title>
          <Input type="text" value="user01"/>
        </Div>
        <Div>
          <Title>PW</Title>
          {pwState ? (
            <Input type="text" value="12345"/>
            ) : (
            <Input type="password" value="12345"/>
          )}
          {pwState ? (
            <Icon className="material-symbols-outlined" onClick={toggleIsOn}> visibility </Icon>
            ) : (
            <Icon className="material-symbols-outlined" onClick={toggleIsOn}> visibility_off </Icon>
          )}
        </Div>
        <Div>
          <Title>NAME</Title>
          <Input type="text" value="김유저"/>
        </Div>
        <Div>
          <Title>NICKNAME</Title>
          <Input type="text" value="나는 유저다"/>
        </Div>
        <Div>
          <Title>PHONE</Title>
          <Input type="number" maxLength='11' value="01011111111" />
        </Div>
        <Button $complete> 완료 </Button>
        <Button $primary> 취소 </Button>
        <Button> 탈퇴 </Button>
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
  width: 510px;
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

const Id = styled.div`
  margin-top: 80px;
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

// const Input = styled.input:focus`
//   outline: none;
// `

const Icon = styled.span`
  position: absolute;
  top: 11px;
  left: 410px;
  color: #6c8074;
  cursor: pointer;
`

const Button = styled.button`
  color: ${props => props.$primary ? "#6c8074" : "white"};
  background: ${props => props.$primary ? "white" : "#6c8074"};

  width: 90px;
  height: 42px;
  padding: 10px;
  margin: ${props => props.$complete ? "20px 20px 20px 75px" : "20px"};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border: 2px solid #6c8074;
  border-radius: 4px;
  cursor: pointer;
`

export default Modify;