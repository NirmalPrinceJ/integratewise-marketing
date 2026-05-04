import os

def replace_in_file(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
            
        original_content = content
        
        # Replace AI Twin -> Twin
        content = content.replace("AI Twin", "Twin")
        content = content.replace("AI twin", "Twin")
        
        if content != original_content:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

# Walk through directories
for root, dirs, files in os.walk("."):
    if "node_modules" in root or ".git" in root or ".next" in root:
        continue
    for file in files:
        if file.endswith(".tsx") or file.endswith(".ts") or file.endswith(".md") or file.endswith(".html"):
            replace_in_file(os.path.join(root, file))
            
print("Done!")
