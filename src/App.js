
import "./App.css";
import Navbar from './components/navbar';
import Home from './components/home';
import Product from './components/product';
import About from './components/about';
import Review from './components/review';
import Footer from './components/footer';


// import ProductList from './components/ProductList';
const App = () =>{
  return (
    <>
    <div>
      <Navbar />
      <Home />
      <Product />
      <About />
      <Review/>
      <Footer />
      
      </div>
    </>
  );
}

export default App;
