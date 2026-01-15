# Anzony Quispe - Academic Website

Personal academic website hosted at [anzonyquispe.github.io](https://anzonyquispe.github.io)

## Quick Start: Updating Your Website

All website content is managed through a single file: **`js/data.js`**

### File Structure

```
├── index.html          # Main website (don't edit unless changing design)
├── js/data.js          # ALL CONTENT GOES HERE - edit this file
├── assets/img/         # Images (profile photo, etc.)
├── cv/                 # CV PDF file
├── did-book/           # DiD ebook (Quarto generated)
└── design-a2.html      # Backup of current design
```

---

## How to Update Content

### 1. Working Papers

Edit the `workingPapers` array in `js/data.js`:

```javascript
workingPapers: [
    {
        title: "Your Paper Title",
        authors: 'with <a href="https://coauthor-website.com" target="_blank">Coauthor Name</a>',
        venue: "Conference/Journal (optional)",
        url: "https://link-to-paper.com",  // Leave empty "" if no link
        abstract: "Your paper abstract text here...",
        links: [
            { text: "PDF", url: "https://link-to-pdf.com" },
            { text: "Slides", url: "https://link-to-slides.com" }
        ]
    },
    // Add more papers...
]
```

### 2. Publications

Edit the `publications` array (same format as working papers):

```javascript
publications: [
    {
        title: "Published Paper Title",
        authors: 'with Coauthor Name',
        venue: "Journal Name, Year",
        url: "https://doi.org/...",
        abstract: "Abstract text...",
        links: []
    }
]
```

### 3. Software Packages

Edit the `software` array:

```javascript
software: [
    {
        name: "package-name",           // Display name
        pypiName: "pypi-package-name",  // Exact PyPI name for download badge
        description: "What it does",
        language: "Python",             // or "Python/R/Stata"
        repoUrl: "https://github.com/...",
        pypiUrl: "https://pypi.org/project/...",  // null if not on PyPI
        downloads: "loading..."         // Keep as is (auto-updates)
    }
]
```

**Note:** Download badges auto-update from [shields.io](https://shields.io). Use the exact PyPI package name.

### 4. Books

Edit the `books` array:

```javascript
books: [
    {
        title: "Book Title",
        description: "Brief description",
        authors: "Author info or year",
        url: "did-book/index.html"  // Local path or external URL
    }
]
```

### 5. Teaching

Edit the `teaching` array:

```javascript
teaching: [
    { course: "Course Name", institution: "University", year: "2024" }
]
```

### 6. Research Team

Edit the `team` array:

```javascript
team: [
    { name: "Team Member", affiliation: "University", url: "https://their-website.com" }
]
```

### 7. Students by Course

Edit the `studentsByCourse` array:

```javascript
studentsByCourse: [
    {
        course: "Course Name",
        institution: "University",
        year: "2025",
        repoUrl: "https://github.com/course-repo",
        students: [
            { name: "Student Name", github: "https://student-website.com" }
        ]
    }
]
```

---

## Updating Profile Photo

1. Replace `assets/img/profile.jpg` with your new photo
2. Keep the same filename, or update the reference in `index.html`
3. Recommended: Square image, at least 300x300px

---

## Updating CV

1. Replace `cv/AQ_CV.pdf` with your updated CV
2. Keep the same filename

---

## Updating the DiD Ebook

The ebook is a Quarto project. To update:

1. Make changes in your Quarto project (`diff_diff_test/`)
2. Render the book: `quarto render`
3. Copy the `_book` folder contents to `did-book/`:
   ```bash
   cp -r /path/to/diff_diff_test/_book/* did-book/
   ```

---

## Deploying Changes

After making changes, deploy to GitHub Pages:

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Update working papers and software"

# Push to GitHub
git push origin main
```

Changes typically appear on your website within 1-2 minutes.

**Tip:** If you don't see changes, hard refresh your browser (`Cmd+Shift+R` on Mac, `Ctrl+Shift+R` on Windows).

---

## Adding a New Software Package

1. Add entry to `software` array in `js/data.js`
2. Find the exact PyPI package name from https://pypi.org
3. Use that name for `pypiName` field
4. Download badge will auto-generate

Example for a new package:
```javascript
{
    name: "my-new-package",
    pypiName: "my-new-package",  // Must match PyPI exactly
    description: "Description here",
    language: "Python",
    repoUrl: "https://github.com/username/my-new-package",
    pypiUrl: "https://pypi.org/project/my-new-package/",
    downloads: "loading..."
}
```

---

## Troubleshooting

### Download badges not showing
- Verify the `pypiName` matches the exact PyPI package name
- New packages may take a few hours to appear in badge services
- Check badge URL directly: `https://img.shields.io/pypi/dm/PACKAGE_NAME`

### Website not updating after push
- Wait 1-2 minutes for GitHub Pages to deploy
- Hard refresh browser to clear cache
- Check GitHub repository "Actions" tab for deployment status

### Abstract toggle not working
- Ensure `abstract` field is not empty in `js/data.js`
- Check browser console for JavaScript errors

---

## Design Notes

- **Font:** Source Serif 4 (body), Inter (accents)
- **Colors:** Blue accent (`#1e40af`), defined in CSS variables
- **Layout:** Minimalist typography-focused design (Design A2)

To modify design elements, edit CSS variables in `index.html` under `:root`.
