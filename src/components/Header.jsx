import React from 'react'

const Header = (props) => {
  return (
    <div className="bg-violet-400 pt-8">
      <div className="flex justify-between border-2 border-black font-mono ml-32 mr-32 bg-white">
        <a href="#Open" className="text-lg pl-4 pt-4">HOME</a>
        <h2 className="text-2xl font-bold p-4 animate-bounce">FindMyMusik</h2>
        <a href='#1' className="text-lg pr-4 pt-4">PLAY</a>
      </div>

      <div className="col-span-full">
  {props.children}{}
  </div>
  
    </div>
  )
}

export default Header
