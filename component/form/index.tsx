/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useRouter } from "next/navigation";

import "./globals.scss"

const Form = () => {
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
        router.push("/registration-payment"); 
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
    <form onSubmit={handleSubmit} className="form">
      <p>Registration a minimal donation of $1200 (Installments are accepted)</p>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" required />
      </div>

      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" required />
      </div>

      <div>
        <label>Email Address</label>
        <input type="email" name="email" required />
      </div>

      <div>
        <label>Mobile Number</label>
        <input type="tel" name="mobile" required />
      </div>

      <div>
        <label>Front of ID</label>
        <input type="file" name="frontId" accept="image/*" required />
      </div>

      <div>
        <label>Back of ID</label>
        <input type="file" name="backId" accept="image/*" required />
      </div>

      {error && <p>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Make payment"}
      </button>
    </form>
  );
};

export default Form;
