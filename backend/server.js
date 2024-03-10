import "dotenv/config"
import app from "./src/app.js"

app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}!`))