import express from 'express';
import client from "@routes/client"

const app = express();

app.get('*', client());

app.listen(3000, () => {
	// do nothing
});
