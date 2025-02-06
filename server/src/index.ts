import express from "express";
import cors from "cors";
import * as admin from "firebase-admin";
import serviceAccount from "../firebase-service-account.json";
import "dotenv/config";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
});

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Bet Manager Pro Backend");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
