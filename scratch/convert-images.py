import os
from PIL import Image

brain_dir = "/Users/nirmal/.gemini/antigravity/brain/45608d73-3ef8-4c9d-b878-b45e66df9063"
workspace_dir = "/Users/nirmal/Github/integratewise-marketing"

# Image mappings: source file (in brain_dir) -> target list of relative paths
mappings = {
    "media__1780501737207.png": [
        "images/portfolio-overview.webp",
        "images/hero-banner.webp",
        "v64_source_temp/app/public/images/portfolio-overview.webp",
        "v64_source_temp/app/public/images/hero-banner.webp"
    ],
    "media__1780501754557.png": [
        "images/morning-brief.webp",
        "images/twin-workbench.webp",
        "v64_source_temp/app/public/images/morning-brief.webp",
        "v64_source_temp/app/public/images/twin-workbench.webp"
    ],
    "media__1780501754559.png": [
        "images/governance-view.webp",
        "v64_source_temp/app/public/images/governance-view.webp"
    ]
}

def convert_and_copy():
    for source_name, targets in mappings.items():
        source_path = os.path.join(brain_dir, source_name)
        if not os.path.exists(source_path):
            print(f"Error: Source file {source_path} does not exist!")
            continue
        
        print(f"Converting {source_name}...")
        with Image.open(source_path) as img:
            # We want to convert to RGB to ensure clean WebP encoding without issues
            rgb_img = img.convert("RGB")
            
            for target_rel in targets:
                target_path = os.path.join(workspace_dir, target_rel)
                # Ensure parent directory exists
                os.makedirs(os.path.dirname(target_path), exist_ok=True)
                
                # Save as WebP with high quality (e.g. 90)
                rgb_img.save(target_path, "WEBP", quality=90)
                print(f"  Saved to {target_path} (size={os.path.getsize(target_path)} bytes)")

if __name__ == "__main__":
    convert_and_copy()
    print("All image conversions completed successfully!")
