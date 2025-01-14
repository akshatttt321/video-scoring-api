import React from 'react'
import { useState,useRef,useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'

function Catalogue() {

 let lastScrollY = 1;
 const[showNav,setShowNav]= useState(true)
 const [selectedCollection,setSelectedCollection] = useState([]);  
 const [clickedIndex, setClickedIndex] = useState(0)
 const [isClicked,setisClicked] = useState(false)
 let initial = true
 const [isLoading,setisLoading] = useState(false)
 const [next,setNext] = useState('');
 const  options = {
    method: 'GET', 
    headers: {accept: 'application/json', 'x-api-key': '3fde54829e5e4fe2a4fab4e0813a81b9'}
  }

  const collectionData1 = [
    { id: 1, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1736555447/yjaiyh9w8mswp88r3loo.png" },
    { id: 2, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1736728126/ajm3jplwemljzm0fhb4d.png" },
    { id: 3, link: "https://res.cloudinary.com/dzz1r3hcf/video/upload/v1736617127/odfx0jt6nhpetylyjqqi.mp4" },
    { id: 4, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1736557891/oah3nv6h7q5yprzz6nvr.png" },
    { id: 5, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1736726588/phxjmcpk0oebowakluql.png" },
    { id: 6, link: "https://res.cloudinary.com/dzz1r3hcf/video/upload/v1735065977/ynfkq3hx841eftqycccl.mp4" }
  ];
  
  const collectionData2 = [
    { id: 6, link: "https://res.cloudinary.com/dzz1r3hcf/video/upload/v1736773637/vqcjwqrqrfr0owgfln73.mp4" },
    { id: 7, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1735449536/hybcxwkz2rtcw5vn5h3j.png" },
    { id: 8, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1736559081/k57ojcvxltprrsbpo9zh.png" },
    { id: 9, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1735450939/amozdnqtwvzgarhyzoha.png" },
    { id: 10, link: "https://res.cloudinary.com/dzz1r3hcf/video/upload/v1736615039/bl807kjxvqdmfjdxy4pu.mp4" },
  ];
  
  const collectionData3 = [
    { id: 11, link: "https://res.cloudinary.com/dzz1r3hcf/video/upload/v1736782583/gwkr5xvmeo3dainhuupw.mp4" },
    { id: 12, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1736765557/acwwv03a0tiuw2yohuec.png" },
    { id: 13, link: "https://res.cloudinary.com/dzz1r3hcf/video/upload/v1735026699/war4lxeqzycvrhid5jzp.mp4" },
    { id: 14, link: "https://res.cloudinary.com/dzz1r3hcf/video/upload/v1735449989/mvrtza693wjjtps4ieyb.mp4" },
    { id: 15, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1736729177/n1oqpjamozhfv0eghxd0.png" },
    { id: 16, link: "https://v3.fal.media/files/koala/zjz8_QI9kDx1OYxC1LskL_output.mp4" },
  ];
  
  const collectionData4 = [
    { id: 16, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1736777390/sojrl2h5etywpcuqeavf.png" },
    { id: 17, link: "https://res.cloudinary.com/dzz1r3hcf/video/upload/v1735451420/ldc7o4k7des7cidsao1f.mp4" },
    { id: 18, link: "https://res.cloudinary.com/dzz1r3hcf/image/upload/v1736728126/ajm3jplwemljzm0fhb4d.png" },
    { id: 19, link: "https://res.cloudinary.com/dzz1r3hcf/video/upload/v1736559239/flp1nb70m1c0gmt8kidx.mp4" },
    { id: 20, link: "https://res.cloudinary.com/dzz1r3hcf/video/upload/v1734993345/cwbdme61kqwmrxpauhj6.mp4" },
  ];
  
 
 function getClicked(index){
  setisClicked(true)
  setClickedIndex (index)
 }

 addEventListener("scroll", () => {
    if (window.scrollY < lastScrollY) {
      lastScrollY = window.scrollY;
      setShowNav(true);}
    else{
      setShowNav(false);
    }
})


  return (
    <>
    <Navbar showNav={showNav} setShowForm={setShowNav} />
    <div className={` flex flex-col justify-between bg-black items-center h-full`}>
    <div 
    className='flex bg-black mt-[68px] gap-6 items-center justify-center h-full w-screen'>
    <div className='ml-4 flex flex-col justify-between items-baseline p-1 h-screen w-[20vw]'>
       {
        collectionData1?.map((collection,index) => (<div 
          onClick={()=>{getClicked(index)
            setSelectedCollection(collectionData3)
          }}
          key={collection.id}
        className= {`transition-all cursor-pointer overflow-clip w-[20vw] h-[24vh] m-1`}>
{ (collection.link.split('.')).pop()==='png'?
              (<img src={collection.link} alt={collection.id} className='h-full w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'/>):
              (<video
              muted
              autoPlay
              loop
              className='h-full w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'
                src={collection.link}
              ></video>)
              }
      </div>
  ))
}
</div>
<div className='flex flex-col ml-4 justify-start items-center my-2 p-1 h-screen w-[25vw]'>
       {
        collectionData2?.map((collection,index) => (<div 
          onClick={()=>{getClicked(index)
            setSelectedCollection(collectionData2)
          }}
          key={collection.id} 
      className='overflow-clip cursor-pointer h-[32vh] w-[26vw] hover:scale-[1.02] m-1 transition-all'>
           { (collection.link.split('.')).pop()==='png'?
              (<img src={collection.link} alt={collection.id} className='h-full w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'/>):
              (<video
              muted
              autoPlay
              loop
              className='h-full w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'
                src={collection.link}
              ></video>)
              }
            </div>
  ))
}
</div>
<div className='l-2 flex flex-col justify-between items-baseline p-1 h-screen w-[20vw]'>
       {
        collectionData3?.map((collection,index) => (<div 
          onClick={()=>{getClicked(index)
            setSelectedCollection(collectionData3)
          }}
          key={collection.id}
        className= {`transition-all cursor-pointer overflow-clip w-[20vw] h-[24vh] m-1`}>
{ (collection.link.split('.')).pop()==='png'?
              (<img src={collection.link} alt={collection.id} className='h-full w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'/>):
              (<video
              muted
              autoPlay
              loop
              className='h-full w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'
                src={collection.link}
              ></video>)
              }
      </div>
  ))
}
</div>
<div className='flex flex-col justify-start items-center my-2 p-1 h-screen w-full mr-4'>
       {
        collectionData4?.map((collection,index) => (<div 
          onClick={()=>{getClicked(index)
            setSelectedCollection(collectionData4)
          }}
          key={collection.id} 
        className='overflow-clip cursor-pointer h-[32vh] w-[26vw] hover:scale-[1.02] m-1 transition-all'>
{ (collection.link.split('.')).pop()==='png'?
              (<img src={collection.link} alt={collection.id} className='h-full w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'/>):
              (<video
              muted
              autoPlay
              loop
              className='h-full w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'
                src={collection.link}
              ></video>)
              }
      </div>
        
  ))
}

{isClicked && (<div className={`fixed flex bg-center bg-no-repeat bg-cover items-center justify-center backdrop-blur-sm inset-0 text-white text-3xl z-50`}
>
  <div className='w-[90%] grid bg-no-repeat bg-cover border-4 rounded-xl border-r-white border-b-white border-t-black border-l-black bg-center  mt-[30px] h-3/4'
  style={{
    gridTemplateColumns: "repeat(20,minmax(0,1fr))",
    gridTemplateRows: "repeat(20,minmax(0,1fr))",
    backgroundImage: `url("${selectedCollection[clickedIndex]?.banner_image_url.replace('&', '/&')}")`}}
  >
  <div className='col-span-full col-start-auto row-span-2 flex justify-end'>
  <FontAwesomeIcon
  onClick={()=>setisClicked(false)}
  className=' cursor-pointer text-[#12263f] absolute transform translate-x-1/2 -translate-y-1/2' icon={faXmarkCircle}/>
  </div>
  </div>

  </div>)}
</div> 
</div>
</div>
</>
)}

export default Catalogue