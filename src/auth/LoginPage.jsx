import React, { useState } from "react";
import { useAuth } from "./AuthContext";

export default function LoginPage() {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const ok = login(username, password);
        if (!ok) setError("Invalid username or password");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-80"
            >
                <input
                    type="text"
                    placeholder="Username: admin"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border w-full p-2 mb-3 rounded"
                />
                <input
                    type="password"
                    placeholder="Password: 123456"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border w-full p-2 mb-3 rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
                {error && <p className="text-red-600 mt-3 text-sm">{error}</p>}
            </form>
        </div>
    );
}
