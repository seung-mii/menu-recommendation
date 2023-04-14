import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const [login, setLogin] = useState(false);

  return (
    <Container>
      <Title>
        <Link to="/" style={{ color: "#6c8074", textDecoration: "none" }}>Tasty</Link>
      </Title>
      <Ul>
        {login ? (
          <li>Log out</li>  
          ) : (
          <li><Link to="/login" style={{ color: "#6c8074", textDecoration: "none" }}>Log in</Link></li>
        )}
      </Ul>
    </Container>
  );
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
  font-size: 22px;
  font-weight: 100;
  padding: 32px 50px 24px 24px;
  list-style: none;
`

export default Header;

