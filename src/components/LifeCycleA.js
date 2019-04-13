import React, {Component} from 'react'

import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Sahan'
        }

        console.log('Lifecycle A Constuctor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps');
        return null
    }
    componentDidMount() {
        console.log('Lifecycle A ComponentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifeCycle A shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevPros, prevState) {
        console.log('LifeCycle A getSnapshotBeforeUpdate')
    }
    componentDidUpdate() {
        console.log('LifeCycle A componentDidUpdate')
    }
    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                <div>
                   Lifecycle A Render 
                </div>
                {/* <LifeCycleB /> */}
            </div>
        )
    }
}

export default LifeCycleA