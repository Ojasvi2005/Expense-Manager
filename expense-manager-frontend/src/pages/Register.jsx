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
    <div style={{ padding: "40px" }}>
      <h1>Register</h1>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  )
}

export default Register