import React from 'react'

const Footer = (props) => {
  return (
    <div className="bg-lime-800">
        
     
        <div className="flex justify-between font-mono leading-none pl-10">
        <h1 className="text-[80px] font-bold text-red-300 text-left pt-10">THANK YOU<br/>FOR PLAYING </h1>

     


        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-right pt-10 mr-10 mt-10">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22.225 0H1.776A1.777 1.777 0 0 0 0 1.776v20.448A1.777 1.777 0 0 0 1.776 24h20.448A1.777 1.777 0 0 0 24 22.224V1.776A1.777 1.777 0 0 0 22.225 0zM7.078 20.452H3.584V9.227h3.494v11.225zm-1.754-12.972a2.045 2.045 0 1 1 0-4.09 2.045 2.045 0 0 1 0 4.09zm16.15 12.972h-3.493v-6.065c0-1.442-.051-3.287-2.003-3.287-2.003 0-2.31 1.565-2.31 3.184v6.168h-3.491V9.227h3.355v1.541h.05c.468-.89 1.608-1.827 3.308-1.827 3.535 0 4.188 2.33 4.188 5.351v6.46z"/>
    </svg>
</a>


        </div>

        <p className="text-center pt-12 text-white font-mono">Copyright 2024 FindMyMusik. All rights reserved.</p>
        <div className="pt-4"></div>

        <div className="col-span-full">
  {props.children}{}
</div>
        
    </div>
  )
}

export default Footer
