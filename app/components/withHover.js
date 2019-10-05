import React from 'react'

// DEPRECATED

function withHover (Component, propName = 'hovering') {
  return class WithHover extends React.Component {
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
  
  render () {
    const props = {
      [propName]: this.state.hovering,
      ...this.props
    }
    

    return (
      <div onMouseOver={this.mouserOver}
      onMouseOut={this.mouseOut}>
        <Component {...props}/>
      </div>
    )
  }

}
}