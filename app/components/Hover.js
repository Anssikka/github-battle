import React from 'react'

export default class Hover extends React.Component {
  state = {
    hovering: false
  }  
  
    mouserOver = () => {
      this.setState({
        hovering: true
      })
    }

    mouseOut = () => {
      this.setState({
        hovering: false
      })
    }
  

  render() {
    return (
      <div onMouseOver={this.mouserOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    )
  }
}
