# Wonderfully Made Reflexology — Static Website (`wonderfully-made.org`)

A fast, zero-maintenance static website built for **Wonderfully Made Reflexology** (*Jean Glickman — ARCB Nationally Certified Reflexologist, RAA & NCRA Member, Charlotte, NC*), designed for effortless editing and one-command deployment to **Google Firebase Hosting**.

---

## 📁 Project Structure

```text
wonderfully-made/
├── firebase.json                 # Firebase Hosting config (clean URLs + legacy WP 301 redirects)
├── .firebaserc                   # Firebase project alias configuration
├── package.json                  # Helpful local server & Firebase scripts
├── scripts/
│   └── sync-wordpress-assets.sh  # Optional script to archive legacy WP media uploads
└── public/                       # Deployed static site root
    ├── index.html                # Front Page (Hero, What is Reflexology, Zone Map, History, 20 Studies, Testimonials, Team)
    ├── pricing.html              # Redesigned Pricing & Services page + Interactive Session Estimator
    ├── blog.html                 # Blog & Charlotte, NC Practice Updates
    ├── privacy-statement.html    # Privacy Statement
    ├── 404.html                  # Custom 404 page
    ├── favicon.svg               # Botanical emblem SVG favicon
    ├── css/
    │   └── styles.css            # Art-directed Vanilla CSS design system
    ├── js/
    │   ├── site-data.js          # ⭐ SINGLE-FILE EASY CONFIG (edit prices, phone, email, articles here!)
    │   └── main.js               # Interactive Zone Explorer, Research Filter & Session Estimator
    └── assets/
        └── images/               # High-res photography & vector emblems
```

---

## ✏️ How to Edit Prices, Contact Info, or Content (In 30 Seconds)

You no longer need WordPress plugins or database updates!

1. Open **[`public/js/site-data.js`](public/js/site-data.js)** in any text editor (VS Code, Notepad, TextEdit, or directly on GitHub).
2. At the top of `public/js/site-data.js`, you will see the `pricing` and `business` sections:
   ```js
   pricing: {
     travelFee: 15,
     services: [
       {
         id: "foot-session",
         name: "1 Foot Session",
         price: 70,
         // ...
       },
       {
         id: "hand-foot-combo",
         name: "Hand & Foot Session",
         price: 90,
         // ...
       },
       {
         id: "hand-session",
         name: "1 Hand Session",
         price: 40,
         // ...
       }
     ]
   }
   ```
3. Change any price (for example, changing `70` to `75`), save the file, and refresh your browser. Every price badge, pricing card, and the interactive session calculator across the entire site updates automatically!

---

## 🖥️ Step-by-Step Guide: How to Test the Site Locally

You can preview and test the website on your computer using any of the three methods below:

### Option A: Using Python (Built into macOS / Linux — Zero Install)
1. Open your terminal and navigate to the project folder:
   ```bash
   cd wonderfully-made
   ```
2. Start a local web server on port `5000`:
   ```bash
   npm run dev
   # Or directly: python3 -m http.server 5000 --directory public
   ```
3. Open your browser and visit:
   - Front Page: `http://localhost:5000`
   - Pricing Page: `http://localhost:5000/pricing.html`
   - Blog Page: `http://localhost:5000/blog.html`
   - Privacy Statement: `http://localhost:5000/privacy-statement.html`

### Option B: Using the Official Firebase Local Emulator (Tests Clean URLs & 301 Redirects)
1. From the `wonderfully-made` folder, run:
   ```bash
   npm run firebase:emulate
   # Or directly: npx firebase-tools serve --only hosting --port 5000
   ```
2. Open `http://localhost:5000` in your browser.
   - This emulates Firebase Hosting locally, including clean URLs (`/pricing`, `/blog`, `/privacy-statement`) and the automatic 301 redirect from the old WordPress pricing URL (`/sample-page/` → `/pricing`).

---

## 🚀 Step-by-Step Guide: How to Deploy to Google Firebase Hosting

Firebase Hosting’s **Spark Plan (Free Tier)** includes 10 GB of storage, 360 MB/day of data transfer, a global CDN, and **free automatic SSL certificates (`https://`)** for your custom domain `wonderfully-made.org`.

### Step 1: Create a Firebase Project (One-Time Setup)
1. Go to the [Firebase Console](https://console.firebase.google.com/) and sign in with your Google account.
2. Click **Create a project** (or **Add project**).
3. Enter a project name (for example, `wonderfully-made-reflexology`).
   - *Note your exact **Project ID** shown underneath the project name.*
4. Disable Google Analytics if you don't need it (keeps setup even simpler), and click **Create project**.

### Step 2: Install the Firebase CLI & Log In (One-Time Setup)
1. Make sure you have [Node.js](https://nodejs.org/) installed on your computer.
2. Install the Firebase CLI globally (or use `npx firebase-tools`):
   ```bash
   npm install -g firebase-tools
   ```
3. Log in to your Google account:
   ```bash
   firebase login
   ```
   *(This opens a browser window for you to sign in with Google.)*

### Step 3: Link Your Local Folder to Your Firebase Project
1. Inside the `wonderfully-made` repository directory, link your Firebase project:
   ```bash
   firebase use --add
   ```
2. Use the arrow keys to select the Firebase project you created in Step 1, and type `default` when asked for an alias. *(This updates `.firebaserc` with your exact project ID.)*

### Step 4: Deploy the Website!
1. Run the deploy command from the repository root:
   ```bash
   firebase deploy --only hosting
   ```
   *(Or run `npm run firebase:deploy`)*
2. Within a few seconds, Firebase will output your live Hosting URL:
   ```text
   ✔  Deploy complete!
   Hosting URL: https://wonderfully-made-reflexology.web.app
   ```

### Step 5: Connect Your Custom Domain (`wonderfully-made.org`)
1. Open the [Firebase Console](https://console.firebase.google.com/) → select your project → click **Build** → **Hosting** in the left sidebar.
2. Click **Add custom domain**.
3. Enter `wonderfully-made.org` (and optionally check the box to also redirect `www.wonderfully-made.org` to `wonderfully-made.org`).
4. Firebase will display **TXT** and **A** DNS records:
   - Log in to your domain registrar (where `wonderfully-made.org` DNS is managed).
   - Remove the old WordPress server `A` record and add the Firebase `TXT` verification record and `A` records provided by Firebase.
5. Once DNS propagates, Firebase automatically provisions a **free SSL certificate** so `https://wonderfully-made.org` and `http://wonderfully-made.org` serve securely over HTTPS!
