# Push to GitHub (One-Time Setup)

Your portfolio is ready at `C:\Users\Lenovo\Desktop\MyPort` and already committed locally.

GitHub push needs your login once. Follow these steps:

## Step 1 — Create the repo on GitHub

1. Open https://github.com/new
2. Repository name: `myport`
3. Keep it **Public**
4. Do **NOT** add README, .gitignore, or license (project already has them)
5. Click **Create repository**

## Step 2 — Push from your PC

Open PowerShell and run:

```powershell
cd C:\Users\Lenovo\Desktop\MyPort
git branch -M main
git remote add origin https://github.com/vina-yak11/myport.git
git push -u origin main
```

If `origin` already exists, use:

```powershell
git remote set-url origin https://github.com/vina-yak11/myport.git
git push -u origin main
```

## Step 3 — Sign in when asked

- GitHub will open a browser window or ask for credentials
- Use **GitHub Personal Access Token** (not your password)
- Create token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token
- Give it `repo` permission

After this one-time setup, future updates are just:

```powershell
git add .
git commit -m "Update portfolio"
git push
```
