import Home from '../Home'
import Error from '../Error'
import Header from './Header'
import Footer from './Footer'
import '../styles/Router.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Routerr() {
    return (
        <>
        <BrowserRouter>
        <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='*' element={<Error />} />
        </Routes>
        </BrowserRouter>
        </>
    )

}