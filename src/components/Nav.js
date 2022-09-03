import Nav from 'react-bootstrap/Nav';

function Foods() {
    return (
        <Nav
        >
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/food">Food</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/food/items">Food Items</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/food/123">Food List</Nav.Link>
            </Nav.Item>
            
        </Nav>

    )
}
export default Foods;