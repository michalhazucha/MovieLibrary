import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Message.scss';
import { message, Button } from 'antd';
const Message = ({ content }: string | any) => {
  return(
  message.success({
    duration: 300,
    content: `Your movie was successfully ${content}`,
    className: 'Success-message', 
  })
  )
};  
export default Message