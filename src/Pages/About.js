import { Component } from "react"
class About extends Component{
    constructor(){
        super()
        this.state={
            name:"Karan"
        }
    }

    change=()=>{
        this.setState({name:"Raj"})
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(){
        console.log('component did update');
    }

    componentWillUnmount(){
        console.log('Unmounted');
    }

    render(){
        console.log('render');
        return (
            <>
            <h1 style={{color:'white'}}>Hello from Class Component 👋 from {this.state.name}</h1>
            <button onClick={this.change} >change</button>
            </>
        )
    }
}
export default About;