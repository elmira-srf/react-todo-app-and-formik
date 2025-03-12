

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


// YOU_API_KEY = "LEls10pQ1lqL1lxLehiPoD0P61SpGcQK"
// API_URL = "https://api.giphy.com/v1/gifs/trending"


async function get_data() {
    // API_URL = "api.giphy.com/v1/gifs/search"
    try {
        const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=LEls10pQ1lqL1lxLehiPoD0P61SpGcQK");
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        return json
    } catch (error) {
        console.error(error.message);
    }

}

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Node.js backend!" });
});

app.get("/api/gifs", async(req, res) => {
    const result = await get_data()
    console.log(result)
    res.json({data: result});
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));