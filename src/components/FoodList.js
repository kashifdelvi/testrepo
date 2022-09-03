
import { useNavigate } from 'react-router-dom';

function FoodList(){
    const navigate = useNavigate();

    return(
        <div>
                <h1>FOOD LIST 222</h1>
                <button type="button" onClick={handleClick}>
                    Go home
                </button>
        </div>
    )

    function handleClick() {
        navigate("/");
    }
}
export default FoodList;