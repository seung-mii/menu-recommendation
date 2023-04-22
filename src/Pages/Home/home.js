import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { call } from '../../service/ApiService';
import RestaurantList from './RestaurantList';
import Signin from '../Member/Signin';

class Home extends React.Component {
  constructor(props) {
    super(props);     
    this.state = {    
      items: [],
      user: []
    };
  }

  add = (item) => {
    call("/frestaurant", "POST", item).then((response) => 
      this.setState({items:response.data})
    );
  }

  update = (item) => {
    call("/frestaurant", "PUT", item).then((response) => 
      this.setState({items:response.data})
    );
  }

  componentDidMount() {
    call("/auth/user", "GET", null).then((response) =>
      this.setState({user:response.data})
    );

    call("/frestaurant", "GET", null).then((response) =>
      this.setState({items:response.data})
    );
  }

  render() {
    return (
      <div>
        {this.state.user.length <= 0 ? (
            <Signin />
          ) : (
            <Container>
              {this.state.user.length > 0 && this.state.user[0].nickname === null &&
                <Link to="/regist">
                  <RegistBtn>맛집 등록하기</RegistBtn>
                </Link>
              }
              {this.state.items.length > 0 &&
                <RestaurantList item={this.state.items} user={this.state.user[0]} />
              }
            </Container>
          )
        }
      </div>
    ); 
  }
}

const Container = styled.div`
  margin: 0px;
  padding-top: 40px;
  color: #4a5b51;
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
  margin: 0px 70px 0px 0px;
`

export default Home;

