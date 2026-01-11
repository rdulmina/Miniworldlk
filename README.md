# Miniworld Entertainment - Static Website

This website has been converted from PHP to static HTML for GitHub Pages hosting.

## What was changed:

### 1. PHP to HTML conversion:
- `index.php` → `index.html`
- `pages/packages/packages.php` → `pages/packages/packages.html`
- `pages/services/main.php` → `pages/services/main.html`
- `pages/contact/contact.php` → `pages/contact/contact.html`
- `pages/galary/galary.php` → `pages/galary/galary.html`
- All individual service files (e.g., `bouncycastle.php` → `bouncycastle.html`)

### 2. Navigation updates:
- Updated all internal links from `.php` to `.html`
- Updated brand logo links to point to `index.html`

### 3. PHP functionality replacements:
- **Session management**: Replaced PHP sessions with browser localStorage for service category selection
- **Header/Footer includes**: Replaced `<?php include()?>` with inline HTML content
- **Dynamic content**: Service navigation now uses JavaScript with localStorage

### 4. JavaScript updates:
- Service category selection now stores data in `localStorage.setItem('selectedCategory', category)`
- Service pages load using the stored category from `localStorage.getItem('selectedCategory')`
- Removed AJAX calls to `setcategory.php`

## How to host on GitHub Pages:

1. **Create a new GitHub repository**
2. **Upload all files** (except PHP files and php/ folder)
3. **Enable GitHub Pages** in repository settings
4. **Set source** to main branch
5. **Access your site** at `https://yourusername.github.io/repositoryname`

## Files that have been removed:
- All `.php` files (✅ CLEANED UP)
- `php/` folder (✅ CLEANED UP) 
- `header.php` (✅ CLEANED UP)
- `footer.php` (✅ CLEANED UP)

## Files ready for GitHub Pages:
✅ **Main Files:**
- `index.html` (Homepage)
- `README.md` (This file)

✅ **Page Files:**
- `pages/packages/packages.html`
- `pages/services/main.html` 
- `pages/contact/contact.html`
- `pages/galary/galary.html`

✅ **Service Content Files:**
- `pages/services/bouncycastle.html`
- `pages/services/bubblehouse.html` 
- `pages/services/bubblemachine.html`
- `pages/services/candyfloss.html`
- `pages/services/cartoon.html`
- `pages/services/decoration.html`
- `pages/services/facepainting.html`
- `pages/services/Games.html`
- `pages/services/gasballon.html`
- `pages/services/magic.html`
- `pages/services/magicballon.html`
- `pages/services/music.html`
- `pages/services/Photography.html`
- `pages/services/pinata.html`
- `pages/services/popcorn.html`
- `pages/services/Promotion.html`
- `pages/services/tableandchairs.html`
- `pages/services/table_items.html`
- `pages/services/welcome.html`

✅ **Assets:** All CSS, JS, images, and fonts remain unchanged

## Website is now 100% static and GitHub Pages ready! 🎉

## Important notes:
- The website is now fully static and doesn't require a PHP server
- All dynamic functionality has been replaced with client-side JavaScript
- Service navigation still works using browser localStorage
- All external resources (CDN links) remain unchanged
- The website is mobile-responsive and retains all original styling

## Contact Information:
- Phone: 0777477488, 0718188606, 0771886320  
- Email: miniworld34@gmail.com
- Address: 944/33/A Pannipitiya Rd, Baththaramulla

---
© 2021 Miniworld Entertainment. All rights reserved.
