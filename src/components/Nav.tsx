'use client'
import Image from "next/image";
import logo from '../../public/photo.png'
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
function Nav() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e:any) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Input value submitted:', inputValue);
    };
    return (
        <div className='h-22 w-full flex flex-row justify-between items-center'>
            <Image
                src={logo}
                width={70}
                height={70}
                alt=""
                className=" object-cover"
            />

            <input type="text" name="search" value={inputValue} onChange={handleChange} onSubmit={handleSubmit} className='text-black py-1.5 mr-2 rounded-lg'/>

            <FaUser className='text-black text-2xl'/>
            <p className='text-black'> hello </p>
        </div>
    );
}

export default Nav;