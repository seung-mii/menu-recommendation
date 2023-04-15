import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Post() {
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
  //   "완료하시겠습니까?",
  //   modifyConfirm,
  //   cancelConfirm
  // );

  return (
    <Container>
      <Form>
        <Div $title>
          <Title>Title</Title>
          <Input type="text" placeholder="제목을 입력하세요."/>
        </Div>
        <Div>
          <Title>Contents</Title>
        </Div>
        <Div>
          <Textarea type="text" placeholder="내용을 입력하세요."></Textarea>
        </Div>
        <Button $complete> 완료 </Button>
        <Link to="/"><Button $primary> 취소 </Button></Link>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  list-style: none;
  text-decoration: none;
  font-family: 'Titan One', 'cursive';
`

const Div = styled.div`
  position: relative;
  display: flex;
  margin: 20px;
  margin-top: ${props => props.$title ? "80px" : "0px"};
  justify-content: space-between;
`

const Form = styled.form`
  width: 800px;
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
  width: 640px;
  height: 35px;
  outline: none;
  font-size: 17px;
  font-weight: 400;
  padding: 5px 15px 5px 15px;
  margin-left: 16px;
  border-radius: 1ch;
  border: 1px solid #6c8074;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  outline: none;
  font-size: 17px;
  font-weight: 400;
  padding: 15px;
  border-radius: 1ch;
  border: 1px solid #6c8074;
`

const Button = styled.button`
  color: ${props => props.$primary ? "#6c8074" : "white"};
  background: ${props => props.$primary ? "white" : "#6c8074"};

  width: 90px;
  height: 42px;
  padding: 10px;
  margin: ${props => props.$complete ? "20px 20px 20px 295px" : "20px"};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border: 2px solid #6c8074;
  border-radius: 4px;
  cursor: pointer;
`

export default Post;