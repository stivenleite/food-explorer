import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { NewProduct } from '../pages/NewProduct';
import { EditProduct } from '../pages/EditProduct';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/newproduct' element={<NewProduct />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/editproduct/:id' element={<EditProduct />} />
        </Routes>
    )
}
