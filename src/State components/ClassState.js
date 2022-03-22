import React,{Component} from 'react'



class ClassState extends Component{

    constructor(props){
        super(props);
        //state declaered
        this.state={
            counter: 0,
        }


        this.handleIncrease =this.handleIncrease.bind(this)
    }
    //event handler for button increase
    handleIncrease(e){
        e.preventDefault();

        this.setState({
            counter: this.state.counter +1,
        })

    }

    //event handler for decerease

    handleDecrease=(e)=>{
        e.preventDefault()
        this.setState({
            counter: this.state.counter -1,
        })
    }

    render(){
        return(
            <>
            <h1>Count: {this.state.counter}</h1>
            <br/>
            <button onClick={this.handleIncrease}>Increase</button>
            <button onClick={this.handleDecrease}>Decrease</button>
            <br/>
            <hr/>
            </>
        )
    }
}



export default ClassState

