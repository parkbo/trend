
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api/trend/:ticker', (req, res) => {
    const { ticker } = req.params;
    const mockResponse = {
        ticker,
        dailyTrend: 'Bullish',
        threeDayTrend: 'Bullish',
        score: 5,
        rating: 'BUY',
        changed: 'YES',
        timestamp: new Date().toISOString()
    };
    res.json(mockResponse);
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
