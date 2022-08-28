import FodCard3 from './FoodCard3';
import {useState,useEffect} from 'react';
import axios from "axios";

function QuickSearchContainer() {
    const [foods,setFood] = useState([]);
    const [counter,setCounter] = useState(0);

    useEffect(() => {
        loadFoods()
    },[]);
    
    return (
            <div>
                {
                    foods.map((food,index)=>{
                        return <FodCard3 
                                key={index}
                                foodItem={food}
                            />
                    })
                }    
                <button onClick={addItem}>
                    Add FoodCard
                </button>

                <button onClick={addConter}>
                    Counter
                </button>

               
            </div>
    );
      
    function loadFoods(){
    
            axios.get('http://localhost:9191/getFood').then(res=>{
                const result = res.data;
                if(result.status === 200){
                    setFood(result.data);
                }
            })
    }

    function addConter(){
        setCounter(counter+1)
    }
    function addItem(){
        const payload = {
                "name": "Vada",
                "cost": "10",
                "cuisine": "breakfast",
                'image':'https://github.com/DivyashantKumar/staticWebPageCollection/blob/main/images/1image.png?raw=true',
                "availableAt": [
                    "63024059b37346bbf1fccd0f"
                ]
        };
       
        axios.post('http://localhost:9191/addFood',payload).then(res=>{
                const result = res.data;
                if(result.status === 200){
                    setFood([...foods,payload])
                }
        })
    }
}

export default QuickSearchContainer;
