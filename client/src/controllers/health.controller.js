const { getHealthData } = require("../services/health.service")


exports.checkHealth = async (req, res, next) => {
    try {
        const result = await getHealthData()
        res.status(200).json({
            status: "success",
            message: "Health data fetched successfully",
            data: result
        })
    } catch (error) {
        console.log(error)
        next({
            status: "error",
            message: "Internal server error controller",
        })
    }
}
