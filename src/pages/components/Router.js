import Home from '../Home'
import Error from '../Error'
import Header from './Header'
import Footer from './Footer'
import { HashRouter, Routes, Route } from 'react-router-dom'

export default function Routerr() {
    return (
        <>
        <HashRouter hashType="hashbang">
        <Header />
        <Routes>
            <Route path='/a' exact element={<Home />} />
            <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
        </HashRouter>
        </>
    )

}