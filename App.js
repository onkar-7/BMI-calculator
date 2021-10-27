const express = require("express")
const path = require("path")

const app = express()
    // Rendering Static files
app.use(express.static("public"))

// Using body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})
app.post("/", function(req, res) {
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let BMI = weight / height
    console.log(req.body);
    res.send(`<h2> The BMI is ${BMI} </h2>`)
})

// Starting the Server
const PORT = 8000 || process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})