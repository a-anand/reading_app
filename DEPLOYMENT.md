# Deployment Guide - GitHub Pages

This is a static web application that can be deployed to GitHub Pages for free hosting.

## Features
- 100% client-side application (no backend required)
- Works offline after initial load
- Mobile-friendly and PWA-capable
- Score tracking with localStorage
- Speech recognition and text-to-speech

## Deploy to GitHub Pages

### Method 1: Direct Deployment (Easiest)

1. **Push your code to GitHub** (already done!)
   ```bash
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository: https://github.com/a-anand/reading_app
   - Click on **Settings** (top right)
   - Scroll down to **Pages** (left sidebar)
   - Under "Source", select **main** branch
   - Under folder, select **/ (root)**
   - Click **Save**

3. **Wait for deployment** (usually 1-2 minutes)
   - GitHub will automatically build and deploy your site
   - Your app will be available at: `https://a-anand.github.io/reading_app/`

### Method 2: Using GitHub Actions (Automatic)

GitHub Pages will automatically deploy whenever you push to the main branch.

## Accessing Your App

Once deployed, your app will be available at:
**https://a-anand.github.io/reading_app/**

You can share this URL with anyone, and they'll be able to use the app!

## Local Testing

To test the app locally before deploying:

1. **Using Python's built-in server**:
   ```bash
   python -m http.server 8000
   ```
   Then open: http://localhost:8000

2. **Using Node.js http-server**:
   ```bash
   npx http-server
   ```

3. **Using VS Code Live Server extension**:
   - Install "Live Server" extension
   - Right-click on index.html
   - Select "Open with Live Server"

## File Structure

```
reading_app/
├── index.html          # Main HTML file (GitHub Pages entry point)
├── static/
│   ├── app.js         # JavaScript with words list and logic
│   ├── style.css      # Styling
│   └── manifest.json  # PWA manifest
├── DEPLOYMENT.md      # This file
└── README.md          # Project documentation
```

## Browser Requirements

- **Speech Recognition**: Chrome, Edge, Safari (iOS 14.5+)
- **Text-to-Speech**: All modern browsers
- **localStorage**: All modern browsers

## Troubleshooting

### App not loading after deployment
- Wait 2-3 minutes after enabling GitHub Pages
- Check that you selected the correct branch (main) and root folder
- Clear your browser cache

### Speech recognition not working
- Ensure you're using HTTPS (GitHub Pages uses HTTPS automatically)
- Grant microphone permissions when prompted
- Use Chrome, Edge, or Safari for best compatibility

### Changes not appearing
- Commit and push your changes: `git add . && git commit -m "Update" && git push`
- Wait 1-2 minutes for GitHub Pages to rebuild
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the root directory with your domain name
2. Configure DNS settings with your domain provider
3. See: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Updates

To update your app:
```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically redeploy within 1-2 minutes.

## License

This is a free, open-source educational app. Feel free to fork and modify!
