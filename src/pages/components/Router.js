import Home from '../Home'
import Error from '../Error'
import Contact from '../Contact'
import Header from './Header'
import Footer from './Footer'
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
            <Route path="/" element={<Layout />}>
                <Route path='/' exact element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
        </HashRouter>
        </>
    )

}