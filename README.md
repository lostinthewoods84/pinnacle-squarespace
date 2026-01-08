# Pinnacle Race Timing - Squarespace Site Code

This repository contains the CSS and JavaScript that powers the Pinnacle Race Timing website (https://www.pinnacle-timing.com/), which runs on Squarespace.

## 🎯 Purpose

This repo allows you to manage your site's logic and styling in GitHub rather than directly in Squarespace, providing:
- Version control for all code changes
- Clean separation of concerns
- Easy rollback if something breaks
- Professional development workflow

## 🏗️ How It Works

### The Setup

```
Squarespace Site
    ↓ (loads CSS/JS from)
jsDelivr CDN
    ↓ (pulls from)
GitHub Repository (this repo)
    ↑ (you push to)
Your Local Machine
```

1. **You** edit files locally and push to GitHub
2. **jsDelivr** serves your files as a CDN
3. **Squarespace** loads your files on every page load

### Integration with Squarespace

In Squarespace's **Code Injection** (Settings → Advanced → Code Injection → Header):

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lostinthewoods84/pinnacle-squarespace@main/dist/styles.css">
<script defer src="https://cdn.jsdelivr.net/gh/lostinthewoods84/pinnacle-squarespace@main/dist/site.js"></script>
```

On the homepage, there's a **Code Block** containing:
```html
<div class="pinnacle-home"></div>
```

Your JavaScript finds this div and injects all the HTML content into it.

## 📁 Project Structure

```
pinnacle-squarespace/
├── src/
│   ├── css/
│   │   └── 40-home.css          # Home page styles (scoped to .pinnacle-home)
│   └── js/
│       ├── 10-templates.js      # HTML templates (loads first)
│       └── 20-site.js           # Site logic (loads second)
├── dist/
│   ├── styles.css               # Built CSS (concatenated from src/css/*.css)
│   └── site.js                  # Built JS (concatenated from src/js/*.js)
├── package.json                 # Build scripts
└── README.md                    # This file
```

**Important:** Files are concatenated in **alphabetical/numerical order**. That's why we number them:
- `10-templates.js` loads before `20-site.js`
- Ensures templates are defined before the site tries to use them

## 🚀 Getting Started

### Prerequisites

- **Node.js** installed (for npm commands)
- **Git** installed
- Text editor (VS Code, Sublime, etc.)

### Initial Setup

1. **Clone this repository:**
   ```bash
   git clone https://github.com/lostinthewoods84/pinnacle-squarespace.git
   cd pinnacle-squarespace
   ```

2. **Verify you can build:**
   ```bash
   npm run build
   ```

   This concatenates all `src/css/*.css` files into `dist/styles.css` and all `src/js/*.js` files into `dist/site.js`.

## ✏️ Making Changes

### Workflow Overview

```
1. Edit source files in src/
2. Build (npm run build)
3. Test locally (optional)
4. Commit and push to GitHub
5. Clear CDN cache or use commit hash
6. Verify on live site
```

### Detailed Steps

#### 1. Edit Source Files

**For CSS changes:**
- Edit `src/css/40-home.css`
- All selectors should be scoped to `.pinnacle-home` to avoid conflicts with Squarespace styles

**For content/HTML changes:**
- Edit `src/js/10-templates.js`
- Modify the HTML string inside `window.PINNACLE_TEMPLATES.home`

**For JavaScript logic changes:**
- Edit `src/js/20-site.js`
- This file handles mounting templates to the DOM

#### 2. Build the Distribution Files

```bash
npm run build
```

This runs:
- `npm run build:css` → Concatenates CSS files
- `npm run build:js` → Concatenates JS files

**Output:** `dist/styles.css` and `dist/site.js`

#### 3. Commit and Push

```bash
git add .
git commit -m "Description of your changes"
git push origin main
```

#### 4. Handle CDN Cache

jsDelivr caches files aggressively. You have two options:

**Option A: Purge the Cache**

Visit these URLs in your browser to purge:
```
https://purge.jsdelivr.net/gh/lostinthewoods84/pinnacle-squarespace@main/dist/styles.css
https://purge.jsdelivr.net/gh/lostinthewoods84/pinnacle-squarespace@main/dist/site.js
```

You should see: `{"status":"finished"}`

**Option B: Use a Commit Hash (More Reliable)**

1. Go to: https://github.com/lostinthewoods84/pinnacle-squarespace/commits/main
2. Copy the commit hash from your latest commit (the 7-character code or full hash)
3. Update your Squarespace Code Injection to use that specific commit:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lostinthewoods84/pinnacle-squarespace@abc1234/dist/styles.css">
<script defer src="https://cdn.jsdelivr.net/gh/lostinthewoods84/pinnacle-squarespace@abc1234/dist/site.js"></script>
```

Replace `abc1234` with your actual commit hash.

**For Production:** Use `@main` and cache-bust with query params:
```html
<link rel="stylesheet" href="...@main/dist/styles.css?v=2">
```

Increment the version number each time you make changes.

#### 5. Verify Changes

- Visit https://www.pinnacle-timing.com/
- Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check DevTools Console for any errors

## 🎨 Common Tasks

### Adding a New Section to the Homepage

1. **Edit `src/js/10-templates.js`:**
   ```javascript
   <!-- Add new section here -->
   <div class="prt-section">
     <div class="prt-section-header">
       <h2 class="prt-section-title">New Section</h2>
     </div>
     <!-- Your content -->
   </div>
   ```

2. **Add styles in `src/css/40-home.css`:**
   ```css
   .pinnacle-home .your-new-section {
       /* styles here */
   }
   ```

3. Build, commit, push, clear cache

### Changing Colors or Fonts

All color variables are in `src/css/40-home.css`. Search for the color you want to change:
- Primary green: `#1a5f3f`
- Secondary green: `#2d7a54`
- Accent green: `#7fb285`
- Text colors: `#0d2818`, `#4a5f54`

Font stack is: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`

### Adding a New JavaScript File

If you need to add more functionality:

1. Create `src/js/15-utils.js` (or appropriate number)
2. Run `npm run build`
3. Your code will be included in `dist/site.js` in numerical order

## 🐛 Troubleshooting

### Changes Not Showing Up

1. **Did you build?** Run `npm run build`
2. **Did you push?** Run `git push`
3. **Is the cache cleared?** Purge jsDelivr or use a commit hash
4. **Hard refresh browser:** Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Content Not Appearing on Site

1. **Check browser console** (F12) for errors
2. **Verify the div exists:**
   ```javascript
   document.querySelector('.pinnacle-home')
   ```
   Should return: `<div class="pinnacle-home">...</div>`

3. **Verify templates loaded:**
   ```javascript
   window.PINNACLE_TEMPLATES
   ```
   Should show: `{home: ƒ}`

4. **Check file order:** JS files must be numbered correctly (10-templates.js before 20-site.js)

### Styles Not Applying

1. **Check selector specificity:** All styles should start with `.pinnacle-home`
2. **Check browser DevTools:** See if styles are being overridden by Squarespace defaults
3. **Add `!important` if needed** (as a last resort)

### jsDelivr Serving Old Files

**Permanent solution:** Always use commit hashes in production instead of `@main`

**Quick fix:** Purge cache at:
- https://purge.jsdelivr.net/gh/lostinthewoods84/pinnacle-squarespace@main/dist/styles.css
- https://purge.jsdelivr.net/gh/lostinthewoods84/pinnacle-squarespace@main/dist/site.js

## 📝 Best Practices

### CSS
- ✅ **Always** scope selectors to `.pinnacle-home` first
- ✅ Use semantic class names (`.prt-hero`, `.prt-section`)
- ✅ Keep responsive breakpoints consistent
- ❌ Don't use IDs for styling (use classes)
- ❌ Don't add styles that affect Squarespace's header/footer

### JavaScript
- ✅ Keep templates in `10-templates.js`
- ✅ Keep logic in `20-site.js`
- ✅ Use numbered prefixes for load order
- ❌ Don't modify `window.PINNACLE_TEMPLATES` in multiple places
- ❌ Don't use ES6 modules (not supported in this setup)

### Git
- ✅ Commit `src/` and `dist/` together
- ✅ Write descriptive commit messages
- ✅ Test before pushing
- ❌ Don't commit directly to main without testing
- ❌ Don't force push

## 🔒 Security Notes

- This repo is **public** and that's fine - all frontend code is visible in the browser anyway
- Never commit API keys, passwords, or sensitive data
- All code here is delivered to users' browsers, so treat it as public

## 🚢 Deployment Pipeline

```
Local Changes
    ↓ (git push)
GitHub Repository
    ↓ (automatically available)
jsDelivr CDN (caches for ~7 days)
    ↓ (loads on page request)
Squarespace Site
    ↓ (renders for)
Website Visitors
```

## 📚 Additional Resources

- [jsDelivr Documentation](https://www.jsdelivr.com/documentation)
- [Squarespace Code Injection Guide](https://support.squarespace.com/hc/en-us/articles/205815908)
- [Squarespace Custom CSS](https://support.squarespace.com/hc/en-us/articles/206543587)

## 🆘 Getting Help

- **For Squarespace issues:** [Squarespace Support](https://support.squarespace.com/)
- **For jsDelivr issues:** [jsDelivr GitHub](https://github.com/jsdelivr/jsdelivr)
- **For this repo:** Open an issue on GitHub

## 📋 Quick Reference

### Build Commands
```bash
npm run build          # Build everything
npm run build:css      # Build CSS only
npm run build:js       # Build JS only
```

### Git Commands
```bash
git status             # See what changed
git add .              # Stage all changes
git commit -m "msg"    # Commit changes
git push               # Push to GitHub
git log                # See commit history
```

### Cache Purge URLs
- CSS: https://purge.jsdelivr.net/gh/lostinthewoods84/pinnacle-squarespace@main/dist/styles.css
- JS: https://purge.jsdelivr.net/gh/lostinthewoods84/pinnacle-squarespace@main/dist/site.js

### Important URLs
- **Live Site:** https://www.pinnacle-timing.com/
- **GitHub Repo:** https://github.com/lostinthewoods84/pinnacle-squarespace
- **Commits:** https://github.com/lostinthewoods84/pinnacle-squarespace/commits/main

## 📅 Homepage Upcoming Events (Squarespace-driven)

The homepage "Upcoming Events" list is **not injected by JavaScript**.

Instead, it is powered by a **Squarespace Summary Block** that pulls from the site's native Events page:

**Home Page → Add Block → Summary**
- Source: **Events**
- Items: **Upcoming**
- Limit: **3**
- Sort: **Event Date (Ascending)**

This ensures the homepage always displays the next 3 upcoming races automatically, based on the Events page data (dates/times), without duplicating content in code.

### Styling
Styles for the Summary Block are maintained in this repo (CSS), not in Squarespace.

---

**Last Updated:** January 2026