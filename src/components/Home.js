import React from 'react'
import { Link } from 'react-router-dom'

import Card from './commons/Card'

class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = { data : [] }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/blog/')
        const data = await response.json()
        this.setState({
            data: data
        })
    }

    render(){
        return (
            <>
            <h1>Home</h1>
            <div className="row">
                {this.state.data.map(element =><Card data={element} />)}
            </div>
            </>
        )
    }
    
}

export default Home