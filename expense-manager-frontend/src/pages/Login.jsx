import { useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {

      const res = await API.post("/auth/login", {
        email,
        password
      })

      localStorage.setItem("token", res.data.token)

      navigate("/dashboard")

    } catch (error) {
      alert("Invalid credentials")
      console.log(error)
    }
  }

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Login</h1>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p className="auth-link">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </div>

    </div>
  )
}

export default Login