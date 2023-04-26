import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import RecordList from "./components/firstQuestion";
import Navbar from "./components/navbar";
import FirstQuestion from "./components/firstQuestion";
import SecondQuestion from "./components/secondQuestion";
import ThirdQuestion from "./components/thirdQuestion";
import FourthQuestion from "./components/fourthQuestion";
import FifthQuestion from "./components/fifthQuestion";
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route path="/first" element={<FirstQuestion />} />
       <Route path="/second" element={<SecondQuestion />} />
       <Route path="/third" element={<ThirdQuestion />} />
       <Route path="/fourth" element={<FourthQuestion />} />
       <Route path="/fifth" element={<FifthQuestion />} />
     </Routes>
    </div>
 );
};
 
export default App;