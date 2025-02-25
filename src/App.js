import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Post from './pages/Post/Post'
import Products from './pages/Products/Products'
import TermsAndConditions from './pages/Legal/Terms&Conditions'
import PrivacyPolicy from './pages/Legal/PrivacyPolicy'
import './assets/styles/App.css'
import BusinessPage from './pages/BusinessPage/Business';
import JobsPage from './pages/JobsPage/Jobs';
import RealestatePage from './pages/RealestatePage/Realestate';
import CarsPage from './pages/CarsPage/Cars';
import AddProduct from './pages/Products/AddProduct';
import ProductDetail from './pages/Products/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/signup/" element={<Signup />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/post" element={<Post />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/realestate" element={<RealestatePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
