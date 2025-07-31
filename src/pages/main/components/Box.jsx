import React from 'react';

const Box = ({img,content,title}) => {
  return (
    <div className='box'>
      <img src={img}></img>
      <div className='title'>{title}</div>
      <div className='content' style={{width:237}}>{content}</div>
      <div style={{fontSize:39,position:'absolute',bottom:20,right:20}}>{'>'}</div>
    </div>
  );
};

export default Box;