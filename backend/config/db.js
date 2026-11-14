
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("\nConnecting to MongoDB Atlas...");

        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is missing from .env file");
        }

        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 15000,
            connectTimeoutMS: 10000,
            family: 4
        });

        console.log("MongoDB Atlas Connected Successfully!");
        console.log("Database:", mongoose.connection.name);

    } catch (error) {
        console.log("\nMongoDB Connection Failed!");
        console.log("Error:", error.message);

        if (error.reason?.servers) {
            console.log("\nIndividual server status:");

            for (const [address, server] of error.reason.servers) {
                console.log("\nServer:", address);
                console.log("Status:", server.type);
                console.log(
                    "Details:",
                    server.error?.message || "No additional error details"
                );
            }
        }

        throw error;
    }
};

module.exports = connectDB;
