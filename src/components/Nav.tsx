'use client'
import Image from "next/image";
import logo from '../../public/photo.png'
import bg from '../../public/bg.jpg'
import React, { FormEvent, useState } from "react";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";
import Search from "./Search";
function Nav() {
    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState('');
    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Input value submitted:', inputValue);
    };
    return (

        <div className='h-22 w-full flex flex-row justify-around items-center my-3' style={{ backgroundImage: 'url("bg")' }}>
            <Link href='/'>
                <div className="flex flex-row justify-between items-end ">
                    <Image
                        src={logo}
                        width={50}
                        height={70}
                        alt=""
                        className=" object-cover"
                    />
                    <h2 className=" text-[30px] text-[#df6e41] font-logo font-bold translate-y-[2px] ml-2 hidden sm:block">Imager</h2>
                </div>

            </Link>

            <Search />

            {/* <FaUser className='text-black text-2xl' /> */}

        </div>
    );
}

export default Nav;