

exports.getHealthData = async () => {
    try {
        return {
            status: "success",
            message: "Health data fetched successfully",
            timestamp: new Date().toISOString()
        }
    } catch (error) {
        console.log(error)
        return ({
            status: "error",
            message: "Internal server error",
            timestamp: new Date().toISOString()
        })
    }
}


