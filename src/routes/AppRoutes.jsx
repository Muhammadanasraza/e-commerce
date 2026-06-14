import MainLayout from '@/Layout/MainLayout'
import Home from '@/Pages/Home'
import ProductsDetails from '@/Pages/ProductsDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/products/:id' element={<ProductsDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
