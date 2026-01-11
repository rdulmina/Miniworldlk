# Quick Guide: Adding New Images to Services

## For Beginners - Step by Step

### Method 1: Manual HTML Editing (Recommended for Small Updates)

#### Step 1: Upload Your Image
1. Navigate to the appropriate folder: `img/galary/[service-name]/`
2. Upload your new image file
3. Note the exact filename (including extension: .jpg, .png, etc.)

#### Step 2: Edit the Service Page
1. Open the service HTML file: `pages/services/[service-name].html`
2. Find the section with existing images (look for `<div class="row">`)
3. Copy one of the existing image divs
4. Paste it and update the filename

**Example:**
```html
<!-- Existing image -->
<div class="col-md-4 col-sm-6 photodiv">
    <a data-fancybox="gallery" href="../../img/galary/gasballon/image1.jpg">
        <img class="lazy" data-src="../../img/galary/gasballon/image1.jpg" alt="Gas balloon decoration">
    </a>
</div>

<!-- Your NEW image (copy and modify above) -->
<div class="col-md-4 col-sm-6 photodiv">
    <a data-fancybox="gallery" href="../../img/galary/gasballon/new-image.jpg">
        <img class="lazy" data-src="../../img/galary/gasballon/new-image.jpg" alt="Gas balloon decoration">
    </a>
</div>
```

#### Step 3: Update the Details
Replace these parts in your copied code:
- `new-image.jpg` → Your actual filename
- `alt="..."` → A description of your image
- Keep the path the same: `../../img/galary/[service-name]/`

#### Step 4: Save and Test
1. Save the HTML file
2. Open the website in a browser
3. Navigate to the service page
4. Verify your new image appears

---

### Method 2: Bulk Image Update (For Adding Many Images)

If you need to add 10+ images at once:

#### Step 1: Get All Filenames
1. Open PowerShell in the image folder
2. Run this command to list all images:
```powershell
Get-ChildItem -Name | Where-Object {$_ -match '\.(jpg|jpeg|png|gif)$'}
```

#### Step 2: Generate HTML Code
Use this PowerShell script to automatically generate the HTML:

```powershell
# Change these variables:
$serviceName = "gasballon"  # Change to your service name
$folderPath = "D:\Downloads\Miniworldlk\img\galary\$serviceName"

# Get all images
$images = Get-ChildItem -Path $folderPath -Filter *.* | Where-Object {
    $_.Extension -match '\.(jpg|jpeg|png|gif)$'
}

# Generate HTML
$html = ""
foreach ($image in $images) {
    $filename = $image.Name
    $html += @"
        <div class="col-md-4 col-sm-6 photodiv">
            <a data-fancybox="gallery" href="../../img/galary/$serviceName/$filename">
                <img class="lazy" data-src="../../img/galary/$serviceName/$filename" alt="$serviceName service">
            </a>
        </div>

"@
}

# Output to file
$html | Out-File -FilePath "new-images.txt" -Encoding UTF8
Write-Host "HTML generated! Check new-images.txt"
```

#### Step 3: Copy and Paste
1. Run the script above
2. Open `new-images.txt`
3. Copy all the generated HTML
4. Paste it into your service HTML file (inside the `<div class="row">`)

---

### Image Best Practices

#### File Naming
✅ **GOOD:**
- `balloon-arch-red.jpg`
- `kids-party-setup.png`
- `decoration-2024-01.jpg`

❌ **AVOID:**
- `Image (1).jpg` (spaces and parentheses)
- `DSC_1234.jpg` (not descriptive)
- `balloon arch - red!!.jpg` (special characters)

#### Image Optimization
Before uploading images, optimize them:
1. **Resize** to max 1920x1080px (HD is enough)
2. **Compress** using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - Photoshop "Save for Web"
3. **Format**: Use JPG for photos, PNG for graphics/logos

#### Alt Text
Always write descriptive alt text:
```html
<!-- Good alt text -->
<img ... alt="Red and blue balloon arch for birthday party">
<img ... alt="Kids jumping on bouncy castle">
<img ... alt="Face painting butterfly design">

<!-- Bad alt text -->
<img ... alt="image1">
<img ... alt="party">
```

---

### Service Name Reference

Match your folder and service name:

| Service Display Name | Folder Name | HTML File |
|---------------------|-------------|-----------|
| Bouncy Castle | `bouncycastle` | `bouncycastle.html` |
| Gas Balloon | `gasballon` | `gasballon.html` |
| Photography | `photography` | `Photography.html` |
| Face Painting | `facepainting` | `facepainting.html` |
| Decoration | `decoration` | `decoration.html` |
| Magic Balloon | `magic_ballon` | `magicballon.html` |
| Pop Corn | `popcorn` | `popcorn.html` |
| Pinata | `pinata` | `pinata.html` |
| Magic Show | `magic` | `magic.html` |
| Music & DJ | `music` | `music.html` |
| Cartoon Characters | `cartoon` | `cartoon.html` |
| Candy Floss | `candyfloss` | `candyfloss.html` |
| Games | `games` | `Games.html` |
| Promotion Girls | `promotion` | `Promotion.html` |
| Table Items | `table_items` | `table_items.html` |
| Tiffany Chairs | `table` | `tableandchairs.html` |
| Welcome Boards | `welcome` | `welcome.html` |

---

### Troubleshooting

#### Images Not Showing?
1. **Check the path**: Make sure `../../img/galary/[service]/` is correct
2. **Check the filename**: Must match exactly (case-sensitive!)
3. **Check file extension**: .jpg vs .jpeg vs .JPG
4. **Clear browser cache**: Press Ctrl+F5 to hard refresh

#### Images Show Broken Icon?
1. The file doesn't exist in the folder
2. The filename is misspelled
3. The path is incorrect

#### Lightbox (Fancybox) Not Working?
1. Make sure `data-fancybox="gallery"` is present
2. Check that jQuery and Fancybox JS files are loaded
3. Open browser console (F12) and check for JavaScript errors

---

### Getting Help

If you're stuck:
1. Compare your code with existing working images in the same file
2. Check the browser console for errors (F12 → Console tab)
3. Verify the image file exists in the correct folder
4. Make sure you saved the HTML file after editing

---

## Example: Complete Service Page Structure

Here's what a complete service page should look like:

```html
<div class="side-body container">
     <h2>Service Name</h2>
      <div class="preloader">
          <center>
               <i class="fa fa-spinner fa-pulse fa-5x fa-fw" style="font-size: 35px;"></i>
               <span class="sr-only">Loading...</span>
          </center>
     </div>
     <div class="row">
        <!-- Static image gallery -->
        <div class="col-md-4 col-sm-6 photodiv">
            <a data-fancybox="gallery" href="../../img/galary/service/image1.jpg">
                <img class="lazy" data-src="../../img/galary/service/image1.jpg" alt="Description">
            </a>
        </div>
        <div class="col-md-4 col-sm-6 photodiv">
            <a data-fancybox="gallery" href="../../img/galary/service/image2.jpg">
                <img class="lazy" data-src="../../img/galary/service/image2.jpg" alt="Description">
            </a>
        </div>
        <div class="col-md-4 col-sm-6 photodiv">
            <a data-fancybox="gallery" href="../../img/galary/service/image3.jpg">
                <img class="lazy" data-src="../../img/galary/service/image3.jpg" alt="Description">
            </a>
        </div>
        <!-- Add more images here -->
     </div>
</div>
<script>
     $('.preloader').fadeOut(3000);
</script>
<script type="text/javascript">
      (function () {
        var ll = new LazyLoad({
            effect: "fadeIn",
            effectTime: 5000,
            threshold: 0
        });
    }()); 
</script>
```

---

**Need more help?** Refer to `CONVERSION_SUMMARY.md` for technical details.
