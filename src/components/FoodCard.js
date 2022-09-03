import { Card, Button } from 'react-bootstrap';

function FoodCard(props) {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.cuisine}</Card.Title>
                    <Card.Text>
                        {props.name}
                    </Card.Text>
                    <Button variant="primary">Breakfast</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default FoodCard;
