import mongoose from "mongoose";
import app from "./app";
import config from "./config";
async function bootstrap() {
    try{
        await mongoose.connect(config.database_url as string);
        console.log("Successfully database connection")
        app.listen(config.port, () => {
            console.log(`Application listening on port ${config.port}`)
          })
    }
    catch(error){
        console.log(`database connection failed! Error: ${error}`)
    }
}
bootstrap() // call the function