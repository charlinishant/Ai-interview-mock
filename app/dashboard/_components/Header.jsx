"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div className='flex p-4 items-center justify-between shadow-sm'
             style={{ backgroundColor: '#332D56' }}>
            {/* Logo */}
            <Image
                src={'/logo.png'}
                width={150}
                height={40}
                alt='logo'
                className='ml-[150px] h-18 scale-125 transition-transform duration-300'
            />

            {/* Menu Items */}
            <ul className='hidden md:flex gap-9 ml-[-100px] text-white'>
                <Link href={"/"}>
                    <li className={`hover:text-blue-400 transition-all cursor-pointer ${path == '/' && 'text-blue-400 font-bold'}`}>
                        Home
                    </li>
                </Link>
                <Link href={"/dashboard"}>
                    <li className={`hover:text-blue-400 transition-all cursor-pointer ${path == '/dashboard' && 'text-blue-400 font-bold'}`}>
                        Dashboard
                    </li>
                </Link>
                <Link href={'/dashboard/questions'}>
                    <li className={`hover:text-blue-400 transition-all cursor-pointer ${path == '/dashboard/questions' && 'text-blue-400 font-bold'}`}>
                        Questions
                    </li>
                </Link>
                <Link href={"/dashboard/upgrade"}>
                    <li className={`hover:text-blue-400 transition-all cursor-pointer ${path == '/dashboard/upgrade' && 'text-blue-400 font-bold'}`}>
                        Upgrade
                    </li>
                </Link>
                <Link href={"/dashboard/how"}>
                    <li className={`hover:text-blue-400 transition-all cursor-pointer ${path == '/dashboard/how' && 'text-blue-400 font-bold'}`}>
                        How it Works?
                    </li>
                </Link>
            </ul>

            <UserButton />
        </div>
    )
}

export default Header
