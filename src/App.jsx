import './App.css';
import {Routes, Route,Navigate} from 'react-router-dom'
import {Navbar,Footer,Home,Login,Signup,Create,FoodDetails,FoodCatalog,Cart,Checkout} from './components'
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import {useSelector} from "react-redux";
import {serverURL} from "./utils/index.js";

function App() {
    const user=useSelector(state=>state.auth.user)
    const location = useLocation()
    const token=useSelector(store=>store.auth.token)
    console.log(serverURL)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])


    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={token ? <Home/> : <Navigate to='/login'/>} />
                <Route path='/login' element={!token ? <Login/> : <Navigate to='/'/>}/>
                <Route path='/signup' element={!token ? <Signup/> : <Navigate to='/'/>}/>
                {user?.isAdmin && <Route path='/create' element={token ? <Create/> : <Navigate to='/login'/>}/>}
                <Route path='/food/:id' element={token ? <FoodDetails/> : <Navigate to='/login'/>} />
                <Route path='/foods/:id' element={token ? <FoodCatalog/> : <Navigate to='/login'/>} />
                <Route path='/cart' element={token ? <Cart/> : <Navigate to='/login'/>} />
                <Route path='/checkout' element={token ? <Checkout/> : <Navigate to='/login'/>}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
