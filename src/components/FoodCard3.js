function FodCard3(props) {
    return (
        <div className="foodCard col firstCol" >
            <div className="col-item1">
                <img src={props.foodItem.image} alt="Idli" />
            </div>
            <div className="col-item2">
                <h2>{props.foodItem.name}</h2>
                <h3>{props.foodItem.cuisine}</h3>
                <p >Start your day with exclusive breakfast option</p>
            </div>
        </div>
    );
}

export default FodCard3;
