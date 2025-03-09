import Image from "next/image"
import Link from "next/link"

import "./globals.scss"

const Foundation = () => {
    return (
        <main className="foundation">
            <Image
                src={'/icons/foundation.jpeg'}
                width={1000}
                height={1000}
                alt="foundation"
            />
            <div>
                <div>
                    <h2>Thank you for your interest in supporting our charity organization.</h2>
                    <p>The Happy Smiley Organization is deeply appreciative of your willingness to learn more about our mission and the children we care for. Below, you will find detailed information about each of our orphanages.</p>
                </div>
                <div>
                    <h3>Orphanage Information</h3>
                    <div>
                        <h4>Tokologo Self Help Centre</h4>
                        <div>
                            <p>Location: 20 Milkplum St, Protea Glen, Soweto, 1819, South Africa</p>
                            <p>Capacity: 46 children</p>
                            <p>Programs: Home, Education, healthcare, vocational training, etc.</p>
                        </div>
                    </div>
                    <div>
                        <h4>Tilinanu Orphanage (A.H.P)</h4>
                        <div>
                            <p>Location: 3PHR+VFH, S122, Lilongwe, Malawi</p>
                            <p>Capacity: 52 children</p>
                            <p>Programs: Home Education, healthcare, vocational training, etc.</p>
                        </div>
                    </div>
                    <div>
                        <h4>Kimisigara Orphanage</h4>
                        <div>
                            <p>Location: W8VM+FVX, Uwanse St, Efut Abua, Calabar 540281, Cross River, Nigeria</p>
                            <p>Capacity: 52 children</p>
                            <p>Programs: Home Education, healthcare, vocational training, etc.</p>
                        </div>
                    </div>
                    <div>
                        <h4>Motherless Babies Home</h4>
                        <div>
                            <p>Location: W8VM+FVX, Uwanse St, Efut Abua, Calabar 540281, Cross River, Nigeria</p>
                            <p>Capacity: 29</p>
                            <p>Programs: Home Education, healthcare, vocational training, etc.</p>
                        </div>
                    </div>
                </div>
                <p>Furthermore, we organize youth programs in sections around the year, detailing to about 7 times a year. These programs include agendas that help improve youths and ensure that we shift and tilt the numbers of our young ones who are making way morally and in flying colors in the society.</p>
                <div>
                    <h4>Our Mission</h4>
                    <p>Our mission is to provide a safe, nurturing, and supportive environment for orphaned and vulnerable children. We aim to ensure that every child has access to education, healthcare, and opportunities for personal development. Each of our orphanages is staffed with dedicated professionals and volunteers committed to the well-being and growth of the children.</p>
                </div>
                <div>
                    <h4>How You Can Help</h4>
                    <p>Your support can make a significant impact on the lives of these children. There are several ways you can contribute:</p>
                </div>
                <div>
                    <ul>
                        <li>Donations: Provide funds for infrastructure improvements, educational materials, and healthcare.</li>
                        <li>Sponsorship Programs: Sponsor a child,  Become an official sponsor of the Happy Smiley Group. (And receive incentives and profits as we go along this great journey together)</li>
                        <li>Sponsorship Programs: Sponsor a child,  Become an official sponsor of the Happy Smiley Group. (And receive incentives and profits as we go along this great journey together)</li>
                        <li>Volunteer Opportunities: Offer your time and skills to assist in various programs.</li>
                        <li>Sponsorship Programs: Sponsor a child,  Become an official sponsor of the Happy Smiley Group. (And receive incentives and profits as we go along this great journey together)</li>
                    </ul>
                    <Link href={'/registration-payment'}>
                        <button>Make Donation</button>
                    </Link>
                </div>
                <div>
                    <p>We are more than happy to provide further details or answer any questions you may have. Please feel free to : <Link href={"/contact"}>Contact us</Link></p>
                    <p>Thank you once again for considering supporting our orphanages. Your generosity can bring hope and opportunity to countless children and young ones and youths in need.</p>
                    <p>Best regards from Miley and the Smiley face</p>
                </div>
            </div>
        </main>
    )
}

export default Foundation