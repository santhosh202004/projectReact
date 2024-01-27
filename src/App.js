/*import {BrowserRouter,Route,Routes} from "react-router-dom"
 import Layout from './pages/Layout'
 import Home from './pages/Home'
 import Contact from './pages/Contact'
 import About from './pages/About'
import Counter from "./pages/Counter"*/
import Usestate from "./pages/Usestate"
 import React from "react"
import Reducer from "./pages/Reducer"
import Ref from "./Ref"
import CounterComponent from "./pages/CounterComponent"
import Memo from "./pages/Memo"


export default function App(){
  return(
/*<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="Counter" element={<Counter/>}/>


  </Route>
</Routes> 
</BrowserRouter>*/
//<>
//<Usestate/>
//<Reducer/>
//</>
<>
<Ref/>
<CounterComponent/>
<Memo/>
</>
  )
}