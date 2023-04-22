import React from 'react';
import { Link } from "react-router-dom";
import { call } from '../../service/ApiService';
import rose from '../../images/로제떡볶이.jpeg';
import basic from '../../images/떡볶이.png';
import styled from 'styled-components';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      starAll: 0
    }
  }

  componentDidMount() {
    let starAll = 0;
    call("/star", "GET", null).then((response) => {
      response.data.forEach(element => {
        starAll += parseInt(element.star);
      })
      starAll = starAll / response.data.length
      this.setState({ starAll: starAll })
    });
  }

  render() {
    const photoArr = [ basic, rose ];
    // console.log("this.props.item", this.props.item);
    // console.log(this.state.starAll)
    console.log(Object.is(this.state.starAll, NaN))
    console.log(this.state.starAll)

    return (
      <Table $top>
        <Tr>
          <Th>맛집</Th>
          <Th style={{width: "35%"}}>대표메뉴</Th>
        </Tr>
        {this.props.item.map((item, idx) => (
          <Tr>
            <Td>
              <Info $title>
                <Link key={item.id} 
                  to={{ pathname: `/postmodify/${item.r_key}`}}
                  style={{ color: "#6c8074", textDecoration: "none", cursor: "pointer"}}
                  >
                  <Title>{item.brand}</Title>
                </Link>
                <Link key={item.id} 
                  to={{ pathname: `/starmodify/${item.r_key}`}}
                  style={{ color: "#6c8074", textDecoration: "none", flexGrow: "1", cursor: "pointer"}}
                >
                {Object.is(this.state.starAll, NaN) ? (
                  <Star>0 점</Star>
                  ) : (
                  <Star>{this.state.starAll} 점</Star>
                )}
                </Link>
                <Repre>대표자 : {item.name}</Repre>
              </Info>
              <Info>
                <Location>{item.location}</Location>
                <Num>{item.contact}</Num>
              </Info>
              {this.props.user.nickname === null ? (
                  <></>
                ) : (
                  <Info $last>
                    <Link key={item.id} to={{ pathname: `/star/${item.r_key}`}}>
                      <Button>별점 남기기</Button>
                    </Link>
                    <Link key={item.id} to={{ pathname: `/post/${item.r_key}`}}>
                      <Button>리뷰 남기기</Button>
                    </Link>
                    <Link key={item.id} to={{ pathname: `/post`}}>
                      <Button>리뷰 보기</Button>
                    </Link>
                  </Info>
                ) 
              }
            </Td>
            <Td>
              <Img src={photoArr[(idx+1)%2]}></Img>
              <Info>
                <Title>{item.menu}</Title>
                <Price>{item.price} 원</Price>
              </Info>
              <Expl>{item.explanation}</Expl>
            </Td>
          </Tr>
        ))}
      </Table>
    )
  }
}

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

export default RestaurantList; 