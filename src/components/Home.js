import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component{
    state = { data : [] }


    componentDidMount(){   
        fetch('http://127.0.0.1:8000/api/blog/',
        {
            method: 'GET'
        }
        ).then(response => {
            this.setState({
                data: response
            })
        }).catch(error => {
            console.error(error)
        })
    }

    render(){
        return (
            <>
            <h1>Home</h1>
            <p>{
               this.state.data && 
               this.state.data[0] && 
               this.state.data[0].subtitle
            }</p>
            </>
        )
    }
    
}

export default Home