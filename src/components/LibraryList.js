import React, { Component } from 'react'
import { connect } from 'react-redux'

class LibraryList extends Component {
  render() {

  }
}

const mapStateToProps = state => ({
  libraries: state.libraries
})

export default connect()(LibraryList)
