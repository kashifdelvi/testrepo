import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
function Foods() {
    return (
        <Nav>
            <Nav.Item>
                <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="food">Food</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="food/items">Food Items</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="others">404</Link>
            </Nav.Item>
            
        </Nav>

    )
}
export default Foods;