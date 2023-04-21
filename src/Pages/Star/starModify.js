import React from 'react';
import ModifyItem from './starModifyItem';
import styled from "styled-components";
import { call } from '../../service/ApiService';

class starModify extends React.Component {
  constructor(props) { 
    super(props);     
    this.state = { items: [] };
  }

  componentDidMount() {
    call("/star/one", "GET", null).then((response) =>
      this.setState({ items: response.data })
    );
  }

  render() {
    // const urlQuery = window.location.pathname.slice(12, window.location.pathname.length + 1);
    // console.log("urlQuery :: ", urlQuery);
    console.log("this.state.items :: ", this.state.items);

    return (
      <div>
        {this.state.items.length > 0 ? (
          <ModifyItem items={this.state.items[0]} />
        ): (
          <Comment>작성된 별점이 없습니다.</Comment>
        )}
      </div>
    )
  }
}

const Comment = styled.h3`
  color: #6c8074;
  padding: 30px;
  font-size: 23px;
  font-weight: 900;
  text-align: center;
`

export default starModify;
