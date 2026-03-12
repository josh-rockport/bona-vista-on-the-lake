# GitHub Actions Troubleshooting Guide

## Common Issues & Solutions

### 1. GitHub Actions Not Enabled in Repository

**Check:**
- Go to your repository on GitHub
- Navigate to **Settings** > **Actions** > **General**
- Ensure "Allow all actions and reusable workflows" is selected
- Make sure Actions are not disabled

**Fix:**
- Enable Actions in repository settings
- Save changes

### 2. GitHub Pages Not Configured for Actions

**Check:**
- Go to **Settings** > **Pages**
- Under **Build and deployment** > **Source**
- Must be set to **GitHub Actions** (not "Deploy from a branch")

**Fix:**
1. Go to **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

### 3. Workflow File Not on Main Branch

**Check:**
- Verify you're pushing to the `main` branch (not `master` or another branch)
- Check if `.github/workflows/deploy.yml` exists in your repository

**Fix:**
```bash
# Check current branch
git branch

# If on master, rename to main
git branch -M main

# Push to main
git push -u origin main
```

### 4. Permissions Not Set

**Check:**
- Go to **Settings** > **Actions** > **General**
- Scroll to **Workflow permissions**
- Should be set to "Read and write permissions"

**Fix:**
1. Go to **Settings** > **Actions** > **General**
2. Under **Workflow permissions**, select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"
4. Save

### 5. First Push Hasn't Occurred

**Check:**
- Verify you've actually pushed the `.github/workflows/deploy.yml` file to GitHub
- Check the **Actions** tab in your repository

**Fix:**
```bash
# Add all files
git add .

# Commit
git commit -m "Add GitHub Actions deployment workflow"

# Push to main
git push origin main
```

### 6. Manual Trigger

If automatic triggers aren't working, you can manually trigger the workflow:

**Steps:**
1. Go to **Actions** tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click **Run workflow** dropdown
4. Select branch (main)
5. Click **Run workflow** button

## Verification Steps

### After Pushing to Main:

1. **Check Actions Tab:**
   - Go to your repository
   - Click **Actions** tab
   - You should see a workflow run appear within seconds

2. **Check Workflow Status:**
   - Click on the workflow run
   - Monitor build and deploy jobs
   - Check for any error messages

3. **Check Pages Deployment:**
   - Go to **Settings** > **Pages**
   - You should see "Your site is live at https://bonavistaonthelake.ca"
   - May take 2-3 minutes after workflow completes

## Alternative: Manual Deployment Script

If GitHub Actions continues to have issues, you can deploy manually:

```bash
# Build the site
npm run build

# The 'out' folder contains your static site
# You can deploy this folder to any static hosting service
```

### Deploy to GitHub Pages Manually:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d out"

# Build and deploy
npm run build
npm run deploy
```

## Current Workflow Configuration

The workflow is configured to:
- ✅ Trigger on push to `main` branch
- ✅ Allow manual triggering via workflow_dispatch
- ✅ Use proper permissions for Pages deployment
- ✅ Build with Node 20
- ✅ Export static files to `out` folder
- ✅ Deploy to GitHub Pages

## Quick Checklist

Before asking for help, verify:
- [ ] Repository has Actions enabled
- [ ] GitHub Pages source is set to "GitHub Actions"
- [ ] Workflow file is on the main branch
- [ ] You've pushed commits to main branch
- [ ] Workflow permissions are set correctly
- [ ] No syntax errors in workflow YAML file

## Getting Help

If issues persist:
1. Check the **Actions** tab for error messages
2. Look at workflow run logs for specific errors
3. Verify all repository settings mentioned above
4. Try manual workflow trigger
5. Check GitHub Status page for platform issues

## Contact

For deployment assistance, contact your development team or refer to:
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
