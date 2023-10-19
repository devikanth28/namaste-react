import logo from './logo.svg';
import './App.css';
import AppLayout from './client/components/AppLayout';
import createBrowserRouter from 'react-router-dom'
import About from './client/components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import RestaurentMenu from './client/components/RestaurentMenu';
// import Grocery from './client/components/Grocery';
import {lazy,Suspense, useEffect, useState} from 'react'
import UserContext from './client/common/UserContext';
import {Provider} from "react-redux"
import AppStore from './client/common/AppStore';
import CartInfo from './client/redux/CartInfo';
function App() {
  
  // const err = useRouteError();
  // console.log("useRouteError", err);
  const Grocery = lazy(() => import("./client/components/Grocery"));

//Authentication logic;
const [userName, setUserName] = useState();
useEffect(()=>{
  //Make an API Call
  
  const data = {
    name:"Devi"
  };
  setUserName(data.name);
},[]);

  return (
    <div className="App">

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <Provider store={AppStore}>

      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<AppLayout />} />
            <Route exact path='/restaurants/:resId' element={<RestaurentMenu />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path="/grocery" element={<Suspense fallback="wait your items are loading"><Grocery /></Suspense>} />
            <Route exact path='/cart' element={<CartInfo/>}/>
          </Routes>
        </Router>
        <appRouter />
      </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
