import { useState, useEffect } from "react"
import AddExpense from "../components/AddExpense"
import ExpenseList from "../components/ExpenseList"
import ExpenseChart from "../components/ExpenseChart"

function Dashboard() {

  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      window.location.href = "/"
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  return (
    <div className="container">

      <div className="dashboard-header">
        <h1>Expense Dashboard</h1>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="dashboard-grid">

        <div className="card">
          <h2>Add Expense</h2>
          <AddExpense setExpenses={setExpenses} />
        </div>

        <div className="card">
          <h2>Expense List</h2>
          <ExpenseList expenses={expenses} setExpenses={setExpenses} />
        </div>

        <div className="card">
          <h2>Expense Chart</h2>
          <ExpenseChart expenses={expenses} />
        </div>

      </div>

    </div>
  )
}

export default Dashboard