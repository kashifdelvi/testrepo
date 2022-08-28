/*import {useState} from 'react';
function FoodCard(props) {

    const [selected,markSelected] = useState(props.defaultSelected);

    return (
        <div className="foodCard col firstCol" >
            {selected && <p className='selected'> Am selected </p>}
            <div className="col-item1">
                <img src={props.image} alt="Idli"/>
            </div>
            <div className="col-item2">
                <h3>{props.cuisine}</h3>
                <p >Start your day with exclusive breakfast option</p>
                {!selected && <button onClick={()=>markSelected(true)}>Select</button>}
                {selected && <button onClick={()=>markSelected(false)}>Un Select</button>}

            </div>
        </div>
    );
    
}
export default FoodCard;
*/

import React from 'react';

class FoodCard2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selected: this.props.defaultSelected,
      };
    }
    
    componentDidMount(){

    }

    markSelected = (status) => {
      this.setState({selected: status});
      this.props.callParent('123');
    }
    render() {
      return (
        <div className="foodCard col firstCol" >
            {this.state.selected && <p className='selected'> Am selected </p>}
            <div className="col-item1">
                <img src={this.props.image} alt="Idli"/>
            </div>
            <div className="col-item2">
                <h3>{this.props.cuisine}</h3>
                <p >Start your day with exclusive breakfast option</p>
                {!this.state.selected && <button onClick={()=>this.markSelected(true)}>Select</button>}
                {this.state.selected && <button onClick={()=>this.markSelected(false)}>Un Select</button>}

            </div>
        </div>
      );
    }
}

export default FoodCard2;

