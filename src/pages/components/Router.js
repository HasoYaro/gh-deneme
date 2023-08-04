import Header from './Header'
import Footer from './Footer'
import Home from '../Home'
import Error from '../Error'
import '../styles/Router.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

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
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )

}