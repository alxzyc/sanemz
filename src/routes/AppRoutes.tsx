import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import About from '../pages/About';
import Catalog from '../pages/Catalog';
import Contact from '../pages/Contact';
import CustomOrder from '../pages/CustomOrder';
import Home from '../pages/Home';
import Product from '../pages/Product';
export default function AppRoutes(){return <Routes><Route element={<AppLayout/>}><Route index element={<Home/>}/><Route path="catalogo" element={<Catalog/>}/><Route path="produto/:id" element={<Product/>}/><Route path="personalizacao" element={<CustomOrder/>}/><Route path="sobre" element={<About/>}/><Route path="contato" element={<Contact/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes>}
