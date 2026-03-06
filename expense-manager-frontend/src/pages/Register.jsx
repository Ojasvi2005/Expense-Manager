import { useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleRegister = async () => {

    try {

      const res = await API.post("/auth/register", {
        name,
        email,
        password
      })

      localStorage.setItem("token", res.data.token)

      navigate("/dashboard")

    } catch (error) {

      alert("Registration failed")
      console.log(error)

    }
  }

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Register
        </button>

        <p className="auth-link">
          Already have an account?
          <a href="/"> Login</a>
        </p>

      </div>

    </div>
  )
}

export default Register