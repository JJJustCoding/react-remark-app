import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render() {
    const arr = [1, 2, 3];
    return (
      <ul>
        {arr.map((item, index) => {
          return <Link key={index} to={{ pathname: '/detail/' + index }}>jump to {item}</Link>
        })}
      </ul>
    );
  }
}

export default List;
