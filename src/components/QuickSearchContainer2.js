import React from 'react';
import FodCard2 from './FoodCard2';

class QuickSearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            food:[]
        }
    }
    render(){
        return (
            <div>
                {this.state.food.map((item,index)=>
                    <FodCard2
                        defaultSelected={true} 
                        cuisine={item.cuisine} 
                        image={item.image} 
                    />
                )}
                    
            </div>
        );
    }
    componentDidMount(){
        this.loadFood();
    }
    loadFood(){
        fetch('http://localhost:9191/getFood').then(res => res.json()).then((result) =>{
            this.setState({
                'food':result.data
            });
        });
    }
}
export default QuickSearchContainer;
