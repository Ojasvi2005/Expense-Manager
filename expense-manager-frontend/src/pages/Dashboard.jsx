import { useState } from "react"
import { useEffect } from "react"
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
    <div style={{ padding: "40px" }}>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Expense Dashboard</h1>

        <button
          onClick={logout}
          style={{ background: "red", color: "white", padding: "8px" }}
        >
          Logout
        </button>
      </div>

      <AddExpense setExpenses={setExpenses} />

      <ExpenseList
        expenses={expenses}
        setExpenses={setExpenses}
      />

      <ExpenseChart expenses={expenses} />

    </div>
  )
}

export default Dashboard