import {Card,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CategoryCard(props) {
    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }} onClick={goToFoodList}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button onClick={goToFoodList} variant="primary">Explore..</Button>
            </Card.Body>
        </Card>
    );

    function goToFoodList() {
        navigate("/food");
    }
}
export default CategoryCard;
