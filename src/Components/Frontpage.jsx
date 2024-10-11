import img1 from "../Assets/01.png";   // Images imported
import img2 from "../Assets/02.png";
import img3 from "../Assets/03.png";
import img4 from "../Assets/04.png";
import imgbg from "../Assets/bg.jpg";

import { ReactTyped } from 'react-typed';  //FOR TYPING ANIMATION
import { FaSearch } from 'react-icons/fa';  // FOR ICONS
import { FaRegHeart } from 'react-icons/fa';

import 'font-awesome/css/font-awesome.min.css';  //FOR WHATSAPP ICON




export default function Frontpage(){
    return(
        <>
                <div className="overlay"></div>   {/* FOR BACKGROUND SHADOW*/ }

                {/*---------------------  NAV BAR --------------------------------*/}

        <div className="absolute flex w-full justify-evenly items-center pt-[26px] border-b-2 border-[grey] ">

            <img className="w-[10%] " src={img1} alt="" />
            <div className=" mr-40">
                <ul className="flex space-x-8 w-full justify-center font-Montserrat text-white ">
                    <li className="border-b-4 border-[#2A71e1] text-[14px] font-bold cursor-pointer hover:border-b-[#2A71E1] h-[40px]  hover:text-[#20A9CC]">HOME</li>
                    <li className="hover:border-b-4 text-[14px] font-bold cursor-pointer hover:border-b-[#2A71E1] h-[40px]   hover:text-[#20A9CC]">ABOUT US</li>
                    <li className="relative group">
                <div className="hover:border-b-4 text-[14px] font-bold cursor-pointer hover:border-b-[#2A71E1] h-[40px] hover:text-[#20A9CC]">
                    CERTIFICATIONS
                </div>                  {/*DROP DOWN*/}
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded">
                    <li className="p-2 text-black cursor-pointer hover:bg-gray-300 text-[15px]">Onsite Courses</li>
                </ul>
            </li>                    
                    <li className="relative group">
                <div className="hover:border-b-4 text-[14px] font-bold cursor-pointer hover:border-b-[#2A71E1] h-[40px] hover:text-[#20A9CC]">
                    CARRERS
                </div>
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded hover:text-[#20A9CC]">
                    <li className="p-2 text-black cursor-pointer hover:bg-gray-300 text-[15px]">Internships</li>
                    <li className="p-2 text-black cursor-pointer hover:bg-gray-300 text-[15px]">Job Opportunities</li>
                </ul>
            </li>                    
                    <li className="hover:border-b-4 text-[14px] font-bold cursor-pointer hover:border-b-[#2A71E1] h-[40px]   hover:text-[#20A9CC]">SEMINARS</li>
                    <li className="hover:border-b-4 text-[14px] font-bold cursor-pointer hover:border-b-[#2A71E1] h-[40px]   hover:text-[#20A9CC]">TECH BLOGS</li>
                    <li className="hover:border-b-4 text-[14px] font-bold cursor-pointer hover:border-b-[#2A71E1] h-[40px]   hover:text-[#20A9CC]">IPORTAL LOGIN</li>
                     <li className="flex border-l-[1px] border-[grey] ml-5 pl-5 text-xl space-x-1 ">  {/* FOR ICONS*/}
                        <FaRegHeart className="hover:bg-green-500 rounded-full " style={{width: "40px", height: "37px", padding: "10px" }} />
                        <FaSearch className="hover:bg-[#3275DB]" style={{ border: "3px solid white", color: "white", width: "40px", height: "40px", padding: "10px" }} />
                     </li>
                </ul>
            </div>
        </div>
 {/*------------------------------------------------------  HERO HEADINGS --------------------------------------------------*/}

        <div id="container" className="absolute top-[30%] left-[25%] w-[55%] h-auto ">
            <h1 className="text-[47px] font-Montserrat text-white font-extrabold">
                Learn the fundamentals with our <h1 className="ml-16"> Experts in{' '} 
                <span className="text-[#00CBFF] text-[55px] font-bold">
                      {/*------------------------ANIMATED TYPING----------------------------------*/}
                    <ReactTyped
                        strings={['Web Design', 'Marketing', 'Social Skills','Programming']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />             
                </span>
                </h1>
            </h1>
            <h2 className="text-3xl font-normal text-white font-Montserrat ml-20 mt-5">Utilize Efefctive Learning to Reach Your Potential!</h2>
            <div className="relative  w-[50%] ml-40 mt-10">
                <input
                  className=" w-full rounded-lg p-5 border border-white focus:border-white focus:outline-none"
                  placeholder="Search courses..."
                  type="search"
                  name="search"
                  id=""
                />
                <FaSearch className="text-[grey] w-5 h-5 absolute right-4 top-6 hover:text-black cursor-pointer" />
             </div>     
             <p className="text-[19px] text-white ml-[25%] mt-5 font-Montserrat">Explore our more useful products 🤍</p>
             
             
          <div className="w-full flex justify-center space-x-5 h-[45px] mt-5"> 
            <img className="h-full"  src={img2} alt="" />
           <img className="h-full"  src={img4} alt="" />
           <img className="h-full"  src={img3} alt="" />
           </div>
        </div>
 {/*------------------------------------------- WHATSAPP ICON --------------------------------*/}       
       <div className="absolute left-8 bottom-8 flex  w-[18%] items-center">
       <i
         className="fa fa-whatsapp bg-[#356AC6]"
         aria-hidden="true"
         style={{
        width: '60px',     
        height: '60px',      
        fontSize: '40px',     
        color: '#FFFFFF',
        display: 'flex',      
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '50%',  
          }}
        >
        </i>
        <span className="bg-white font-Montserrat flex w-[80%] rounded-md ml-2 p-2 text-[12px]">Need Help? <p className="font-semibold ml-1">Chat with us</p></span>
       </div>

{/*--------------------------------BACKGROUND IMAGE----------------------------------*/}
        <img className="h-screen w-full" src={imgbg} alt="bgimg"  style={{
                objectFit: 'cover',  
                display: 'block',}} /> 
          
        </>
    )
}

