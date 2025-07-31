import React from 'react';
import Main1 from '../../assets/common/main1.svg'
import Header from '../../layout/Header'
import Box from './components/Box'
import Seat from '../../assets/main/seat.svg';
import Gift from '../../assets/main/gift.svg';
import Dress from '../../assets/main/dress.svg';
import Time from '../../assets/main/time.svg';
import Truck from '../../assets/main/truck.svg'
import School from '../../assets/main/school.webp';
import Likelion from '../../assets/main/likelion.webp';
import Smucd from '../../assets/main/smucd.webp';
import Textbox from '../../assets/main/TextBox.webp';
const boxes=[
  {id:1,
  title:'🛩️ 스위치 비행기 좌석 추첨',
  content:'탑승권을 구매하고 다양한 경품을 받아가보세요!',
  img:Seat,
  },
  {id:2,
    title:'🎁 Switch의 선물을 unlock!',
    content:'상명대에 숨겨진 암호쪽지를 찾고 보물을 차지하세요!',
    img:Gift
  },
  {id:3,
    title:'👕 드레스코드',
    content:'드레스코드를 맞춰 입고 경품도 받아가세요!',
    img:Dress
  },
]
const create=[
  {id:1,
    title1:'Switch',
    title2:'총학생회',
    img:School,
  },
  {
    id:2,
    title1:'멋쟁이',
    title2:'사자처럼',
    img:Likelion,
  },
  {
    id:3,
    title1:'커뮤니케이션',
    title2:'디자인전공',
    img:Smucd,  
  },
]


const MainPage = () => {
    return (
      <>  
        <Header/>
        <div className='main-image1'>
          <img src={Textbox}></img>
          <div className='title-container'>
              <div className='text1'>2023.9/25~26</div>
              <div className='text2'>DEER FOR YOU</div>
              <div  style={{fontSize:'36px'}}className='text2'>:비상</div>
              
          </div>
          <div className='main-scroller'>
            <div>밑으로 스크롤</div>
            <div>⌃</div>
          </div>
          

        </div>
        <div className='main-wrapper'>
          <div className='main-container1'>
            <div className='text'>📢이벤트</div>
            <div className='video-container'>
              <div className='box'>
                <a href="https://m.youtube.com/watch?v=Ik0dtE_Mx6A&amp;source_ve_path=MTc4NDI0" target="_blank" rel="noreferrer"> 
                  <div>
                    <img src="https://img.youtube.com/vi/Ik0dtE_Mx6A/0.jpg" />
                  </div>
                </a> 
              </div>
              {boxes.map((box)=>(
                <Box img={box.img}title={box.title} content={box.content}></Box>

              ))}
            </div>
          </div>
          <div className='main-container2'>
            <div className='arrow'>{'>'}</div>
            <div className='title'>⏰ 타임 테이블</div>
            <div style={{ width:'100%' , height:'calc(100% - 31.5px)',borderRadius:12}} >
              <img style={{width:'100%',height:'100%'}}src={Time}></img>
            </div>
          </div>
          <div className='main-container3'>
            <div className='text-container'>
              <div className='title'>🎉 부스/푸드트럭</div>
              <div className='arrow'>{'>'}</div>
            </div>
            <div className='img-container'>
              <div className='text-con'>
                <div className='text1'>부스&</div>
                <div className='text2'>푸드트럭</div>

              </div>
              <div className='img-con'>
                <img className='truck'src={Truck}></img>
              </div>
            </div>
          </div>
          <div className='main-container4'>
            <div className='title'>🤷 누가 만들었나요?</div>
            <div className='card-wrapper'>
              {create.map((item)=>{
                return(
                  <div className='card-container'>
                    <img src={item.img}></img>
                    <div className='text-container'>
                      <div>{item.title1}</div>
                      <div>{item.title2}</div>
                    </div>
                    {/* <div style={{width:24,height:24,lineHeight:24,position:'absolute',bottom:16,right:16,color:'white'}}>dsfksfjk</div> */}
                    <div style={{
                        width: '24px',
                        height: '24px',
                        lineHeight: '24px',
                        fontSize:'24px',
                        position: 'absolute',
                        bottom: '16px',
                        right: '0px',
                        color: 'white',
                    }}>
                        {'>'}
                    </div>

                  </div>
                )
              })
              }
            </div>
          </div>
        </div>
      </>
    );
};

export default MainPage;