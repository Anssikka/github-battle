import React from 'react'



export default class Hover extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        hovering: false
      }

      this.mouserOver = this.mouserOver.bind(this)
      this.mouseOut = this.mouseOut.bind(this)
    }

    mouserOver() {
      this.setState({
        hovering: true
      })
    }

    mouseOut() {
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
