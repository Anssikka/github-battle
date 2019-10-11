import React from 'react'

// DEPRECATED

function withHover (Component, propName = 'hovering') {
  return class WithHover extends React.Component {
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