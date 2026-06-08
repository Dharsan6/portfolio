# pyrefly: ignore [missing-import]
from PIL import Image
import os

src_path = "/Users/dharsans/.gemini/antigravity-ide/brain/deb869d5-9031-44d5-9529-4706a71d0752/media__1780827758089.jpg"
dest_path = "/Users/dharsans/Portfolio/portfolio/public/profile.jpg"

if not os.path.exists(src_path):
    print(f"Source image not found: {src_path}")
    exit(1)

# Open image
img = Image.open(src_path)
width, height = img.size
print(f"Original image dimensions: {width}x{height}")

# Crop region: focus on face and upper shoulders
# Center is x=384. Let's make a square of size 520.
# Left: 384 - 260 = 124
# Right: 384 + 260 = 644
# Top: The head starts around 250, let's crop from 220 to 220 + 520 = 740
left = 124
top = 220
right = 644
bottom = 740

cropped_img = img.crop((left, top, right, bottom))
print(f"Cropped image dimensions: {cropped_img.size}")

# Resize to high quality 1024x1024
resized_img = cropped_img.resize((1024, 1024), Image.Resampling.LANCZOS)
resized_img.save(dest_path, "JPEG", quality=95)
print(f"Successfully saved high-quality optimized profile to {dest_path}")
