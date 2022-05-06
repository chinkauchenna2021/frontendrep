import React, {useState} from 'react';
import Image from 'next/image';
import { RiNumbersLine, RiApps2Line ,RiArrowDownSLine ,RiPriceTagLine,RiExternalLinkFill,RiQuestionLine} from "react-icons/ri";
import { FaDiscord , FaTwitter,FaInstagram } from "react-icons/fa";
function Header() {


    const [redsize , setRedsize] = useState("");
    const [show, setShow] = useState("");

    const [redsize2 , setRedsize2] = useState("");
const [second , setSecond] = useState("260px");
const [show2, setShow2] = useState("none");

const [redsize3 , setRedsize3] = useState("50px");
const [show3, setShow3] = useState("none");
const [translator, setTranslator] = useState('');




const accordion = ()=>{
    if(redsize == "50px"){
        
        setRedsize('');
       setShow('grid');

       setTranslator('-200px');

      }else{

        setRedsize('50px');
        setShow('none');
        setTranslator('');
      }

}





const accordion2 = ()=>{
    if(redsize2 == ""){

        setRedsize2('50px');
        setSecond('0px');
        setTranslator('');


  

     
      }else{
        setRedsize2('');
        setSecond('260px');
        console.log(show2 , redsize2);

      }

}





const accordion3 = ()=>{
    if(redsize3 == "50px"){
        
        setRedsize3('');
       setShow3('grid');

   


      }else{

        setRedsize3('50px');
        setShow3('none');
        setTranslator('');
      }

}




// button functions

const [colorchange , setColorchange]  = useState('rgba(13, 13, 13, 0.5)');
const [colorchange1 , setColorchange1]  = useState('#000000');
const [colorchange2 , setColorchange2]  = useState('rgba(13, 13, 13, 0.5)');
const [true1 , setTrue1] = useState(false);
const [true2 , setTrue2] = useState(true);
const [true3 , setTrue3] = useState(false);



const clicker0 = ()=>{

    if(colorchange == 'rgba(13, 13, 13, 0.5)'){

        setColorchange('#000000');
        setColorchange2('rgba(13, 13, 13, 0.5)');
        setColorchange1('rgba(13, 13, 13, 0.5)');
        setTrue1(true);
        setTrue2(false);
        setTrue3(false);

    }

}

const clicker1 = ()=>{
if(colorchange1 == 'rgba(13, 13, 13, 0.5)'){

    setColorchange1('#000000');
    setColorchange('rgba(13, 13, 13, 0.5)');
    setColorchange2('rgba(13, 13, 13, 0.5)');

    setTrue1(false);
        setTrue2(true);
        setTrue3(false);

}


    
}

const clicker2 = ()=>{

    if(colorchange2 == 'rgba(13, 13, 13, 0.5)'){

        setColorchange2('#000000');
        setColorchange('rgba(13, 13, 13, 0.5)');
        setColorchange1('rgba(13, 13, 13, 0.5)');
        setTrue1(false);
        setTrue2(false);
        setTrue3(true);

    
    }
    
}























  return (
    <header className="bg-black  container-fluid" style={{backgroundColor:'#0D0D0D'}}>

<div className="lg:flex lg:items-center lg:justify-between align-middle flex-column justify-center sm:flex">
  <div className="flex justify-center md:w-30 px-10">
       
        <Image
       className="object-contain md:ml-5 w-3 cursor-pointer"
         src={'./../img/image3.png'}
         width={190}
         height={80}
         alt="logo"
       />
       
  </div>


  <div className="transition-all  w-8 hover:w-3/4 rounded lg:ml-40 top-40  left-50 absolute   flex  lg:top-0 lg:relative   justify-center lg:justify-start lg:w-3/4  px-auto" style={{backgroundColor:"#1F1F1F"}}>
  <svg  className=" h-6 w-6 absolute top-3  text-gray-400  left-2 lg:left-4 lg:top-3" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
      <input className="pl-6  w-3/4  lg:pl-14  rounded py-4   leading-tight focus:outline-none   text-white " id="grid-password" type="text" placeholder="Lorem ipsum"  style={{backgroundColor:"#1F1F1F"}}/>
</div>










  <div className=" flex lg:mt-0 lg:ml-4  relative justify-center py-5">
    <span className="sm:block ">
      <a className="inline-flex items-center px-6 py-2 cursor-pointer   text-md font-medium  justify-center align-middle" style={{color:"#ffffff"}}>
        Lorem
      </a>
    </span>

    <span className="sm:block ml-3 ">
    <a className="inline-flex items-center px-6 py-2 cursor-pointer   text-md font-medium  justify-center align-middle" style={{color:"#ffffff"}}>
        lorem
      </a>
    </span>

    <span className="sm:ml-3">
    <a className="inline-flex items-center px-6 py-2 cursor-pointer   text-md font-medium  justify-center align-middle" style={{color:"#ffffff"}}>
        lorem
      </a>
    </span>

    {/* <!-- Dropdown --> */}
     {/* <div class="hidden mobile-menu">
				<ul class="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div> */}
    {/* <span className="ml-3 relative sm:hidden"> */}
      {/* <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
        More */}
        {/* <!-- Heroicon name: solid/chevron-down --> */}
        {/* <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button> */}
{/* 
      <!--
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-200"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      --> */}
      {/* <div className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1"> */}
        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
        {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0">Edit</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1">View</a>
      </div>
    </span> */}
  </div>
</div>
<div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

<div className=" container-fluid min-h-screen  m-0 p-0  lg:min-h-screen animate-waving-hands " style={{background:"linear-gradient(15.74deg, rgba(46, 45, 102, 0.6) -2.5%, rgba(58, 39, 63, 0.6) 47.55%, #181818 90.7%)"}}>
    <div className=" lg:pt-7 md:px-3 ">
    <div className=" h-auto flex items-end  bg-footer-texture  xs:bg-no-repeat  lg:bg-repeat-x md:bg-no-repeat md:bg-contain  rounded py-0 bg-center bg-auto " style={{minHeight:'260px'}}>
        
          {/* <img
          src={"/../public/img/image125.png"}
          className='md:bottom-px origin-center rotate-180 md:rotate-0 '

           /> */}
           <div className="relative flex w-full items-end">

               <div className=" w-full h-6 flex justify-center items-center" >

               <img
       className="object-contain md:ml-5  mx-auto"
         src={'./img/Ellipse37.png'}
         width={100}
         height={100}
         alt="footer"
       />
                   
               </div>


         </div>










    </div>
</div>



       {/* text center */}

       <div className="relative container-fluid  w-full flex flex-column justify-center align-middle h-100 pt-20 pb-12">
    <div className="flex-column flex-column  w-full">
        <div className="lg:text-4xl text-3xl text-white text-bold w-full text-center leading-normal">Lorem ipsum</div>
        <div className="w-full text-center leading-relaxed text-sm "><span className="text-md text-white">created by:</span><span className="text-red-800 pl-2">Lorem ipsum</span></div>
        <div className="text-sm w-full text-center text-white leading-relaxed  pt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</div>
    </div>
</div>





{/* buttons */}

<div className="w-full mt-1">
    <div className="flex w-full justify-center space-x-2">
        <div className="w-[120px] lg:w-[170px] justify-center pr-2 h-10 items-center flex lg:justify-center lg:items-center rounded lg:py-5 animate-all cursor-pointer" style={{background:colorchange}}  onClick={()=>clicker0()}>
           <span className="flex justify-end pl-1 lg:pl-2 lg:pr-2"> <RiNumbersLine color={'white'} /></span>
            <span className="w-2/4 lg:w-2/4 flex text-center text-xs text-white ">Lorem ipsum</span>
        </div>
        <div className="w-[120px] lg:w-[170px] justify-center pr-2 h-10 items-center flex lg:justify-center lg:items-center rounded animate-all cursor-pointer" style={{background:colorchange1}} onClick={()=>clicker1()}>
           <span className="flex justify-end pl-1 lg:pl-2 lg:pr-2"> <RiApps2Line color={'white'} /></span>
            <span className="w-2/4  lg:w-2/4  flex text-center text-xs text-white ">Lorem ipsum</span>
        </div>
        <div className="w-[120px] lg:w-[170px] justify-center pr-2 h-10 items-center flex lg:justify-center lg:items-center rounded animate-all cursor-pointer" style={{background:colorchange2}} onClick={()=>clicker2()}>
           <span className="flex justify-end pl-1 lg:pl-2  lg:pr-2"> <RiPriceTagLine color={'white'} /></span>
            <span className="w-2/4 lg:w-2/4 flex text-center text-xs text-white ">Lorem ipsum</span>
        </div>


    </div>
</div>


{/* start container 1 */}

{(true1)?


<div className="grid lg:grid-cols-2  grid-cols-1 grid-rows-auto w-full gap-4 lg:mt-10 px-2  mt-10 lg:px-36 " >

<div className="flex justify-center flex-column px-4 lg:mb-20  " style={{background:'rgba(13, 13, 13, 0.5)',flexDirection:'column',height:redsize}} >
      <div className="grid grid-cols-2 w-full py-4"  onClick={()=>accordion()}>
         <div className="flex justify-start align-middle">
             <div className="flex justify-center align-middle pt-1"><RiApps2Line  className="text-white"></RiApps2Line></div>
            <span className="text-md text-white text-bg px-2  text-bold">Lorem ipsum</span>
         </div>
         <div  className="flex justify-end  align-middle pt-1 "><RiArrowDownSLine className="text-white"></RiArrowDownSLine></div>            
     </div>

    <div className="w-full mb-10 "   style={{display:show}}>
        <div className="w-full text-left py-5 text-xs text-white leading-2  lg:pr-12 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

       </div>
      <div className="">

<div className="lg:w-3/4 grid grid-cols-2 grid-rows-2 gap-4 mt-5">
 
      <div    style={{display:'flex',flexDirection:'row'}}>
          <div className=""><RiExternalLinkFill className="text-white "></RiExternalLinkFill></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum.com</div>

      </div>
  

  <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaDiscord className="text-white "></FaDiscord></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>

      <div  style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaInstagram className="text-white "></FaInstagram></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaTwitter className="text-white "></FaTwitter></div>
          <div className="mx-2 text-white text-xs">Lorem ipsum</div>

      </div>


</div>


     </div>
      


    </div>
  </div>






<div  className="px-4 h-[350px]  transition-all " style={{background:'rgba(13, 13, 13, 0.5)',flexDirection:'column',height:redsize2}}>
<div className="flex justify-between py-4"  onClick={()=>accordion2()}>
         <div className="flex align-middle justiy-center">
             <div className="flex items-center"><RiApps2Line  className="text-white"></RiApps2Line></div>
            <span className="flex items-center text-white mx-2">Lorem ipsum</span>
            <div className="flex items-center"><RiQuestionLine  className="text-white"></RiQuestionLine></div>
            
         </div>
         <div  className=""><RiArrowDownSLine className="text-white"></RiArrowDownSLine></div>            
     </div>

  <div className=" overflow-auto  lg:scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-900  lg:pr-5" style={{height:second}}>

      <div className=" grid grid-cols-3 grid-rows-auto gap-2 px-2"  >

          <div className=" rounded flex-col  flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600 " style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs ">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col  flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600 " style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs ">Arms</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">15%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Background</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">2%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Eye</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">32%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Glasses</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">3%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600 " style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Hair & Hats</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">2%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Head</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">92%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Legs & Cloths</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">2%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Mouth</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">46%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>





   </div>



 </div>
</div>


<div className={"text-white lg:grid lg:col-span-1 lg:col-end-3 px-4"} style={{background:'rgba(13, 13, 13, 0.5)',height:redsize3}}>
<div className="flex justify-between py-4"  onClick={()=>accordion3()}>
         <div className="flex align-middle justiy-center">
             <div className="flex items-center"><RiApps2Line  className="text-white"></RiApps2Line></div>
            <span className="flex items-center text-white mx-2">Lorem ipsum</span>

         </div>
         <div  className=""><RiArrowDownSLine className="text-white"></RiArrowDownSLine></div>            
     </div>




     <div className="w-full mb-10 transition-all"   style={{display:show3}}>
        <div className="w-full text-left py-5 text-xs text-white leading-2  lg:pr-12 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

       </div>
      <div className="">

<div className="lg:w-3/4 grid grid-cols-2 grid-rows-2 gap-4 mt-5">
 
      <div    style={{display:'flex',flexDirection:'row'}}>
          <div className=""><RiExternalLinkFill className="text-white "></RiExternalLinkFill></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum.com</div>

      </div>
  

  <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaDiscord className="text-white "></FaDiscord></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>

      <div  style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaInstagram className="text-white "></FaInstagram></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaTwitter className="text-white "></FaTwitter></div>
          <div className="mx-2 text-white text-xs">Lorem ipsum</div>

      </div>


</div>


     </div>
      


    </div>

</div> 


</div>

:

" "


}








{/* end container  1 */}










{/* start container 2 */}

{(true2)?


<div className="grid lg:grid-cols-2  grid-cols-1 grid-rows-auto w-full gap-4 lg:mt-10 px-2  mt-10 lg:px-36 " >

<div className="flex justify-center flex-column px-4 lg:mb-20  " style={{background:'rgba(13, 13, 13, 0.5)',flexDirection:'column',height:redsize}} >
      <div className="grid grid-cols-2 w-full py-4"  onClick={()=>accordion()}>
         <div className="flex justify-start align-middle">
             <div className="flex justify-center align-middle pt-1"><RiApps2Line  className="text-white"></RiApps2Line></div>
            <span className="text-md text-white text-bg px-2  text-bold">Lorem ipsum</span>
         </div>
         <div  className="flex justify-end  align-middle pt-1 "><RiArrowDownSLine className="text-white"></RiArrowDownSLine></div>            
     </div>

    <div className="w-full mb-10 "   style={{display:show}}>
        <div className="w-full text-left py-5 text-xs text-white leading-2  lg:pr-12 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

       </div>
      <div className="">

<div className="lg:w-3/4 grid grid-cols-2 grid-rows-2 gap-4 mt-5">
 
      <div    style={{display:'flex',flexDirection:'row'}}>
          <div className=""><RiExternalLinkFill className="text-white "></RiExternalLinkFill></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum.com</div>

      </div>
  

  <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaDiscord className="text-white "></FaDiscord></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>

      <div  style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaInstagram className="text-white "></FaInstagram></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaTwitter className="text-white "></FaTwitter></div>
          <div className="mx-2 text-white text-xs">Lorem ipsum</div>

      </div>


</div>


     </div>
      


    </div>
  </div>






<div  className="px-4 h-[350px]  transition-all " style={{background:'rgba(13, 13, 13, 0.5)',flexDirection:'column',height:redsize2}}>
<div className="flex justify-between py-4"  onClick={()=>accordion2()}>
         <div className="flex align-middle justiy-center">
             <div className="flex items-center"><RiApps2Line  className="text-white"></RiApps2Line></div>
            <span className="flex items-center text-white mx-2">Lorem ipsum</span>
            <div className="flex items-center"><RiQuestionLine  className="text-white"></RiQuestionLine></div>
            
         </div>
         <div  className=""><RiArrowDownSLine className="text-white"></RiArrowDownSLine></div>            
     </div>

  <div className=" overflow-auto  lg:scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-900  lg:pr-5" style={{height:second}}>

      <div className=" grid grid-cols-3 grid-rows-auto gap-2 px-2"  >

          <div className=" rounded flex-col  flex items-center justify-center py-2 lg:px-4   hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs ">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col  flex items-center justify-center py-2 lg:px-4   hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs ">Arms</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">15%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Background</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">2%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Eye</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">32%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Glasses</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">3%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Hair & Hats</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">2%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Head</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">92%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Legs & Cloths</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">2%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Mouth</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">46%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600 " style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4   hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4   hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>





   </div>



 </div>
</div>


<div className={"text-white lg:grid lg:col-span-1 lg:col-end-3 px-4"} style={{background:'rgba(13, 13, 13, 0.5)',height:redsize3}}>
<div className="flex justify-between py-4 "  onClick={()=>accordion3()}>
         <div className="flex align-middle justiy-center">
             <div className="flex items-center"><RiApps2Line  className="text-white"></RiApps2Line></div>
            <span className="flex items-center text-white mx-2">Lorem ipsum</span>

         </div>
         <div  className=""><RiArrowDownSLine className="text-white"></RiArrowDownSLine></div>            
     </div>




     <div className="w-full mb-10 transition-all"   style={{display:show3}}>
        <div className="w-full text-left py-5 text-xs text-white leading-2  lg:pr-12 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

       </div>
      <div className="">

<div className="lg:w-3/4 grid grid-cols-2 grid-rows-2 gap-4 mt-5">
 
      <div    style={{display:'flex',flexDirection:'row'}}>
          <div className=""><RiExternalLinkFill className="text-white "></RiExternalLinkFill></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum.com</div>

      </div>
  

  <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaDiscord className="text-white "></FaDiscord></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>

      <div  style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaInstagram className="text-white "></FaInstagram></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaTwitter className="text-white "></FaTwitter></div>
          <div className="mx-2 text-white text-xs">Lorem ipsum</div>

      </div>


</div>


     </div>
      


    </div>

</div> 


</div>

:

" "


}








{/* end container 2 */}



{/* start container 3 */}

{(true3)?


<div className="grid lg:grid-cols-2  grid-cols-1 grid-rows-auto w-full gap-4 lg:mt-10 px-2  mt-10 lg:px-36 " >

<div className="flex justify-center flex-column px-4 lg:mb-20  " style={{background:'rgba(13, 13, 13, 0.5)',flexDirection:'column',height:redsize}} >
      <div className="grid grid-cols-2 w-full py-4"  onClick={()=>accordion()}>
         <div className="flex justify-start align-middle">
             <div className="flex justify-center align-middle pt-1"><RiApps2Line  className="text-white"></RiApps2Line></div>
            <span className="text-md text-white text-bg px-2  text-bold">Lorem ipsum</span>
         </div>
         <div  className="flex justify-end  align-middle pt-1 "><RiArrowDownSLine className="text-white"></RiArrowDownSLine></div>            
     </div>

    <div className="w-full mb-10 "   style={{display:show}}>
        <div className="w-full text-left py-5 text-xs text-white leading-2  lg:pr-12 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

       </div>
      <div className="">

<div className="lg:w-3/4 grid grid-cols-2 grid-rows-2 gap-4 mt-5">
 
      <div    style={{display:'flex',flexDirection:'row'}}>
          <div className=""><RiExternalLinkFill className="text-white "></RiExternalLinkFill></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum.com</div>

      </div>
  

  <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaDiscord className="text-white "></FaDiscord></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>

      <div  style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaInstagram className="text-white "></FaInstagram></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaTwitter className="text-white "></FaTwitter></div>
          <div className="mx-2 text-white text-xs">Lorem ipsum</div>

      </div>


</div>


     </div>
      


    </div>
  </div>






<div  className="px-4 h-[350px]  transition-all " style={{background:'rgba(13, 13, 13, 0.5)',flexDirection:'column',height:redsize2}}>
<div className="flex justify-between py-4"  onClick={()=>accordion2()}>
         <div className="flex align-middle justiy-center">
             <div className="flex items-center"><RiApps2Line  className="text-white"></RiApps2Line></div>
            <span className="flex items-center text-white mx-2">Lorem ipsum</span>
            <div className="flex items-center"><RiQuestionLine  className="text-white"></RiQuestionLine></div>
            
         </div>
         <div  className=""><RiArrowDownSLine className="text-white"></RiArrowDownSLine></div>            
     </div>

  <div className=" overflow-auto  lg:scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-900  lg:pr-5" style={{height:second}}>

      <div className=" grid grid-cols-3 grid-rows-auto gap-2 px-2"  >

          <div className=" rounded flex-col  flex items-center justify-center py-2 lg:px-4   hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs ">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col  flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600 " style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs ">Arms</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">15%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Background</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">2%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Eye</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">32%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Glasses</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">3%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4   hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Hair & Hats</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">2%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Head</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold ">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">92%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Legs & Cloths</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">2%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Mouth</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">46%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white  text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4   hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600 " style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>
          <div className="rounded flex-col flex items-center justify-center py-2 lg:px-4  hover:border-solid hover:border-2 hover:border-red-600" style={{backgroundColor:'#0D0D0D',aspectRatio:2/1}}>
              <span  className="lg:text-sm text-gray-400 font-thin text-xs">Accessories & Ears</span>
              <span  className="text-sm text-white text-bold lg:text-lg font-bold">Lorem ipsum</span>
              <span  className="text-sm text-gray-400 font-thin">9%</span>

          </div>





   </div>



 </div>
</div>


<div className={"text-white lg:grid lg:col-span-1 lg:col-end-3 px-4"} style={{background:'rgba(13, 13, 13, 0.5)',height:redsize3}}>
<div className="flex justify-between py-4"  onClick={()=>accordion3()}>
         <div className="flex align-middle justiy-center">
             <div className="flex items-center"><RiApps2Line  className="text-white"></RiApps2Line></div>
            <span className="flex items-center text-white mx-2">Lorem ipsum</span>

         </div>
         <div  className=""><RiArrowDownSLine className="text-white"></RiArrowDownSLine></div>            
     </div>




     <div className="w-full mb-10 transition-all"   style={{display:show3}}>
        <div className="w-full text-left py-5 text-xs text-white leading-2  lg:pr-12 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

       </div>
      <div className="">

<div className="lg:w-3/4 grid grid-cols-2 grid-rows-2 gap-4 mt-5">
 
      <div    style={{display:'flex',flexDirection:'row'}}>
          <div className=""><RiExternalLinkFill className="text-white "></RiExternalLinkFill></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum.com</div>

      </div>
  

  <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaDiscord className="text-white "></FaDiscord></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>

      <div  style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaInstagram className="text-white "></FaInstagram></div>
          <div className="mx-2 text-red-500 text-xs">Lorem ipsum</div>

      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
          <div className=""><FaTwitter className="text-white "></FaTwitter></div>
          <div className="mx-2 text-white text-xs">Lorem ipsum</div>

      </div>


</div>


     </div>
      


    </div>

</div> 


</div>

:

" "


}








{/* end container  3*/}





















































<div className="h-36 mt-10 flex justify-center items-center" style={{backgroundColor:'#0D0D0D'}}>

<div className="">
<Image
       className="object-contain md:ml-5 w-3"
         src={'./img/image3.png'}
         width={190}
         height={80}
         alt="footer-holder"
       />
       
</div>



</div>
 

















</div>









    </header>
  )
}

export default Header
