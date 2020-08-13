import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

class Header extends Component {
  render () {
    return (
      <h1>Header</h1>
    )
  }
}

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps, actions)(Header)
