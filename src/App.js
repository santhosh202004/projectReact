import {BrowserRouter,Route,Routes} from "react-router-dom"
 import Layout from './pages/Layout'
 import Home from './pages/Home'
 import Contact from './pages/Contact'
 import About from './pages/About'
 

export default function App(){
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    

  </Route>
</Routes> 
</BrowserRouter>
  )
}