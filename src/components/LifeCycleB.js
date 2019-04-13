import React, {Component} from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Sahan'
        }
        console.log('LifeCycle B Constructor')
    }
    static getDerivedStateFromProps(state, props) {
        console.log('LifeCycle B getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycele B componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifeCycle B shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevPros, prevState) {
        console.log('LifeCycle B getSnapshotBeforeUpdate')
    }
    componentDidUpdate() {
        console.log('LifeCycle B componentDidUpdate')
    }
    render() {
        console.log('LifeCycle B render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB