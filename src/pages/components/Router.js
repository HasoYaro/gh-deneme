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
        <h1>dsa</h1>
        <HashRouter basename='/gh-deneme/'>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/' exact element={<Home />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
        </HashRouter>
        </>
    )

}