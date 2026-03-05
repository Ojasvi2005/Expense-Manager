const express = require("express")
const Expense = require("../models/Expense")
const auth = require("../middleware/authMiddleware")

const router = express.Router()

// Add Expense
router.post("/", auth, async (req, res) => {
    const { amount, category, note, date } = req.body

    try {
        const expense = new Expense({
            userId: req.user.id,
            amount,
            category,
            note,
            date
        })

        await expense.save()
        res.json(expense)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Get Expenses
router.get("/", auth, async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user.id }).sort({ date: -1 })
        res.json(expenses)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Delete Expense
router.delete("/:id", auth, async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id)
        res.json({ message: "Expense deleted" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router