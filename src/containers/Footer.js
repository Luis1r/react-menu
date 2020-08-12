import React from 'react';
import { connect } from 'react-redux'


const Footer = () => (
  <p>Footer</p>
)

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(Footer)
