import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Debt from '../Debts/Debt';
import ProductPage from '../Products/Pages/ProductPage/ProductPage';
import Product from '../Products/Product';
import Sidebar from '../Sidebar/Sidebar';
import './app.scss';
import DebtPage from '../Debts/DebtPage/DebtPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>

          <Route path='/products' element={<Product />} />
          <Route path='/products/products-info' element={<ProductPage />} />
          <Route path='/debts' element={<Debt />} />
          <Route path='/debts/debt-info' element={<DebtPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
