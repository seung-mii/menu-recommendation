import React from 'react';
import { call } from '../../service/ApiService';
import { Link } from 'react-router-dom';
import styled from "styled-components";

class StarModifyItem extends React.Component {
  constructor(props) { 
    super(props);      
    this.state = { item: props.items };
  }

  update = (item) => {
    call("/star", "PUT", item).then((response) => 
      this.setState({items :response.data})
    );
  }

  modify = () => {
    this.update(this.state.item)
    alert("성공적으로 수정되었습니다");
  }

  onUpClick = (e) => {
    let thisStar = parseInt(this.state.item.star);
    if (thisStar != 5) thisStar = thisStar + 1;
    const thisItem = this.state.item;
    thisItem.star = thisStar.toString();
    this.setState({ item: thisItem });
  }
  onDownClick = (e) => {
    let thisStar = parseInt(this.state.item.star);
    if (thisStar != 0) thisStar = thisStar - 1;
    const thisItem = this.state.item;
    thisItem.star = thisStar.toString();
    this.setState({ item: thisItem });
  }

  render() {
    const item = this.state.item;

    return (
      <Container>
        <Form>
          <Div $>
            <Star>
              {item.star}
            </Star>
            <Grade>
              <Choice type="button" onClick={this.onUpClick}>
                <span class="material-symbols-rounded">arrow_drop_up</span>
                UP
              </Choice>
              <Choice type="button" onClick={this.onDownClick}>
                <span class="material-symbols-rounded">arrow_drop_down</span>
                DOWN
              </Choice>
            </Grade>
          </Div>
          <Link to="/"><Button $complete onClick={this.modify}> 완료 </Button></Link>
          <Link to="/"><Button $primary> 취소 </Button></Link>
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
  margin: 30px;
  margin-top: ${props => props.$ ? "80px" : "0px"};
  margin-bottom: ${props => props.$menu ? "0px" : "30px"};
  justify-content: space-between;
`

const Star = styled.div`
  position: relative;
  display: flex;
  color: #6c8074;
  margin: 30px 10px 0px 10px;
  font-size: 40px;
  justify-content: space-between;
`

const Comment = styled.h3`
  color: #6c8074;
  padding: 30px;
  font-size: 23px;
  font-weight: 900;
  text-align: center;
`

const Form = styled.form`
  width: 220px;
  margin: 0 auto;
`

const Button = styled.button`
  color: ${props => props.$primary ? "#6c8074" : "white"};
  background: ${props => props.$primary ? "white" : "#6c8074"};

  width: 90px;
  height: 42px;
  padding: 10px;
  margin: ${(props) => props.$complete ? "15px": "0px" };
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

export default StarModifyItem;