'use client'
import Image from "next/image";
import logo from '../../public/photo.png'
import { FormEvent, useState } from "react";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";
import Search from "./Search";
function Nav() {
    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState('');
    const handleChange = (e:any) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Input value submitted:', inputValue);
    };
    return (
        
        <div className='h-22 w-full flex flex-row justify-evenly items-center'>
            <Image
                src={logo}
                width={70}
                height={70}
                alt=""
                className=" object-cover"
            />

            <Search/>

            <FaUser className='text-black text-2xl'/>
            
        </div>
    );
}

export default Nav;