import {useState} from 'react'
import '../style/botton.css'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';



export default function ButtonSubscribe() {
    const [subs, setSubs] = useState(false)

  return (
    <>
        <button 
        className='button'
        onClick={()=>{
            toast.info(`Tu estas ${subs ? 'des' : ''}subscripto`)
            setSubs(!subs)
        }}
        >{
            subs ? 'Suscríbete' : 'Subscripto'
        }</button>
        		<ToastContainer></ToastContainer>
    </>
  )
}
