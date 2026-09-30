import { useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";

const Signup = ({ setIsAuthenticated }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [date_of_birth, setDateOfBirth] = useState("");
    const [accountType, setAccountType] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await fetch("/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullName, email, password, phoneNumber, gender, date_of_birth, accountType }),
            });

            if (response.ok) {
                const user = await response.json();
                localStorage.setItem("user", JSON.stringify(user));
                console.log("User signed up successfully!");
                setIsAuthenticated(true);
                navigate("/");
            } else {
                console.error("Signup failed");
            }
        } catch (error) {
            console.error("Error during signup:", error);
        };
    };
    return (
        <div>
            <h2>Sign Up</h2>
            <label>
                Full Name:
                <input
                    type="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                ></input>
            </label>

            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                ></input>
            </label>

            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                ></input>
            </label>

            <label>
                Phone:
                <input
                    type="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="392.."
                ></input>
            </label>

            <label>
                Gender:
                <input
                    type="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    placeholder="Gender"
                ></input>
            </label>

            <label>
                DBO:
                <input
                    type="date_of_birth"
                    value={date_of_birth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    placeholder="12.12.1222"
                ></input>
            </label>

            <label>
                 account type:
                <input
                    type="accountType"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    placeholder="  "
                ></input>
            </label>

            <button className="signup-button" onClick={handleSignup}>Sign Up</button>
        </div>
    )
};

export default Signup;