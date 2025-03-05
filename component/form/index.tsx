"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.scss";

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        mobileNumber: "",
    });

    const router = useRouter();

    const [frontOfId, setFrontOfId] = useState<File | null>(null);
    const [backOfId, setBackOfId] = useState<File | null>(null);
    const [status, setStatus] = useState<string>("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.emailAddress.trim()) {
            newErrors.emailAddress = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
            newErrors.emailAddress = "Email is invalid";
        }
        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = "Mobile number is required";
        } else if (!/^\+?[\d\s-]{9,}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = "Invalid phone number format";
        }
        if (!frontOfId) newErrors.frontOfId = "Front of ID is required";
        if (!backOfId) newErrors.backOfId = "Back of ID is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFile: React.Dispatch<React.SetStateAction<File | null>>
    ) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > 5 * 1024 * 1024) {
                setErrors({ ...errors, [e.target.name]: "File size must be less than 5MB" });
                return;
            }
            setFile(file);
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("");
    
        if (!validateForm()) {
            setStatus("Please fix the errors in the form");
            return;
        }
    
        setIsSubmitting(true);
    
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("firstName", formData.firstName);
            formDataToSend.append("lastName", formData.lastName);
            formDataToSend.append("emailAddress", formData.emailAddress);
            formDataToSend.append("mobileNumber", formData.mobileNumber);
            if (frontOfId) formDataToSend.append("frontOfId", frontOfId);
            if (backOfId) formDataToSend.append("backOfId", backOfId);
    
            const response = await fetch("http://localhost/api.php", {
                method: "POST",
                body: formDataToSend,
            });
    
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                const text = await response.text();
                throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}...`);
            }
    
            const result = await response.json();
    
            if (!response.ok) {
                throw new Error(result.message || `HTTP error! status: ${response.status}`);
            }
    
            if (result.success) {
                setStatus("Form submitted successfully!");
                setFormData({ firstName: "", lastName: "", emailAddress: "", mobileNumber: "" });
                setFrontOfId(null);
                setBackOfId(null);
                router.push("/success-page");  
            } else {
                setStatus(result.message || "Submission failed");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus(
                error instanceof Error 
                    ? `Submission error: ${error.message}`
                    : "An error occurred while submitting the form. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };
    

    // Same JSX as before, just keeping it concise here
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Supporters Registration requires a minimum donation of $1200 (Installments are allowed)</h2>
            
            <div>
                <label>First name</label>
                <input type="text" name="firstName" placeholder="John" value={formData.firstName}
                    onChange={handleChange} required />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            <div>
                <label>Last name</label>
                <input type="text" name="lastName" placeholder="Doe" value={formData.lastName}
                    onChange={handleChange} required />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

            <div>
                <label>Email Address</label>
                <input type="email" name="emailAddress" placeholder="johndoe@example.com" 
                    value={formData.emailAddress} onChange={handleChange} required />
                {errors.emailAddress && <p className="error">{errors.emailAddress}</p>}
            </div>

            <div>
                <label>Mobile number</label>
                <input type="tel" name="mobileNumber" placeholder="+1 234 456 7890" 
                    value={formData.mobileNumber} onChange={handleChange} required />
                {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
            </div>

            <div>
                <label>Front of ID</label>
                <input type="file" name="frontOfId" accept="image/*" 
                    onChange={(e) => handleFileChange(e, setFrontOfId)} required />
                {errors.frontOfId && <p className="error">{errors.frontOfId}</p>}
            </div>

            <div>
                <label>Back of ID</label>
                <input type="file" name="backOfId" accept="image/*" 
                    onChange={(e) => handleFileChange(e, setBackOfId)} required />
                {errors.backOfId && <p className="error">{errors.backOfId}</p>}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Proceed to payment"}
            </button>
            {status && <p className={status.includes("success") ? "success" : "error"}>{status}</p>}
        </form>
    );
};

export default Form;