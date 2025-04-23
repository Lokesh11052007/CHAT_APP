import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'

const chatContainer = () => {

  const {messages, getMessages, selectedUser, isMessageLoading} = useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);
  return (
    <div>chatContainer</div>
  )
}

export default chatContainer