import os
import re

def remove_subnav(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
            
        original_content = content
        
        # Remove import
        content = re.sub(r'import\s+{\s*SubNav\s*}\s+from\s+"@/components/sub-nav"\n*', '', content)
        
        # Remove component usage
        content = re.sub(r'\s*<SubNav\s*/>\n*', '\n', content)
        content = re.sub(r'\s*<SubNav sections={sections}\s*/>\n*', '\n', content)
        
        if content != original_content:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Removed SubNav from {filepath}")
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

for root, dirs, files in os.walk("."):
    if "node_modules" in root or ".git" in root or ".next" in root:
        continue
    for file in files:
        if file.endswith("page.tsx"):
            remove_subnav(os.path.join(root, file))

print("Done!")
