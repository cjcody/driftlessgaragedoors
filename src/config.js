// Configuration for the image carousel
export const config = {
  // Replace this URL with your published Google Sheet CSV URL
  // To get this URL:
  // 1. Create a Google Sheet with columns: Image URL, Caption
  // 2. Go to File → Share → Publish to web
  // 3. Choose "Entire Document" and "CSV" format
  // 4. Copy the generated URL and paste it here
  googleSheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEjSGYPmrxJCwGfANSkOh7tzQzTxBywxqSNTDTDfazmLR7SnaXN8S2qknJ2wgrngKzseCiG7JRzosQ/pub?gid=0&single=true&output=csv",
  
  // Example of what your Google Sheet should look like:
  // | Image URL                                    | Caption         |
  // | https://i.ibb.co/abc123/garage-door-1.jpg   | New Installation |
  // | https://postimg.cc/xyz456/garage-door-2.png | Spring Repair   |
}; 