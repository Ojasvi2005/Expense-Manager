import { useState } from "react"
import API from "../services/api"

function AddExpense({ setExpenses }) {

  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [note, setNote] = useState("")

  const addExpense = async () => {

    const res = await API.post("/expenses", {
      amount: Number(amount),
      category,
      note,
      date: new Date()
    })

    // update dashboard state instantly
    setExpenses(prev => [...prev, res.data])

    setAmount("")
    setCategory("")
    setNote("")
  }

  return (
    <div style={{ marginBottom: "20px" }}>

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addExpense}>
        Add Expense
      </button>

    </div>
  )
}

export default AddExpense