import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Regist() {
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
        <Div $>
          <Title>Name of restaurant</Title>
          <Input type="text" placeholder="상호명을 입력하세요."/>
        </Div>
        <Div>
          <Title>Name of Representative</Title>
          <Input type="text" placeholder="대표자 성명을 입력하세요."/>
        </Div>
        <Div $menu>
          <Menu>
            <Title>Menu</Title>
            <Title $name>Name</Title>
            <InputMenu type="text" placeholder="대표 메뉴를 입력하세요."/>
            <Title>Price</Title>
            <InputMenu $price type="number" placeholder="가격을 입력하세요." />
          </Menu> 
        </Div>
        <Div>
          <Title>Location</Title>
          <Input type="text" placeholder="위치를 입력하세요."/>
        </Div>
        <Div>
          <Title>Restaurant Number</Title>
          <Input type="number" maxLength='11' placeholder='맛집의 전화번호를 입력하세요.'/>
        </Div>
        <Button $complete> 완료 </Button>
        <Link to = "/"><Button $primary> 취소 </Button></Link>
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
  margin: 30px;
  margin-top: ${props => props.$ ? "80px" : "0px"};
  margin-bottom: ${props => props.$menu ? "0px" : "50px"};
  justify-content: space-between;
`

const Form = styled.form`
  width: 720px;
  margin: 0 auto;
`

const Title = styled.h3`
  margin: 0px;
  padding: 0px;
  color: #6c8074;
  font-size: 23px;
  margin-left: ${props => props.$name ? "25px" : "0px"};;
  padding-top: 10px;
  vertical-align: middle;
  font-weight: 100;
`

const Menu = styled.div`
  margin-bottom: 50px;
  margin-left:${props => props.$price ? "4px" : "0px"};
  display: flex;
  text-align: right;
`

const Input = styled.input`
  width: 300px;
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

const InputMenu = styled.input`
  width: 160px;
  height: 35px;
  outline: none;
  font-size: 17px;
  font-weight: 400;
  padding: 5px 15px;
  margin-left: 16px;
  margin-right: ${props => props.$price ? "0px" : "20px"};
  border-radius: 1ch;
  border: 1px solid #6c8074;
`

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
  margin: ${props => props.$complete? "20px 20px 20px 225px" : "20px"};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border: 2px solid #6c8074;
  border-radius: 4px;
  cursor: pointer;
`

export default Regist;