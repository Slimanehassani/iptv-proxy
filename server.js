const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors()); // Allow requests from your IPTV app

// Proxy route to fetch IPTV playlists
app.get("/proxy", async (req, res) => {
    const { url } = req.query;
    if (!url) return res.status(400).send("Missing URL");

    try {
        const response = await axios.get(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error fetching the playlist");
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
