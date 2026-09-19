const express = require("express")
const path = require("path")
const port = 3000
const app = express()
app.use(express.static(path.join(__dirname, "frontend")))
app.get("/favicon", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "assets", "images", "Screenshot_20260716-130531_1.jpg"))
})
if (process.env.NODE_ENV !== "production") {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
module.exports = app;