import React, {Component} from 'react'
import axios from 'axios'

class GetMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(result => {
                this.setState({
                    posts: result.data
                })
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const {posts, errMsg} = this.state
        return (
            <div>
                Lists of get request
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
            </div>
        )
    }
}

export default GetMethod