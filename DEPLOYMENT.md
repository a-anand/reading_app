# Deployment Guide for Reading Practice App

This guide will help you deploy your reading app to various hosting platforms so you can share it with others.

## Quick Start - Run Locally

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the app:
```bash
python app.py
```

3. Open your browser and go to: `http://localhost:5000`

4. Share with others on your local network by sharing your local IP address (e.g., `http://192.168.1.x:5000`)

---

## Option 1: Deploy to Render (Recommended - FREE)

Render offers free hosting for web apps.

1. **Create a Render account**: Go to https://render.com and sign up

2. **Connect your GitHub**:
   - Push your code to GitHub first (see Git instructions below)
   - In Render dashboard, click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure the service**:
   - Name: `reading-app`
   - Environment: `Python 3`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
   - Select the FREE plan

4. **Deploy**: Click "Create Web Service"

5. **Share**: Your app will be live at `https://reading-app-xxxx.onrender.com`

---

## Option 2: Deploy to PythonAnywhere (FREE)

PythonAnywhere offers easy Python hosting.

1. **Create account**: Go to https://www.pythonanywhere.com and sign up for a free account

2. **Upload your code**:
   - Go to "Files" tab
   - Upload all your files or clone from GitHub

3. **Create virtual environment**:
   ```bash
   mkvirtualenv --python=/usr/bin/python3.10 reading-app
   pip install -r requirements.txt
   ```

4. **Configure web app**:
   - Go to "Web" tab
   - Click "Add a new web app"
   - Choose "Flask"
   - Set the path to your `app.py`

5. **Share**: Your app will be live at `https://yourusername.pythonanywhere.com`

---

## Option 3: Deploy to Heroku (FREE tier available)

1. **Install Heroku CLI**: Download from https://devcli.heroku.com

2. **Login and create app**:
```bash
heroku login
heroku create reading-practice-app
```

3. **Deploy**:
```bash
git push heroku main
```

4. **Open app**:
```bash
heroku open
```

---

## Option 4: Deploy to Railway (FREE)

1. **Create Railway account**: Go to https://railway.app

2. **Deploy from GitHub**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect Python and deploy

3. **Share**: Get your public URL from the Railway dashboard

---

## Option 5: Deploy to Vercel (FREE)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Create vercel.json** (already included):
```json
{
  "version": 2,
  "builds": [
    {
      "src": "app.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "app.py"
    }
  ]
}
```

3. **Deploy**:
```bash
vercel
```

---

## Quick Share with Ngrok (Temporary)

If you want to quickly share your locally-running app:

1. **Install ngrok**: Download from https://ngrok.com

2. **Run your app**:
```bash
python app.py
```

3. **In another terminal, run ngrok**:
```bash
ngrok http 5000
```

4. **Share**: Ngrok will give you a public URL like `https://xxxx.ngrok.io` that you can share

**Note**: The ngrok URL expires when you close it. This is good for quick testing/sharing.

---

## Git Instructions (For GitHub-based deployments)

If you haven't already, initialize a git repository:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Reading practice app"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/reading-app.git
git branch -M main
git push -u origin main
```

---

## Troubleshooting

**App won't start?**
- Check that `requirements.txt` is installed
- Verify Python version compatibility
- Check logs on your hosting platform

**Text-to-speech not working?**
- Text-to-speech requires HTTPS (works on all deployment platforms)
- Ensure browser supports Web Speech API (Chrome, Edge, Safari work best)

**Port issues?**
- Make sure app.py uses `host='0.0.0.0'` (already configured)
- Some platforms require specific port configuration (handled by Procfile)

---

## Recommended Platform Comparison

| Platform | Setup Difficulty | Free Tier | Custom Domain | Best For |
|----------|------------------|-----------|---------------|----------|
| Render | Easy | Yes | Yes | General use |
| PythonAnywhere | Easy | Yes | Paid only | Simple Python apps |
| Railway | Very Easy | Yes | Yes | Quick deploys |
| Heroku | Medium | Limited | Yes | Enterprise-ready |
| ngrok | Very Easy | Yes (temporary) | Paid only | Quick sharing |

---

## Next Steps

1. Choose a hosting platform above
2. Follow the instructions for that platform
3. Share the URL with others
4. Kids can access it from any device with a web browser!
