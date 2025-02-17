// api/airtable.js

export default async function handler(req, res) {
    // Read environment variables from Vercel (set these in your Vercel project settings)
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const BASE_ID = process.env.AIRTABLE_BASE_ID || "app8vXZhXBflS6W0z";
    const TABLE_ID = process.env.AIRTABLE_TABLE_ID || "tblNIybhieGoKoGCN";
    const VIEW_ID = process.env.AIRTABLE_VIEW_ID || "viwNtI1H61EcGd3nU";
  
    // Construct the Airtable API URL
    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}?view=${VIEW_ID}`;
  
    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` }
      });
  
      if (!response.ok) {
        res.status(response.status).json({ error: "Failed to fetch data from Airtable" });
        return;
      }
      
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
  }