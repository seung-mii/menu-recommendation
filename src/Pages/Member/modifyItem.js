import React from 'react';
import { call } from '../../service/ApiService';
import { Link } from 'react-router-dom';
import styled from "styled-components";

class ModifyItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item, readOnly: true }; 
  }

  delete = (item) => {
    call("/auth", "DELETE", item).then((response) => 
      this.setState({items:response.data})
    );
  }

  update = (item) => {
    call("/auth", "PUT", item).then((response) => 
      this.setState({items :response.data})
    );
  }
  
  offReadOnlyMode = () => {
    this.setState({ readOnly: false }, () => {
      console.log("ReadOnly? ", this.state.readOnly)
    });
  }

  deleteEventHandler = () => {
    this.delete(this.state.item);
    alert("성공적으로 탈퇴되었습니다");
    window.location.href = "/login";
  }

  modify = () => {
    this.setState({ readOnly:true })
    this.update(this.state.item)
    alert("성공적으로 수정되었습니다");
    window.location.href = "/modify";
  }
  
  edituserIDEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.userID = e.target.value;
    this.setState({ item: thisItem });
  }
  editNameEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.name = e.target.value;
    this.setState({ item: thisItem });
  }
  editNicknameEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.nickname = e.target.value;
    this.setState({ item: thisItem });
  }
  editPhoneEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.phone = e.target.value;
    this.setState({ item: thisItem });
  }

  render() {
    const item = this.state.item;
    console.log(item);
    
    return (
      <Container>
        <Form>
          <Div $id>
            <Title>ID</Title>
            <Input 
              required
              type="text" 
              id={item.id} 
              name={item.id}
              value={item.userID}
              onClick={this.offReadOnlyMode}
              onChange={this.edituserIDEventHandler}
            />
          </Div>
          <Div>
            <Title>NAME</Title>
            <Input 
              required
              type="text" 
              id={item.id} 
              name={item.id}
              value={item.name}
              onClick={this.offReadOnlyMode}
              onChange={this.editNameEventHandler}
            />
          </Div>
          { this.state.item.nickname !== null &&
            <Div>
              <Title>NICKNAME</Title>
              <Input 
                type="text" 
                id={item.id} 
                name={item.id}
                value={item.nickname}
                onClick={this.offReadOnlyMode}
                onChange={this.editNicknameEventHandler}
              />
            </Div>
          }
          <Div>
            <Title>PHONE</Title>
            <Input 
              required
              type="number" 
              maxLength='11'
              id={item.id} 
              name={item.id}
              value={item.phone}
              onClick={this.offReadOnlyMode}
              onChange={this.editPhoneEventHandler}
            />
          </Div>
          <Button $complete onClick={this.modify}> 완료 </Button>
          <Link to ="/"><Button $primary> 취소 </Button></Link>
          <Button onClick={this.deleteEventHandler}> 탈퇴 </Button>
        </Form>
      </Container>
    );
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

export default ModifyItem;