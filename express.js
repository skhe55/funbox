const express = require('express');
const app = express();
const PORT = 3000;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})