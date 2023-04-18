import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from "../../service/ApiService";
import styled from "styled-components";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      showPassword: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const userID = data.get("userID");
    const password = data.get("password");

    // ApiService의 signin 메소드를 사용해 로그인
    signin({ userID: userID, password: password }).then(
      (response) => {
        localStorage.setItem("userID", userID);
        window.location.href = "/";
      }
    );
  }

  toggleIsActive = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  render() {
    const thisPwd = this.state.showPassword;
    
    return(
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Div $id>
            <Title>ID</Title>
            <Input 
              required
              id="userID" 
              name="userID" 
              type="text" 
              placeholder="아이디를 입력하세요." 
            />
          </Div>
          <Div>
            <Title>PW</Title>
            {thisPwd ? (
              <Input 
                required
                id="password" 
                name="password" 
                type="text" 
                placeholder="비밀번호를 입력하세요." 
              />
            ) : (
              <Input 
                required
                id="password" 
                name="password" 
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
          <Button type="submit"> 완료 </Button>
          <Link to="/"><Button $primary> 취소 </Button></Link>
          <Link
            to="/signup"
            style={{ color: "#6c8074", marginLeft: "350px", textDecoration: "none" }}
          >
            Sign up &rang;
          </Link>
        </Form>
      </Container>
    )
  }
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