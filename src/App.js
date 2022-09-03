import QuickSearchContainer from './components/QuickSearchContainer';
import { Routes, Route } from "react-router-dom";
import FoodDetails from './components/FoodDetails';
import FoodList from './components/FoodList'
import Foods from './components/Foods'
import NotFound from './components/NotFound'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<QuickSearchContainer />} />
        <Route  path="food" element={<Foods />} >
            <Route path=":id" element={<FoodDetails />} />
            <Route index path="items" element={<FoodList/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
