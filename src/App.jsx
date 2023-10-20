import { useState,useEffect } from 'react'
import './App.css'
import dividerDesk from './assets/pattern-divider-desktop.svg'
import dividerMobile from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'

function App() {

  const [text,setText] = useState("click");
  const [author,setAuthor] = useState("");
  const [num,setNum] = useState("");

  useEffect(()=>{
    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then(data => {
        setText(data.quote);
        setNum(data.id);
        setAuthor(data.author)
      })
  },[])

  function handleClick(){
    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then(data => {
        setText(data.quote);
        setNum(data.id);
        setAuthor(data.author)
      })
  }

  return (
    <main className='w-full min-h-[100vh] flex justify-center items-center bg-b'>
      <div 
        id='app-container' 
        className='relative w-[600px] h-auto flex flex-col justify-center text-center rounded pt-5 pb-5 px-3 sm:w-[400px] sm:mx-auto'>
        <h4 className='text-sm'>
          Advcie # 
          <span id='number'>{num}</span> 
        </h4>
        <p className='mb-4 mt-4 sm:text-sm'>
          {`"${text}"`}
        </p>
        <div className='w-full flex justify-center'>
          <img
            className='sm:hidden' 
            src={dividerDesk} 
            alt="divider-desktop" />
          <img
            className='hidden sm:block' 
            src={dividerMobile} 
            alt="divider-mobile" />
        </div>
        <h2 className='my-2 text-xl tracking-widest text-slate-500 sm:text-lg'>
          {author}
        </h2>
        <button
            onClick={handleClick}
            className='absolute bottom-[-30px] right-[268px] flex justify-center items-center w-9 h-9 rounded-full sm:right-[165px]'
            id='btn'>
          <img
            src={dice} 
            alt="icon-dice" />
        </button>
      </div>
    </main>
  )
}

export default App
