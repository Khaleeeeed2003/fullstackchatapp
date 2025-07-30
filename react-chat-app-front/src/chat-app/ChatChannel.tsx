
import React, { useEffect, useRef, useState } from 'react';
import './chatchannel.css';

interface ChatMessage {
  name: string;
  picture: string;
  text: string;
}


function sendData(dataToSend:object){
   fetch('http://localhost:3354/todoapp/showtasks',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(dataToSend)
       })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return response.json();
  })
  .then(data => {
    console.log('Received:', data); 
 })
  .catch(error => {
    console.error('Error:', error); 
  });
}



function ChatChannel({}) {
  const [value, setValue] = useState<string>('');
  const [fetchedData,setFedchedData] = useState([])
  const [chat, chatList] = useState<ChatMessage[]>([
    {
      name: 'mbappe',
      picture: 'https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/32e193b3-b8e8-437a-a24a-651f0b22c15f/mbappe%20trophy%203.jpg?ver=03-06-2025?w=3840&q=75',
      text: 'text text text',
    },
    {
      name: 'bellingham',
      picture: 'https://assets.bundesliga.com/contender/2024/4/imago1034602594h.jpg?crop=374px,0px,3751px,3001px&fit=540,540',
      text: 'text text text',
    },
    {
      name: 'vini',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKIY9j7zeWSYCiUfgkO3Ch4RkqOpAEaNLDQ&s',
      text: 'text text text',
    },
  ]);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight; 
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

useEffect(()=>{


},[])

  function addChat() {
    if (value.length > 0) {
      
      // chatList((prv) => [...prv, ]);
      // setValue('');
    }
  }

  return (
    <div className="mainDiv">
      <div className="chatBox">
        <div className="chatZone" ref={chatRef}>
          {chat.map((chatter, index) => {
            return (
              <div className="chat">
                <img src={chatter.picture} className="img" />
                <div>
                  <p>{chatter.name}:</p>
                  <p>{chatter.text}</p>
                  <p>{chatter.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="inputBox">
        <input
          value={value}
          placeholder="type..."
          className="input"
          onChange={(e) => setValue(e.target.value)}
        />
        <div onClick={addChat} className="clickme">
          <p>+</p>
        </div>
      </div>
    </div>
  );
}

export default ChatChannel;

// todo :
// - send msg using a post request
// - that msg goes to backend 
// - broadcast that msg to everyone 
// 
// 
// 
// 
// 
