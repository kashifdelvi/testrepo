import React,{useState} from "react";

function MyFirstFunctionComponent(props){
    const [name, updateName] = useState(props.name)
    return <div className="m10">
            To make this component really great i passed  
            <h2>{name}</h2>
            <button onClick={()=>updateSirName()}>ADD SIR NAME</button>
        </div>

    function updateSirName(){
        updateName(name+'sir name');
    }
}

class MyFirstClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:this.props.name
        }
    }
    render() {
        return (<div>MY FIRST class COMPONENT {this.state.name}
                    <button onClick={this.updateSirName}>update sir name</button>
                </div>)
    }
    updateSirName=()=>{
        this.setState({
            'name':this.state.name+'Sir Name'
        })
    }
}

export {
    MyFirstFunctionComponent,
    MyFirstClassComponent
} ;

