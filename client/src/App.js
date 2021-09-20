// components
import {Route , Redirect} from "react-router-dom"
import test from "./components/testing/test";

// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantHoc from "./HOC/Restaurant.Hoc";


// Master
import Home from "./Pages/Home";
import Restaurant from "./Pages/Restaurant";

function App() {
  return (
    <div>
      <Route path="/"exact>
    <Redirect to = "/delivery"/>
      </Route>
      <Route path="/restaurant/:id"exact>
    <Redirect to = "/restaurant/:id/overView"/>
      </Route>
     
     <HomeLayoutHOC path="/:type" exact component={Home}/>
     <RestaurantHoc path="/restaurant/:id/:tab"  component={Restaurant}/>
     </div>
  );
}

export default App;


// /:type

/*
Delivery
Nutrition
NightLife
Dining
*/