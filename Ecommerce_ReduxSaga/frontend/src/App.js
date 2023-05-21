import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/forms/Register';
import Login from './pages/forms/Login';
import FooterAboutPage from './pages/footerPages/FooterAboutPage';
import FooterContactPage from './pages/footerPages/FooterContactPage';
import FooterPrivacyPolicyPage from './pages/footerPages/FooterPrivacyPolicyPage';
import Home from './pages/headerLinkPages/Home';
import Category from './pages/headerLinkPages/Category';
import Tags from './pages/headerLinkPages/Tags';
import Cart from './pages/headerLinkPages/Cart';
import CreateProductAdmin from './pages/admin/CreateProductAdmin';
import AdminCreateCategory from './pages/admin/AdminCreateCategory';
import AdminCreateTag from './pages/admin/AdminCreateTag';
import AdminProducts from './pages/admin/AdminProducts';
import AdminUpdateProduct from './pages/admin/AdminUpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/footer/about' element={<FooterAboutPage />} />
          <Route exact path='/footer/contact' element={<FooterContactPage />} />
          <Route exact path='/footer/privacy-policy' element={<FooterPrivacyPolicyPage />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/category' element={<Category />} />
          <Route exact path='/tags' element={<Tags />} />
          <Route exact path='/cart' element={<Cart />} />

          {/* admin routes */}
          <Route exact path='/admin/create-product' element={<CreateProductAdmin />} />
          <Route exact path='/admin/update-product' element={<AdminUpdateProduct />} />
          <Route exact path='/admin/products' element={<AdminProducts />} />
          <Route exact path='/admin/create-category' element={<AdminCreateCategory />} />
          <Route exact path='/admin/create-tag' element={<AdminCreateTag />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
