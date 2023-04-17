import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { call, signout } from '../../service/ApiService';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: [], IsLogin: false};
  }

  componentDidMount() {
    call("/auth/user", "GET", null).then((response) =>
      this.setState({item:response.data})
    );
  }

  render() {
    return (
      <Container>
        <Title>
          <Link to="/" style={{ color: "#6c8074", textDecoration: "none" }}>Tasty</Link>
        </Title>
        <Ul>
          {this.state.item.length > 0 ? (
            <>
              <li>
                <Link to="/modify" style={{ color: "#6c8074", textDecoration: "none", paddingRight: "35px" }}>
                  My page
                </Link>
              </li>
              <li>
                <Button color='inherit' onClick={signout}>
                  Log out
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" style={{ color: "#6c8074", textDecoration: "none" }}>Log in</Link>
            </li>
          )}
        </Ul>
      </Container>
    );
  }
}

const Container = styled.div`
  font-family: 'Titan One', 'cursive';
  font-weight: 100;
  height: 95px;
  display: flex;
  background-color: #dbe4c69f;
  justify-content: space-between;
`

const Title = styled.h1`
  margin: 0px;
  padding: 0px;
  font-weight: 400;
  color: #6c8074;
  font-size: 40px;
  padding: 20px 20px 20px 38px;
`

const Ul = styled.ul` 
  margin: 0px;
  padding: 0px;
  display: flex;
  color: #6c8074;
  font-size: 22px;
  font-weight: 100;
  padding: 32px 50px 24px 24px;
  list-style: none;
`

const Button = styled.button`
  font-family: 'Titan One', 'cursive';
  font-weight: 100;
  font-size: 22px;
  color: #6c8074;
  border: transparent;
  background-color: transparent;
`

export default Header;

