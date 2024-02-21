'use client'

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
function Search() {
    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleChange = (e: any) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/results/${search}`)
        setSearch('')
    };
    return (
        <div>
            <form className="flex justify-center md:justify-between" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name=""
                    id=""
                    className=" border-2 border-black rounded-lg py-1 px-1.5 w-[260px] sm: w-60 "
                    onChange={handleChange}
                    value={search}
                    placeholder="search"
                />
            </form>
        </div>
    );
}

export default Search;