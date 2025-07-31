import React, { useState } from 'react';

const Function = () => {
  const [bong,setBong]=useState(false)
  const [tatoo,setTatoo]=useState(false)
  
  return (
    <div className='admin-fun-wrapper'>
      <div className='con1'>
        <div className='con1-1'>
          <span>티켓 수</span>
          <input style={{paddingLeft:'20px'}}type='number'></input>
        </div>
        <button>티켓 수 변경</button>
      </div>
      <div className='con2'>
        <div className='text'>
          <div className='text1'>보물상자</div>
          <div className='text2'>
            Click to <span style={{ color: 'blue' }}>on</span> /off
          </div>
        </div>
        <div className='box-container'>
          <button>box1</button>
          <button>box2</button>
          <button>box3</button>
          <button>box4</button>
        </div>
      </div>
      <div className='con3'>
        <div  className='con3-1'>드레스 코드</div>
        <div className='con3-2'>
          <div>야광봉</div>
          <div>타투스티커</div>
        </div>
        <div className='con3-3'>
          <button className={bong ? 'active' : 'inactive'} onClick={()=>{setBong(!bong)}}>{bong? 'on':'off'}</button>
          <button className={tatoo ? 'active' : 'inactive'}onClick={()=>{setTatoo(!tatoo)}}>{tatoo?'on':'off'}</button>
        </div>
      </div>


    </div>
  );
};

export default Function;