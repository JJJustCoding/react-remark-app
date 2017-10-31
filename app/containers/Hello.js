import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userInfoActions from '../actions/userInfo';

import A from '../components/A.jsx';
import B from '../components/B.jsx';
import C from '../components/C.jsx';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <div>Hello world</div>
        <A userInfo={this.props.userInfo} />
        <B userInfo={this.props.userInfo} />
        <C actions={this.props.userInfoActions}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.userInfoActions.login({
      userId: 'abc',
      city: 'BeiJing'
    });
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)
