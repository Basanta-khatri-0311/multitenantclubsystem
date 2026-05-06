const express = require("express")
const cors = require("cors")
const AppError = require('./utils/appError');
const healthRouter = require("./routes/health.routes")


const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Routes
app.get("/", (req, res) => {
    res.send("Hello World")
})
app.use("/api/v1/health", healthRouter)



// Example of the 404 Handler
app.all('/{*path}', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


// Global Error Handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    // Non-operational errors in production shouldn't expose internals
    if (!err.isOperational && process.env.NODE_ENV === 'production') {
        return res.status(500).json({ status: 'error', message: 'Something went wrong' });
    }

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        // Optional: Only show stack in development mode
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});


// Export the app
module.exports = app