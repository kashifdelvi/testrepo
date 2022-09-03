
import { Form, Row , Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015

function FilterByLocation(props) {
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);
    const options = [
        {
            'name': 'India',
            'value': 'India'
        }
    ];
    return (
        <div className='imageContainer'>
            <Row className="justify-content-md-center">
                <Col lg={12} sm={12}>
                    <h3>
                        Find the bestresturants cafes and bards
                    </h3>
                </Col>
                
                <Col lg={4} sm={8}>
                    
                        <Form.Label>Single Selection</Form.Label>
                        <Typeahead
                            id="basic-typeahead-single"
                            labelKey="name"
                            onChange={setSingleSelections}
                            options={options}
                            placeholder="Choose a state..."
                            selected={singleSelections}
                        />
                    
                </Col>
                <Col lg={4} sm={8}>
                    
                        <Form.Label>Multiple Selections</Form.Label>
                        <Typeahead
                            id="basic-typeahead-multiple"
                            labelKey="name"
                            multiple
                            onChange={setMultiSelections}
                            options={options}
                            placeholder="Choose several states..."
                            selected={multiSelections}
                        />
                    
                </Col>
                
            </Row>
        </div>
    );
}

export default FilterByLocation;
