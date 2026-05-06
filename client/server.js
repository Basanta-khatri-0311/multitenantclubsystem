const app = require("./src/app")
const dotenv = require("dotenv")
const { connectDb } = require("./src/config/db")
dotenv.config()

const PORT = process.env.PORT || 8000

// connect
connectDb()

// Start server

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})