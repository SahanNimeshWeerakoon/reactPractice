import React, {Component} from 'react'
// import RegularComponent from './RegularComponent';
// import PureCompoennt from './PureCompoennt';
import MemoComponent from './MemoComponent';

class ParentCompoennt extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Sahan'
        }
    }
    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: 'Sahan'
            })
        }, 2000 )
    }
    render() {
        console.log('Parent Component REnder')
        return (
            <div>
                <MemoComponent name={this.state.name} />
                {/* <RegularComponent name={this.state.name} />
                <PureCompoennt name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentCompoennt