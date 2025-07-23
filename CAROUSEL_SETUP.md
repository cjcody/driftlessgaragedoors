# Image Carousel Setup Guide

This guide will help you set up the image carousel to display photos from a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet
2. Name it something like "Driftless Garage Doors - Portfolio Images"

## Step 2: Set up the Sheet Structure

Create two columns:
- **Column A**: Image URL (header: "Image URL")
- **Column B**: Caption (header: "Caption")

Example:
```
| Image URL                                    | Caption         |
| https://i.ibb.co/abc123/garage-door-1.jpg   | New Installation |
| https://postimg.cc/xyz456/garage-door-2.png | Spring Repair   |
```

## Step 3: Add Your Images

### Option A: Using ImgBB
1. Go to [ImgBB](https://imgbb.com/)
2. Upload your image
3. Copy the "Direct link" URL (ends with .jpg, .png, etc.)
4. Paste it into the "Image URL" column

### Option B: Using Postimages
1. Go to [Postimages](https://postimages.org/)
2. Upload your image
3. Copy the "Direct link" URL
4. Paste it into the "Image URL" column

### Option C: Using Google Drive
1. Upload image to Google Drive
2. Right-click → "Get link"
3. Change "Anyone with the link" to "Anyone"
4. Copy the link and replace `/view` with `/preview` at the end
5. Paste it into the "Image URL" column

## Step 4: Publish the Sheet as CSV

1. In your Google Sheet, go to **File** → **Share** → **Publish to web**
2. Choose **"Entire Document"** and **"CSV"** format
3. Click **"Publish"**
4. Copy the generated URL (it will look like: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pub?output=csv`)

## Step 5: Update the Website

1. Open `src/config.js` in your project
2. Replace `YOUR_SHEET_ID` in the URL with your actual sheet ID
3. Save the file

## Step 6: Test

1. Run your development server: `npm run dev`
2. Go to the Showcase page
3. You should see your images in the carousel!

## Features

- **Left/Right Navigation**: Click the arrow buttons to navigate
- **Touch Support**: Swipe on mobile devices
- **Keyboard Navigation**: Use arrow keys
- **Image Captions**: Display below each image
- **Photo Counter**: Shows total number of photos
- **Error Handling**: Graceful fallbacks if images fail to load

## Adding/Removing Images

To add new images:
1. Add a new row to your Google Sheet
2. The carousel will automatically update when the page is refreshed

To remove images:
1. Delete the row from your Google Sheet
2. The carousel will automatically update when the page is refreshed

## Troubleshooting

**Images not loading?**
- Make sure the image URLs are direct links (end with .jpg, .png, etc.)
- Check that the images are publicly accessible
- Verify the Google Sheet is published as CSV

**Carousel not working?**
- Check the browser console for errors
- Verify the CSV URL in `src/config.js` is correct
- Make sure the Google Sheet has the correct column structure

**Need help?**
- Check that your image URLs are valid by pasting them directly in a browser
- Ensure your Google Sheet is published and accessible 