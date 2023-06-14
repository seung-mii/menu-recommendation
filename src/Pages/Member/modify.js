import React from 'react';
import ModifyItem from './modifyItem';
import { call } from '../../service/ApiService';

class Modify extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: [] };
  }
  
  componentDidMount() {
    call("/auth/user", "GET", null).then((response) =>
      this.setState({item:response.data})
    );
  }

  render() {
    return (
      <div>
        {this.state.item.length > 0 && (
          <ModifyItem item={this.state.item[0]} />
        )}
      </div>
    );
  }
}

export default Modify;