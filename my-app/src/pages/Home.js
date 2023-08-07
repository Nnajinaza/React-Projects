import { useNavigate, Link } from "react-router-dom"

export function Home() {
    const navigate = useNavigate()
    
    function handleRegister(e) {
        e.preventDefault()
        navigate("/register")
    }

    function handleLogin(e) {
        e.preventDefault()
        navigate("/login")
    }

    return (
        <>
            <h1>Hello Home</h1>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}