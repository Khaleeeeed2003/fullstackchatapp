import React, { ReactNode, useState } from 'react'
import './chatapp.css'
import ChatChannel from './ChatChannel'
import { title } from 'process'

interface NavBar{
  title:string
  chatId:number
  chat: React.ReactNode
}  

function ChatApp() {
  const [navBar,setNavBar] = useState<NavBar[]>([
   { title:'addChannel',
    chatId:1,
    chat:<ChatChannel/>}
  ])
  return (
    <div className='mainPage'>
      <div className="navbar">
        <div className='elements'>
          <div>
            <div className='box'>text5</div>
            {
              navBar && navBar.map((item,index)=>{
                  return  <div className='box' key={item.chatId}>
                  {item.title}
                </div>
              })
              
            }
          </div>
        </div>

      </div>
      <div className='channelPart'>
            <ChatChannel />
      </div>
    </div>
  )
}

export default ChatApp