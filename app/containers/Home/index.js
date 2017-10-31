import React from 'react';
import { render } from 'react-dom';
import Header from '../../components/Header.js';
import List from '../../components/List.js';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <List></List>
      </div>
    );
  }
}

export default Home;
