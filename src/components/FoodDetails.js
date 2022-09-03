import { useParams } from "react-router-dom";

function FoodDetails(){
    let { id } = useParams();
    return(
        <h1>DETAILS OF FOOD {id}</h1>
    )
}
export default FoodDetails;