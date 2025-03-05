import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.scss"

const Footer = () => {
    return (
        <footer>
            <Link href={''}>
                <Image
                    src={'/icons/facebook.png'}
                    width={50}
                    height={50}
                    alt="facebook"
                />
            </Link>
            <Link href={''}>
                <Image
                    src={'/icons/instagram.png'}
                    width={50}
                    height={50}
                    alt="facebook"
                />
            </Link>
            <Link href={''}>
                <Image
                    src={'/icons/youtube.png'}
                    width={50}
                    height={50}
                    alt="facebook"
                />
            </Link>
        </footer>
    )
}

export default Footer