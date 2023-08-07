import { useNavigate, Link } from "react-router-dom"

export function Login() {
    const navigate = useNavigate()

    function handleHome() {
        navigate("/")
    }
    function handleRegister() {
        navigate("/register")
    }

    return (
        <div>
            <nav>
                <Link to={"/register"} className="register-link">Register</Link>
                <Link to={"/login"}>Login</Link>
            </nav>
            <button onClick={handleHome}>Home</button>
            <button onClick={handleRegister}>Register</button>
            <form className="login-page">
                <label>Username</label>
                <input type="text" name="username" required/>
                <label>Password</label>
                <input type="password"  name="password" required/>
                <button>Submit</button>
            </form>
        </div>
    )
}