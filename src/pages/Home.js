import { useState } from 'react'
import './styles/Home.css'

export default function Home() {

    const[isim,setIsim] = useState('')
    const[hata,setHata] = useState(false)
    const[userInput,setUserInput] = useState('')

    function selamla(e) {
        e.preventDefault()

        if(userInput === "")
        {  
            setHata(true)
            setIsim('İsim boş bırakılamaz')

        }
        else 
        {
            setIsim('Merhaba, '+userInput)
            setHata(false)
        }
       
    }
        return(
            <>
            <h1></h1>
            <div className='home-cont'>
                <form>
                <ul>
                    <li>Selamlamak istediğiniz kişinin ismini girin</li>
                    <li><input autoComplete='off' value={userInput} onChange={(e) => setUserInput(e.target.value)} required id="home-isim-input" /><button onClick={selamla}>Selamla</button></li>
                    <li style={{color: hata ? 'red' : '#212121'}}>&nbsp;{isim}&nbsp;</li>
                    <li>&nbsp;</li>
                </ul>
                </form>
            </div>
            </>
        )

    

}