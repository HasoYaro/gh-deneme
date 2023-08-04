import Home from '../Home'
import Error from '../Error'
import Header from './Header'
import Footer from './Footer'
import '../styles/Router.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

export default function Routerr() {
    return (
        <>
        <HashRouter>
        <Header />
        <Routes>
            <div className='parent'>
                <Route path='/a' exact element={<Home />} />
                <Route path='*' element={<Error />} />
            </div>
        </Routes>
        <Footer />
        </HashRouter>
        </>
    )

}