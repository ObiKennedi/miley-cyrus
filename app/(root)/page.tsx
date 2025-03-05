import React from "react";
import Image from "next/image";
import Link from "next/link";
import './globals.scss'

const Home = () => {
    return (
        <main className="home">
            <div>
                <div>
                    <h1>Miley Cyrus:  Where sound and vision collide.</h1>
                    <div>This is where my music comes to life, where my stories are told, and where I connect with all of you.  Explore the sounds, the visuals, and the moments that make me who I am.  Thank you for being a part of this journey.  Let&apos;s create something unforgettable together.</div>
                    <Link href={'/music'}>
                        <button>Explore my world</button>
                    </Link>
                </div>
                <div>
                    <div>
                        <div>
                            <h4>200M+ Followers on Instagram</h4>
                            <p>Miley Cyrus: Connecting with millions. Join her ever-growing Instagram community for exclusive content, behind-the-scenes glimpses, and more.</p>
                        </div>
                        <div>
                            <h4>19M+ Subscribers on Youtube</h4>
                            <p>With 19 million subscribers and counting, Miley Cyrus&apos;s YouTube channel is the ultimate destination for her music, from official videos to live performances.</p>
                        </div>
                    </div>
                    <div>
                        <h4>Miley Cyrus</h4>
                        <p> Destiny Hope Cyrus later to be known as Miley Ray Cyrus was born in  November 23, 1992 to the Popster Billy Ray Cyrus, is a pop icon, singer and actress. She&apos;s regarded as a symbol of freedom and female empowerment, it is without doubt she&apos;s not just an amazing singer but a beacon female emancipation.</p>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src={'/icons/hero.png'}
                    width={300}
                    height={300}
                    alt="hero"
                />
            </div>
        </main>
    )
};

export default Home