import React from 'react';
import ModifyItem from './postModifyItem';
import styled from "styled-components";
import { call } from '../../service/ApiService';

class postModify extends React.Component {
  constructor(props) { 
    super(props);     
    this.state = { items: [] };
  }

  componentDidMount() {
    call("/post", "GET", null).then((response) =>
      this.setState({ items: response.data })
    );
  }

  render() {
    return (
      <div>
        {this.state.items.length > 0 ? (
          <ModifyItem items={this.state.items[0]} />
        ): (
          <Comment>작성된 리뷰가 없습니다.</Comment>
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

export default postModify;
