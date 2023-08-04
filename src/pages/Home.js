import { useEffect, useState } from 'react'
import './styles/Home.css'

export default function Home() {

    const[isim,setIsim] = useState('')
    const[userInput,setUserInput] = useState('')

    function selamla(e) {
        e.preventDefault()

        setIsim('Merhaba, '+userInput)
    }
        return(
            <>
            <h1></h1>
            <div className='home-cont'>
                <form onSubmit={selamla}>
                <ul>
                    <li>Selamlamak istediğiniz kişinin ismini girin</li>
                    <li><input autoComplete='off' onChange={(e) => setUserInput(e.target.value)} required id="home-isim-input" /><button disabled={!userInput} >Selamla</button></li>
                    <li>{isim}&nbsp;</li>
                    <li>&nbsp;</li>
                </ul>
                </form>
            </div>
            </>
        )

    

}