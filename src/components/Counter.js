import React, { Component } from 'react'

class Counter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState( (prevState) => ({
            count: prevState.count + 1
        }) )
    }
    render() {
        return (
            <div>
                <p>count - {this.state.count}</p>
                <button onClick={() => {this.increment()}}>+1</button>
            </div>
        )
    }
}

export default Counter