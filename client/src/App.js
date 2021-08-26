// components
import test from "../src/components/testing/test"


// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
// Master
import Master from "./components/Master/Master";

function App() {
  return (
    <div>
     <HomeLayoutHOC path="/"exact component={test}/>
     <HomeLayoutHOC path="/:type" exact component={Master}/>
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