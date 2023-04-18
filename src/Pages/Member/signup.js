import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../service/ApiService';
import styled from "styled-components";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      showPassword: false,
      user: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    const userID = data.get("userID");
    const password = data.get("password");
    const name = data.get("name");
    const nickname = data.get("nickname");
    const phone = data.get("phone");

    // ApiService의 signin 메소드를 사용해 로그인
    signup({ userID: userID, password: password, name: name, nickname: nickname, phone: phone }).then(
      (response) => {
        window.location.href = "/login";
      }
    );
  }

  toggleIsActive = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  onUserClick = () => {
    this.setState({ user: true });
  }
  onRepresentativeClick = () => {
    this.setState({ user: false });
  }
  
  render() {
    const thisPwd = this.state.showPassword;
    const IsUser = this.state.user;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Div $top>
            <Q>어떤 입장으로 회원가입을 하실 건가요?</Q>
            <Button onClick={this.onUserClick} style={{ margin: "7px", width: "75px", fontSize: "15px"}}> 사용자 </Button>
            <Button onClick={this.onRepresentativeClick} style={{ margin: "7px", width: "75px", fontSize: "15px"}}> 점주 </Button>
          </Div>
          <Div>
            <Title>ID</Title>
            <Input 
              required
              name="userID" 
              id="userID" 
              type="text" 
              placeholder="아이디를 입력하세요."
            />
          </Div>
          <Div>
            <Title>PW</Title>
            {thisPwd ? (
              <Input
                required
                name="password" 
                id="password" 
                type="text" 
                placeholder="비밀번호를 입력하세요."
              />
              ) : (
              <Input 
                required
                name="password" 
                id="password" 
                type="password" 
                placeholder="비밀번호를 입력하세요."
              />
            )}
            {thisPwd ? (
              <Icon className="material-symbols-outlined" onClick={this.toggleIsActive}> visibility </Icon>
              ) : (
              <Icon className="material-symbols-outlined" onClick={this.toggleIsActive}> visibility_off </Icon>
            )}
          </Div>
          <Div>
            <Title>NAME</Title>
            <Input 
              required
              name="name" 
              id="name" 
              type="text" 
              placeholder="성명을 입력하세요."
            />
          </Div>
          {IsUser ? (
            <Div>
              <Title>NICKNAME</Title>
              <Input 
                required
                name="nickname" 
                id="nickname" 
                type="text" 
                placeholder="닉네임을 입력하세요."
              />
            </Div>
          ) : (
              <></>
          )}
          <Div>
            <Title>PHONE</Title>
            <Input 
              required
              name="phone" 
              id="phone" 
              type="text" 
              maxLength='11'
              placeholder="연락처를 입력하세요."
            />
          </Div>
          <Button type="submit"> 완료 </Button>
          <Link to="/"><Button $primary> 취소 </Button></Link>
          <Link
            to="/login"
            style={{ color: "#6c8074", marginLeft: "440px", textDecoration: "none"}}
          >
            Log in &rang;
          </Link>
        </Form>
      </Container>
    );
  }
}

const Container = styled.div`
  font-family: 'Titan One', 'cursive';
`

const Div = styled.div`
  position: relative;
  display: flex;
  margin: 20px 30px 30px 30px;
  margin-top: ${props => props.$top ? "80px" : "0px"};
  justify-content: ${props => props.$top ? "none" : "space-between"};
`

const Form = styled.form`
  width: 510px;
  margin: 0 auto;
`

const Q = styled.p`
  color: #6c8074;
  margin-right: 13px;
  padding: 5px;
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
  margin: ${props => props.$primary ? "20px" : "20px 20px 20px 150px"};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border: 2px solid #6c8074;
  border-radius: 4px;
  cursor: pointer;
`

export default Signup;