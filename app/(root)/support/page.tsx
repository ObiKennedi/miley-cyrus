"use client"

import Image from "next/image"
import "./globals.scss"
import Form from "@/component/form"
import { useState } from "react"

const Support = () => {

    const [createForm, setCreateForm] = useState(false)
    const appear = () => {
        setCreateForm(!createForm);
    }

    return (
        <main className="support">
            <Image
                src="/icons/background.jpg"
                width={1000}
                height={1000}
                alt="background"
            />
            {
                !createForm && (
                    <div className="write-up">
                        <div>
                            <p>Officially register to become a member of our supporters group.</p>
                            <p>The Happy Smiley supporters group, showing love and support to our favorite artist, Miley Cyrus.</p>
                            <p>An official registration goes to create between us a community where we can share our feelings, and interact together on the 1 thing that binds us.</p>
                            <p> The love for Miley and her art.</p>
                        </div>
                        <div>
                            <h2>Registration comes with incentives like:</h2>
                            <ul>
                                <li>The ability to schedule and meet with Miley.</li>
                                <li>Access to firsthand news and updates on the progress and activities of Miley Cyrus.
                                </li>
                                <li>Discounted prices for merchandise and tickets to shows and events by Miley.</li>
                                <li>The security of being easily identifiable by the community.</li>
                            </ul>
                        </div>
                        <button onClick={appear}>REGISTER</button>
                    </div>
                )
            }
            {
                createForm && (
                    <div className="form-div">
                        <button onClick={appear}>X</button>
                        <Form/>
                    </div>
                )
            }
        </main>
    )
}

export default Support