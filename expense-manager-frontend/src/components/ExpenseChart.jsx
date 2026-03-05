import { Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

function ExpenseChart({ expenses }) {

  const categoryTotals = {}

  expenses.forEach(exp => {
    if (!categoryTotals[exp.category]) {
      categoryTotals[exp.category] = 0
    }
    categoryTotals[exp.category] += exp.amount
  })

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9C27B0"
        ]
      }
    ]
  }

  return (
    <div style={{ width: "400px", marginTop: "30px" }}>
      <Pie data={data} />
    </div>
  )
}

export default ExpenseChart