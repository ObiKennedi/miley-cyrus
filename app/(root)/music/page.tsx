import Link from "next/link"
import Image from "next/image"
import "./globals.scss"

const Music = () => {
    return (
        <main className="music">
            <h3>Miley Cyrus</h3>
            <div>
                <Link href={'https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6?si=colQqY-oQECxY3riiSiUaQ'}>
                    <div>
                        <Image
                            src={'/icons/spotify.png'}
                            width={30}
                            height={30}
                            alt="spotify"
                        />
                        <span>Spotify</span>
                    </div>
                </Link>
                <Link href={'https://music.apple.com/us/artist/miley-cyrus/137057909'}>
                    <div>
                        <Image
                            src={'/icons/apple music.png'}
                            width={30}
                            height={30}
                            alt="apple music"
                        />
                        <span>Apple Music</span>
                    </div>
                </Link>
                <Link href={'https://music.youtube.com/channel/UCREdEwBdZcnQLIT0ThaAtmQ?si=PxgTpS0ucSGlG0Lb'}>
                    <div>
                        <Image
                            src={'/icons/youtube music.png'}
                            width={30}
                            height={30}
                            alt="YouTube Music"
                        />
                        <span>YouTube Music</span>
                    </div>
                </Link>
                <Link href={'https://audiomack.com/mileycyrus'}>
                    <div>
                        <Image
                            src={'/icons/audiomack.png'}
                            width={30}
                            height={30}
                            alt="audiomack"
                        />
                        <span>Audiomack</span>
                    </div>
                </Link>
                <Link href={'https://www.youtube.com/channel/UCn7dB9UMTBDjKtEKBy_XISw'}>
                    <div>
                        <Image
                            src={'/icons/youtube (2).png'}
                            width={30}
                            height={30}
                            alt="youtube"
                        />
                        <span>Youtube</span>
                    </div>
                </Link>
            </div>
        </main>
    )
}

export default Music