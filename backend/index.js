const express = require("express")
const path = require("path")
const app = express()
app.use(express.static(path.join(__dirname, "frontend")))
app.get("/favicon", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "assets", "images", "Screenshot_20260716-130531_1.jpg"))
})
export default app;