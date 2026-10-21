import RegistrationForm from "./components/RegistrationForm";
import "./App.css";
import { Route,Routes } from "react-router-dom";
// import footer from "./components/footer/Footer";
// import Header from "./components/header/Header";


function App() {
  return (
    <div className="container">
     {/* <Header/> */}
    
      <Routes>
        <Route path="/" element={<RegistrationForm/>}/>
        <Route path="/counter" element={<CounterP/>}/>
         <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>} />
      </Routes>
      {/* <footer/> */}
 

    </div>
  );
}

export default App;