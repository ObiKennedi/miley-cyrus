/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import "./globals.scss"

const Contact = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch("https://getform.io/f/bqokegmb", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                router.push("/");
                alert("Your application is being processed, you will recieve an email from our team")
            } else {
                setError("Submission failed. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="contact">
            <Image src="/icons/contact.jpeg" width={1000} height={1000} alt="background" />
            <div>
                <p>Feel free to send a message and you get a response within 24hrs</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input type="text" name="firstName" required />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" name="lastName" required />
                    </div>
                    <div>
                        <label htmlFor="mobileNumber">Mobile number</label>
                        <input type="tel" name="mobileNumber" required />
                    </div>
                    <div>
                        <label htmlFor="emailAddress">Email address</label>
                        <input type="text" name="emailAddress" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send your message"}
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Contact