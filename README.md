# 👋 Welcome to Emoti App

Emoti is your ultimate emoji dictionary, helping you decode meanings or find the perfect emoji. Explore over 3,000 emojis with detailed explanations, cultural contexts, and usage examples. Search by emoji or keyword, browse categories, and discover trends. Emoti ensures you understand the nuances of emoji communication with ease.

## 🚀 How to Start the App

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npx expo start
   ```
3. When prompted, select the **iOS** option to run the app in the iOS simulator.

---

# 📌 Emoti Collaboration Guide

## 🚨 Important Notes (Please Read First)
- **Always push to `test` first.**
- **Do not push directly to `main` unless the changes are thoroughly reviewed and tested.**
- **Make sure to sync with `test` before starting new work, especially if others are working on the repo.**
- **Push changes to your own feature branch (e.g., `feature-search-branch`) first, then create a pull request to merge it into `test`.**

### 📖 Explanation:
- **Feature Branch (`feature-search-branch`)**: This is where you make changes.
- **Test Branch (`test`)**: This is the testing ground for all changes before merging into `main`.
- **Main Branch (`main`)**: Only stable and fully reviewed code should be merged here.

---

## 🚀 Getting Started

### **Clone the Repository**
To begin, clone the repository to your local machine:
```bash
git clone https://github.com/BirdNex-dev/emoti.git
```

### **Set Upstream Remote (For Forked Repos Only)**
> _Ignore this step if you cloned directly from the original repository._
```bash
git remote add upstream https://github.com/BirdNex-dev/emoti.git
```

---

## 🔀 Creating a New Branch

1. Switch to the test branch:
```bash
git checkout test
```
2. Pull the latest changes to ensure it's up to date:
```bash
git pull origin test
```
3. Create a new feature branch:
```bash
git checkout -b feature-search-branch
```

> _Note: Replace `feature-search-branch` with a meaningful name related to your feature._

---

## ✏️ Making Changes

1. Modify, add, or delete files as needed.
2. Stage the changes:
```bash
git add .
```
3. Commit with a clear message:
```bash
git commit -m "Add comment here"
```

---

## 📤 Pushing Your Changes

Push your feature branch to GitHub:
```bash
git push origin feature-search-branch
```

---

## 🔃 Creating a Pull Request (PR)

1. **Go to GitHub** and navigate to your repository: **BirdNex Dev - Emoti Repo**
2. Click on the **Pull requests** tab.
3. Click **New Pull Request**.
4. Set the branches:
   - **Base branch**: `test`
   - **Compare branch**: `feature-search-branch`
5. **Review the changes** before proceeding.
6. **Add a title and description**:
   - Example title: `"Add feature-search-branch"`
   - Description: Briefly describe your changes and purpose.
7. Click **Create pull request**.
8. **Assign reviewers** for approval.


---

## 🎯 Additional Notes
- Ensure your branch is always up-to-date with `test` before creating a PR.
- Provide meaningful commit messages.
- Review all changes carefully before submitting a PR.
- Assign reviewers and request feedback.

Thank you for contributing to **Emoti**! 🚀

