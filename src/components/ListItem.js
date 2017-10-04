import React, { Component } from 'react'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import CardSection from './common/CardSection'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.linear()
  }

  render() {
    const { titleStyle } = styles
    const { id, title, description } = this.props.library

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.props.expanded && (
            <CardSection>
              <Text style={{ flex: 1 }}>{description}</Text>
            </CardSection>
          )}

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id
  return { expanded }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default connect(mapStateToProps, actions)(ListItem)
