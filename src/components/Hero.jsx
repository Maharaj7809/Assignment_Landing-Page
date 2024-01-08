import React from 'react';
import { heroImg } from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
  
    <div className='w-full bg-white py-24'  >
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0' style={{display:'flex' ,textAlign:'center',marginLeft:'200px',marginRight:'200px'}}>
            
            <div className='flex flex-col  gap-4'  >
                <div >
                
                <p className='py-2 text-2xl text-[#20B486] font-medium'>Seamless Experiance</p>
                <h2 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>
                    Unleashing the Next Generation of Card Solutions </h2>
                <p className='py-2 text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>

                </div>
               <div style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
                <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='What do want to learn?'
                    />
                    <button>
                        <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}

                        />

                    </button>
                </form>
                </div>
            </div>
            
           



        </div>
        
        </div>
    
  )
}

export default Hero