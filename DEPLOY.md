# How to Publish Your Portfolio (Step by Step)

## Option 1: Vercel (Easiest — Free)

### Step 1 — Push to GitHub
Your code is already on GitHub at: `https://github.com/vina-yak11/myport`

### Step 2 — Create Vercel Account
1. Open https://vercel.com
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Allow Vercel to access your repositories

### Step 3 — Import Project
1. Click **Add New… → Project**
2. Find **myport** in the list
3. Click **Import**
4. Framework should auto-detect as **Next.js**
5. Click **Deploy** (no changes needed)

### Step 4 — Get Your Live Link
- After 1–2 minutes, Vercel gives you a URL like `https://myport-xyz.vercel.app`
- Share that link with anyone — it works worldwide

### Step 5 — Custom Domain (Optional)
1. In Vercel project → **Settings → Domains**
2. Add your domain (e.g. `vinayak.dev`)
3. Follow DNS instructions from your domain provider

---

## Option 2: Netlify (Also Free)

1. Go to https://netlify.com
2. Sign in with GitHub
3. **Add new site → Import an existing project**
4. Select `vina-yak11/myport`
5. Build command: `npm run build`
6. Publish directory: `.next` (or use Netlify's Next.js plugin)
7. Deploy

---

## Option 3: Run on Your Own PC (Local Only)

```bash
cd C:\Users\Lenovo\Desktop\MyPort
npm run dev
```

Only people on your computer/network can see it at `http://localhost:3000`.

---

## After You Deploy

Whenever you update the site:
1. Edit files in `C:\Users\Lenovo\Desktop\MyPort`
2. Run:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Vercel/Netlify auto-redeploys in ~1 minute
