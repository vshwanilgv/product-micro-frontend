import React, { useState } from "react";
import axios from "axios";

const ConfirmEmail = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        if (!email || !code) {
            setError("Both email and verification code are required.");
            return;
        }
        setError("");
        setMessage("");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:3001/api/users/confirm", {
                email,
                code,
            });
            setMessage(response.data.message);
        } catch (err) {
            setError(err.response?.data?.error || "Failed to confirm email.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-full flex-1  justify-center px-6 py-12 lg:px-8">
            <div className="flex-col w-1/2 justify-center  border border-white px-20 rounded-lg ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Confirm your email 
            </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm my-2">
            
        <form className="space-y-6" action="#" method="POST">
        <div>
            <div className="flex my-2 ">
                <label className="block text-sm font-medium leading-6 text-white">Email:</label>
                <div className="mt-2 mx-2">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>
            </div>
            
            <div className="flex my-2">
                <label className="block text-sm font-medium leading-6 text-white">Verification Code:</label>
                <div className="mt-2 mx-2">
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter the verification code"
                />
                </div>
            </div>
            <button onClick={handleConfirm} disabled={loading} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center">
                {loading ? "Confirming..." : "Confirm Email"}
            </button>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}

            </div>
          </form>
            
            
         
            </div>
        </div>
        </div>
    );
};

export default ConfirmEmail;
