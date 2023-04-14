import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import rose from '../../images/로제떡볶이.jpeg'

function home() {
  // const movePage = useNavigate();

  // function gohome(){
  //   movePage('/post');
  // }
  
  return (
    <Container>
      <Link to="/regist">
        <RegistBtn>맛집 등록하기</RegistBtn>
      </Link>
      <Table $top>
        <Tr colspan={30}>
          <Th>맛집</Th>
          <Th>대표메뉴</Th>
        </Tr>
        <Tr>
          <Td>
            <Info $title>
              <Title>배떡</Title>
              <Star>4점</Star>
              <Repre>대표자 : 김대표</Repre>
            </Info>
            <Info>
              <Location>경북 구미시 옥계북로 123</Location>
              <Num>054-344-5264</Num>
            </Info>
            <Info $last>
              <Link to="/rating"><Button>별점 남기기</Button></Link>
              <Link to="/post"><Button>리뷰 남기기</Button></Link>
            </Info>
          </Td>
          <Td>
            <Img src={rose}></Img>
            <Info>
              <Title>로제떡볶이</Title>
              <Price>14000원</Price>
            </Info>
            <Expl>로제소스가 들어간 떡볶이</Expl>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Info $title>
              <Title>BHC</Title>
              <Star>2.5점</Star>
              <Repre>대표자 : 김대표</Repre>
            </Info>
            <Info>
              <Location>경북 구미시 옥계북로 123</Location>
              <Num>054-344-5264</Num>
            </Info>
            <Info $last>
              <Link to="/rating"><Button>별점 남기기</Button></Link>
              <Link to="/post"><Button>리뷰 남기기</Button></Link>
            </Info>
          </Td>
          <Td>
            <Img src={rose}></Img>
            <Info>
              <Title>뿌링클</Title>
              <Price>20000원</Price>
            </Info>
            <Expl>치즈가루가 뿌려진 치킨</Expl>
          </Td>
        </Tr>
        <Tr $last>
          <Td>
            <Info $title>
              <Title>라라코스트</Title>
              <Star>3.7점</Star>
              <Repre>대표자 : 김대표</Repre>
            </Info>
            <Info>
              <Location>경북 구미시 옥계북로 123</Location>
              <Num>054-344-5264</Num>
            </Info>
            <Info $last>
              <Link to="/rating"><Button>별점 남기기</Button></Link>
              <Link to="/post"><Button>리뷰 남기기</Button></Link>
            </Info>
          </Td>
          <Td>
            <Img src={rose}></Img>
            <Info>
              <Title>크림 파스타</Title>
              <Price>21000원</Price>
            </Info>
            <Expl>크림 소스를 사용한 파스타</Expl>
          </Td>
        </Tr>
      </Table>
    </Container>
  );
}

const Container = styled.div`
  margin: 0px;
  padding: 0px;
  color: #4a5b51;
`
const Info = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: ${ props => {
    if (props.$last) return "center"
    else if (props.$title) return "none"
    else return "space-between"
  }};
`
const Table = styled.table`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  font-size: 22px;
  color: #667c6e;
`
const Th = styled.th`
  margin: 0px;
  padding: 10px;
  border-top: 2px solid #6c8074;
  border-bottom: 2px solid #6c8074;
  border-collapse: collapse;
  background-color: #bbd6b83b;
`
const Tr = styled.tr`
`
const Td = styled.td`
  padding: 10px 20px;
  font-size: 25px;
  font-weight: 600;
  border-bottom: 2px solid #6c8074;
  cursor: pointer;
`
const Title = styled.h3`
  margin: 0px;
  padding: 5px 5px 0px 5px;
`
const Repre = styled.p`
  margin: 0px;
  padding: 10px 5px 5px 5px;
  font-size: 20px;
`
const Star = styled.p`
  flex-grow: 1;
  color: red;
  font-size: 17px;
  margin-left: 10px;
`
const Location = styled.p`
  margin: 0px;
  padding: 5px;
  font-size: 20px;
`
const Num = styled(Location)`
`
const Expl = styled(Location)`
`
const Price = styled(Location)`
  font-size: 17px;
`
const Img = styled.img`
  width: 200px;
`

const Button = styled.button`
  color: white;
  background: #6c8074;
  width: 140px;
  height: 45px;
  padding: 10px;
  margin: 40px 20px 0px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border: 2px solid #6c8074;
  border-radius: 4px;
  cursor: pointer;
`
const RegistBtn = styled(Button)`
  float: right;
  width: 200px;
  height: 55px;
  font-size: 18px;
  border-radius: 10px 10px 0px 0px;
  margin: 40px 70px 0px 0px;
`


export default home;

