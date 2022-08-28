import { useState, useEffect } from 'react';
function FoodCard(props) {

    const [selected, markSelected] = useState(props.defaultSelected);

    useEffect(() => {
        console.log("useeffect no array")
    });

    useEffect(() => {
        console.log("useeffect empty array")

        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    
                },
                (error) => {
                    
                }
            )

    }, []);

    return (
        <div className="foodCard col firstCol" >
            {selected && <p className='selected'> Am selected </p>}
            <div className="col-item1">
                <img src={props.image} alt="Idli" />
            </div>
            <div className="col-item2">
                <h3>{props.cuisine}</h3>
                <p >Start your day with exclusive breakfast option</p>
                {!selected && <button onClick={handleMarkSeleceted(true)}>Select</button>}
                {selected && <button onClick={handleMarkSeleceted(false)}>Un Select</button>}

            </div>
        </div>
    );

    function handleSomeThing() {
        props.callParent()
    }

    function handleMarkSeleceted(status) {
        markSelected(status)
        handleSomeThing();
    }

}
export default FoodCard;
