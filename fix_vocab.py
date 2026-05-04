import os
import re

def replace_in_file(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
            
        original_content = content
        
        # Replace Workbench -> Workspace
        content = content.replace("Workbench", "Workspace")
        content = content.replace("workbench", "workspace")
        
        # Replace Twin AI -> Twin
        content = content.replace("Twin AI", "Twin")
        
        # Replace 70+ Connectors -> 16 live, 40+ beta connectors
        content = content.replace("70+ Connectors", "16 live, 40+ in beta connectors")
        content = content.replace("70+ connectors", "16 live, 40+ in beta connectors")
        
        # Replace Human API phrasing
        # We already fixed some, but let's do a more general fix for "You Are the Human API"
        content = content.replace('"You Are the Human API"', '"Stop being the human API between your tools."')
        content = content.replace('Stop being the Human API', 'Stop being the human API between your tools.')
        # also lowercase human API everywhere else just in case, but let's be careful not to break tags
        
        # Replace glass-morphism cards -> no glassmorphism on cards
        content = content.replace("glass-morphism cards", "no glassmorphism on cards, only on floating nav bar")
        
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
