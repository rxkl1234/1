const express = require('express');
const app = express();

// استخدم المنفذ الذي توفره Render، أو 3000 عند التشغيل المحلي
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('I am alive!');
});

app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});
