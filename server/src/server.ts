import "dotenv/config";
import app from "./app.js";

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`
Server is Listening on port:${port}
http://localhost:${port}`);
})