import React from 'react';

class Detail extends React.Component {
  render() {
    return <div>This is the page {this.props.match.params.id}</div>
  }
}

export default Detail;
