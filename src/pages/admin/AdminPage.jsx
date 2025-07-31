import React from 'react'
import Logo from '../../assets/admin/logo.svg'
import { useState } from 'react'
import Function from './components/Function'

function AdminPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin,setIsLogin]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('로그인 정보:', { id, password });
    setIsLogin(true)
  };
  
  
  return (
   !isLogin ?
   (<div className='admin-wrapper'>
      <form onSubmit={handleSubmit}>
        <div className='container1'>
          <img src={Logo} ></img>
        </div>
        <div className='container2'>
          <div>DEER FOR U:비상</div>
          <div>관리자 페이지</div>
        </div>
        <div className='container3'>
          <input type='text'
          required
          onChange={(e) => setId(e.target.value)}
          className='input' placeholder='ID'></input>
        </div>
        <div className='container4'>
          <input type='text'
          onChange={(e) => setPassword(e.target.value)}
          required
          className='input' placeholder='Password'></input>
        </div>
        <div className='container5'>
          <button className='button' type='submit'>Sign in</button>
        </div>
      </form>
    </div>)
    :(<Function/>)
   
  )
}

export default AdminPage