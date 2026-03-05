import { useEffect, useState } from "react"
import API from "../services/api"

function ExpenseList({ expenses, setExpenses }) {

  //const [expenses, setExpenses] = useState([])

  const fetchExpenses = async () => {
    const res = await API.get("/expenses")
    setExpenses(res.data)
  }

  useEffect(() => {
    fetchExpenses()
  }, [])

  const deleteExpense = async (id) => {
    await API.delete(`/expenses/${id}`)
    fetchExpenses()
  }

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0)

  return (
    <div>

        <h2 className="text-xl mb-4">
         Total Spent: ₹{total}
        </h2>

      {expenses.map(exp => (
        <div key={exp._id} className="border p-3 mb-2 flex justify-between">

          <span>
            ₹{exp.amount} - {exp.category} - {exp.note}
          </span>

          <button
            className="bg-red-500 text-white px-3 py-1"
            onClick={() => deleteExpense(exp._id)}
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  )
}

export default ExpenseList