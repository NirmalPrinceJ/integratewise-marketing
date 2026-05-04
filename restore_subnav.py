import os
import re

def restore_subnav(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
            
        original_content = content
        
        # Check if Header is in the file
        if '<Header />' in content and 'import { Header }' in content:
            # Add import if missing
            if 'import { SubNav }' not in content:
                content = re.sub(r'(import { Header }.*?\n)', r'\1import { SubNav } from "@/components/sub-nav"\n', content)
            
            # Add <SubNav /> after <Header />
            if '<SubNav />' not in content and '<SubNav' not in content:
                content = re.sub(r'(<Header />\s*)', r'\1<SubNav />\n      ', content)
        
        if content != original_content:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Restored SubNav in {filepath}")
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

for root, dirs, files in os.walk("."):
    if "node_modules" in root or ".git" in root or ".next" in root:
        continue
    for file in files:
        if file.endswith("page.tsx"):
            restore_subnav(os.path.join(root, file))

print("Done!")
