'use client'

import React, { useState } from "react";
import './globals.scss'
import Link from "next/link";
import Image from "next/image";

const Header = () => {

    const [menu, setMenu] = useState(false);
    const toggle = () => {
        setMenu(!menu)
    }

    return (
        <header>
            <Link href={'/'}>
                <Image
                    src={'/icons/logo.png'}
                    width={70}
                    height={70}
                    alt="logo"
                />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/music'}>Music</Link>
                    </li>
                    <li>
                        <Link href={'/support'}>Support</Link>
                    </li>
                    <li>
                        <Link href={'/foundation'}>Foundation</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <button onClick={toggle}>
                <Image
                    src={'/icons/menu.png'}
                    width={40}
                    height={40}
                    alt="menu"
                />
            </button>
            {
                menu && (
                    <nav className="mobile-nav">
                        <ul>
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/music'}>Music</Link>
                            </li>
                            <li>
                                <Link href={'/support'}>Support</Link>
                            </li>
                            <li>
                                <Link href={'/foundation'}>Foundation</Link>
                            </li>
                            <li>
                                <Link href={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </header>
    )
}

export default Header