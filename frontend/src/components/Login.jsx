import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError(null);
        try {
            const res = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email,password})
            });

            if (res.ok) {
                const user = await res.json();
                localStorage.setItem("user", JSON.stringify(user));
                console.log("User logged in successfully!");
                setIsAuthenticated(true);
                navigate("/");
            } else {
                const data = await res.json().catch(() => ({}));
                setError(data.error || data.message || "Login failed");
            }
        } catch (error) {
            setError(error.message || "Unable to log in. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {error && <p role="alert">{error}</p>}
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </label>
            <button className="login-button" onClick={handleLogin}>Log In</button>
        </div>
    );
    
};


export default Login;


