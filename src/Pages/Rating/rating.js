import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import star from "../../images/star.png";
import star_border from "../../images/star_border.png";

function Rating() {
  const [starState, setstarState] = useState(false);

  const toggleIsOn = () => {
    setstarState(!starState);
  }
  
  return (
    <Container>
      <Form>
        <Div $>
          <Img src={star}/>
          <Img src={star}/>
          <Img src={star}/>
          <Img src={star}/>
          <Img src={star_border} />
          <Grade>
            <Choice>
              <span class="material-symbols-rounded">arrow_drop_up</span>
              UP
            </Choice>
            <Choice>
              <span class="material-symbols-rounded">arrow_drop_down</span>
              DOWN
            </Choice>
          </Grade>
        </Div>
        <Button $complete> 완료 </Button>
        <Link to="/"><Button $primary> 취소 </Button></Link>
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
  margin: 30px;
  margin-top: ${props => props.$ ? "80px" : "0px"};
  margin-bottom: ${props => props.$menu ? "0px" : "30px"};
  justify-content: space-between;
`

const Form = styled.form`
  width: 300px;
  margin: 0 auto;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
  color: #6c8074;
  margin: 0px;
  padding-top: 25px;
  justify-content: 0px;
`

const Button = styled.button`
  color: ${props => props.$primary ? "#6c8074" : "white"};
  background: ${props => props.$primary ? "white" : "#6c8074"};

  width: 90px;
  height: 42px;
  padding: 10px;
  margin: ${(props) => props.$complete ? "20px 20px 20px 100px": "0px" };
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border: 2px solid #6c8074;
  border-radius: 4px;
  cursor: pointer;
`

const Grade = styled.div`
  color: #6c8074;
  background: white;
  width: 80px;
  height: 42px;
  padding: 10px;
  font-size: 16px;
  font-weight: 100;
  border : 0px;
  text-align: center;
  cursor: pointer;
`

const Choice = styled.button`
  color: #6c8074;
  background: white;
  display: flex;

  width: 120px;
  height: 42px;
  padding: 10px;
  font-size: 16px;
  font-weight: 200;
  border : 0px;
  text-align: center;
  font-family: 'Titan One', 'cursive';
  cursor: pointer;
`

export default Rating;