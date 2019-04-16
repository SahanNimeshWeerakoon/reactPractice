import React, {Component} from 'react'

class RegularComponent extends Component {
    render() {
        console.log('Regular Compoennt Render')
        return (
            <div>
                regular component - {this.props.name}
            </div>
        )
    }
}

export default RegularComponent