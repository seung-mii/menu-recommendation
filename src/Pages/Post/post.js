import React from 'react';
import { call } from '../../service/ApiService';
import rose from '../../images/로제떡볶이.jpeg';
import rose1 from '../../images/로제.png';
import rose2 from '../../images/로제2.png';
import { Link } from 'react-router-dom';
import styled from "styled-components";

class Post extends React.Component {
  constructor(props) { 
    super(props);      
    this.state = { items: [] };
  }

  componentDidMount() {
    call("/post/all", "GET", null).then((response) =>
      this.setState({ items: response.data })
    );
  }

  render() {
    const thisItem = this.state.items;
    const photoArr = [ rose, rose1, rose2 ]; 

    return (
      <Container>
        <Table $top>
          <Tr>
            <Th style={{width: "30%"}}>제목</Th>
            <Th>내용</Th>
          </Tr>
          {thisItem.length > 0 && thisItem.map((item, idx) => (
            <Tr>
              <Td>
                <Img src={photoArr[(idx+1)%3]}></Img>
                <Title>{item.title}</Title>
              </Td>
              <Td>
                <Contents>{item.contents}</Contents>
              </Td>
            </Tr>
          ))}
        </Table>
      </Container>
    );
  }
}

const Container = styled.div`
  list-style: none;
  text-decoration: none;
`

const Table = styled.table`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  margin-Top: 45px;
  font-size: 22px;
  color: #667c6e;
`

const Th = styled.th`
  border-top: 2px solid #6c8074;
  border-bottom: 2px solid #6c8074;
  border-right: 2px solid #6c8074;
  border-collapse: collapse;
  background-color: #bbd6b83b;
`

const Tr = styled.tr`
`

const Td = styled.td`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
  border-right: 2px solid #6c8074;
  border-bottom: 2px solid #6c8074;
`

const Title = styled.h3`
  margin: 0px;
  padding: 5px 5px 0px 5px;
`

const Img = styled.img`
  width: 100px;
`

const Contents = styled.p`
  margin: 0px;
  padding: 5px;
  font-size: 17px;
`

export default Post;