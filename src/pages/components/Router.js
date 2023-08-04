import Header from './Header'
import Footer from './Footer'
import Home from '../Home'
import Error from '../Error'
import '../styles/Router.css'
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom'

export default function Routerr() {
    const Layout = () => {
        return (
            <>
            <Header />
            <div className='Parent'>
            <Outlet />
            </div>
            <Footer />
            </>
        )
    }

    return (
        <>
        <HashRouter>
        <Routes>
            <Route path="/gh-deneme" element={<Layout />}>
                <Route path='/gh-deneme' exact element={<Home />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
        </HashRouter>
        </>
    )

}