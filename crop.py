from PIL import Image
import sys

img_path = sys.argv[1]
out_path = sys.argv[2]

img = Image.open(img_path)
w, h = img.size

# We want the right half
cropped = img.crop((w//2, 0, w, h))
cropped.save(out_path)
print("Cropped successfully to", out_path)
