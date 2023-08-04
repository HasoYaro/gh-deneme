import Home from '../Home'
import Error from '../Error'
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom'

export default function Routerr() {
    return (
        <>
        <h1>dsa</h1>
        <HashRouter hashType="hashbang">
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='*' element={<Error />} />
        </Routes>
        </HashRouter>
        </>
    )

}