import React from 'react';
import { call } from '../../service/ApiService';
import { Link } from 'react-router-dom';
import styled from "styled-components";

class Regist extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { item: {} };
  }

  handleSubmit(event) {
    event.preventDefault();

    call("/frestaurant", "POST", this.state.item).then((response) => 
      this.setState({items:response.data}),
      window.location.href = "/"
    );
  }

  onInputRestaurantChange = (e) => {
    const thisItem = this.state.item;
    thisItem.brand = e.target.value;
    this.setState({ item: thisItem });
  }
  onInputNameChange = (e) => {
    const thisItem = this.state.item;
    thisItem.name = e.target.value;
    this.setState({ item: thisItem });
  }
  onInputMenuChange = (e) => {
    const thisItem = this.state.item;
    thisItem.menu = e.target.value;
    this.setState({ item: thisItem });
  }
  onInputExplanationChange = (e) => {
    const thisItem = this.state.item;
    thisItem.explanation = e.target.value;
    this.setState({ item: thisItem });
  }
  onInputPriceChange = (e) => {
    const thisItem = this.state.item;
    thisItem.price = e.target.value;
    this.setState({ item: thisItem });
  }
  onInputLocationChange = (e) => {
    const thisItem = this.state.item;
    thisItem.location = e.target.value;
    this.setState({ item: thisItem });
  }
  onInputContactChange = (e) => {
    const thisItem = this.state.item;
    thisItem.contact = e.target.value;
    this.setState({ item: thisItem });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Div $>
            <Title>Name of restaurant</Title>
            <Input 
              required
              id="brand"
              name="brand"
              type="text" 
              placeholder="상호명을 입력하세요." 
              value={this.state.item.brand}
              onChange={this.onInputRestaurantChange}/>
          </Div>
          <Div>
            <Title>Name of Representative</Title>
            <Input 
              required
              id="name"
              name="name"
              type="text" 
              placeholder="대표자 성명을 입력하세요." 
              value={this.state.item.name}
              onChange={this.onInputNameChange}/>
          </Div>
          <Div $menu>
            <Menu>
              <Title>Menu</Title>
              <Title $name>Name</Title>
              <InputMenu 
                required
                id="menu"
                name="menu"
                type="text" 
                placeholder="대표 메뉴를 입력하세요." 
                value={this.state.item.menu}
                onChange={this.onInputMenuChange}/>
              <Title>Price</Title>
              <InputMenu $price
                required
                id="price"
                name="price"
                type="number" 
                placeholder="가격을 입력하세요."  
                value={this.state.item.price}
                onChange={this.onInputPriceChange}/>
            </Menu> 
          </Div>
          <Div>
            <Title>Explanation</Title>
            <Input 
              required
              id="explanation"
              name="explanation"
              type="text" 
              placeholder="대표 메뉴를 간단하게 설명하세요." 
              value={this.state.item.explanation}
              onChange={this.onInputExplanationChange}/>
          </Div>
          <Div>
            <Title>Location</Title>
            <Input 
              required
              id="location"
              name="location"
              type="text" 
              placeholder="위치를 입력하세요." 
              value={this.state.item.location}
              onChange={this.onInputLocationChange}/>
          </Div>
          <Div>
            <Title>Restaurant Number</Title>
            <Input 
              required
              id="contact"
              name="contact"
              type="number" maxLength='12' 
              placeholder='맛집의 전화번호를 입력하세요.' 
              value={this.state.item.contact}
              onChange={this.onInputContactChange}/>
          </Div>
          <Button $complete type="submit"> 완료 </Button>
          <Link to="/"><Button $primary> 취소 </Button></Link>
        </Form>
      </Container>
    )
  }
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