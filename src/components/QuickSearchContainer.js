import CategoryCard from "./CategoryCard";
// import ImageContainer from "./ImageContainer";
import FilterByLocation from "./FilterByLocation";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from 'react-bootstrap';
import React from 'react';


function QuickSearchContainer(props) {

    const categories = [
        {
            'name': 'Breakfast',
            'description': 'Start your day with exclusive breakfast options',
            'image': 'images/shutterstock_1154073754.png'
        },
        {
            'name': 'Lunch',
            'description': 'Start your day with exclusive breakfast options',
            'image': 'images/lunch.png'
        },
        {
            'name': 'Dinner',
            'description': 'Start your day with exclusive breakfast options',
            'image': 'images/dinner.png'
        },
        {
            'name': 'Snacks',
            'description': 'Start your day with exclusive breakfast options',
            'image': 'images/snacks.png'
        },
        {
            'name': 'Drink',
            'description': 'Start your day with exclusive breakfast options',
            'image': 'images/drink.png'
        },
        {
            'name': 'Night Life',
            'description': 'Start your day with exclusive breakfast options',
            'image': 'images/night.png'
        }

    ]

    return (
        <Container>
            <FilterByLocation/>
            <Row>
                <h3>Quick Searches</h3>
                <h3>Discover resturants by type of meal</h3>
            </Row>
            <Row>
                {categories.map((item, index) =>
                    <Col lg={3} sm={12}>
                        <CategoryCard
                            key={index}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    );
}


export default QuickSearchContainer;
