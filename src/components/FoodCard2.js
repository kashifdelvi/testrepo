import React from 'react';
import './component.css';

class FoodCard2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            count: 0
        }
    }
    render() {
        return (
            <div className="foodCard col firstCol foodCard2" >
                <h1>CNT {this.state.count}</h1>
                <button onClick={() => this.markCount(this.state.count + 1)}>COUNT</button>
                <h3><mark>{this.props.name}</mark></h3>
                {this.state.selected && <p className='selected'> Am selected </p>}
                <div className="col-item1">
                    <img src={this.props.image} alt="Idli" />
                </div>
                <div className="col-item2">
                    <h3>{this.props.cuisine}</h3>
                    <p >Start your day with exclusive breakfast option</p>
                    {!this.state.selected && <button onClick={() => this.markSelected(true)}>Select</button>}
                    {this.state.selected && <button onClick={() => this.markSelected(false)}>Un Select</button>}
                </div>
            </div>
        )
    }

    componentDidMount(){
        // FOR LOADING THINGS IN STARTS
        console.log("LOADING")

    }

    componentWillUnmount(){
        // CLEANING UP ON COMPONENT EXIT
        console.log("CLEANING UP ON COMPONENT EXIT")
    }

    markSelected(newStatus) {
        this.setState({
            'selected': newStatus
        })
    }

    markCount(newCount) {
        this.setState({
            'count': newCount
        })
    }
}

export default FoodCard2