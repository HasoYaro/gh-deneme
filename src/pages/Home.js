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
                    <li><h1><label>Selamlamak istediğiniz kişinin ismini girin</label></h1></li>
                    <li><label><input autoComplete='off' value={userInput} onChange={(e) => setUserInput(e.target.value)} required id="home-isim-input" /><button onClick={selamla}>Selamla</button></label></li>
                    <li><h1><label style={{color: hata ? 'red' : '#212121'}}>{isim}</label></h1></li>
                    <li><label><button className='home-btn'>Kaydet</button><button>Çıkış</button></label></li>
                </ul>
                </form>
            </div>
            </>
        )

    

}