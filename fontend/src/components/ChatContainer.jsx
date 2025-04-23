import { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore'

const chatContainer = () => {

  const {messages, getMessages, selectedUser, isMessageLoading} = useChatStore();

 useEffect(() => {
  getMessages(selectedUser._id)
 },[selectedUser._id,getMessages])

  if(isMessageLoading) return <div>Loading...</div>
  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatHeader />

      <p>messages...</p>

      <MessageInput />
    </div>
  )
}

export default chatContainer