import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shoes from './components/Shoes';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Boots from './components/Boots';
import Sandals from './components/Sandals';
import Formal from './components/Formal'
import Sneakers from './components/Sneakers'
import Cart from './components/Cart';
import Payment from './components/Payment'
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import { SearchProvider } from './components/SearchContext';
import ProductDetail from './components/ProductDetail';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <SearchProvider>
    <Navbar/>

   <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<SearchPage />} />
     
       <Route path="/Shoes" element={<Shoes/>}>
       <Route index element={<Sandals />} />

       <Route path="Boots" element={<Boots/>}/>
       <Route path="Sandals" element={<Sandals/>}/>
       <Route path="Formal" element={<Formal/>}/>
       <Route path="Sneakers" element={<Sneakers/>}/>

      </Route>
      
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>

      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
         
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    </main>
    </SearchProvider>
    
     <Footer />
    </div>
  );
}

export default App;
