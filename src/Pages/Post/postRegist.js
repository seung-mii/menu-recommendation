import React from 'react';
import { call } from '../../service/ApiService';
import { Link } from 'react-router-dom';
import styled from "styled-components";

class Post extends React.Component {
  constructor(props) { 
    super(props);      
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { item: {}, preitem: {} };
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.add(this.state.item);
    window.location.href = "/"
  }
  
  add = (item) => {
    call("/post", "POST", item).then((response) => 
      this.setState({item: response.data})
    );
  }

  onInputTitleChange = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
  }
  onInputContentsChange = (e) => {
    const thisItem = this.state.item;
    thisItem.contents = e.target.value;
    this.setState({ item: thisItem });
  }

  componentDidMount() {
    call("/post", "GET", null).then((response) =>
      this.setState({ preitem: response.data })
    );
  }

  render() {
    var contents = (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Div $title>
            <Title>Title</Title>
            <Input 
              required
              type="text"  
              placeholder="제목을 입력하세요."
              onChange={this.onInputTitleChange}
              value={this.state.item.title}
            />
          </Div>
          <Div>
            <Title>Contents</Title>
          </Div>
          <Div>
            <Textarea 
              required
              type="text"  
              placeholder="내용을 입력하세요."
              onChange={this.onInputContentsChange}
              value={this.state.item.contents}
            />
          </Div>
          <Button $complete type="submit"> 완료 </Button>
          <Link to="/"><Button $primary> 취소 </Button></Link>
        </Form>
      </Container>
    )

    var already = <Comment>이미 작성하였습니다.</Comment>

    if (this.state.preitem.length > 0) {
      contents = already
    }

    return (
      <div>
        {contents}
      </div>
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

const Comment = styled.h3`
  color: #6c8074;
  padding: 30px;
  font-size: 23px;
  font-weight: 900;
  text-align: center;
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