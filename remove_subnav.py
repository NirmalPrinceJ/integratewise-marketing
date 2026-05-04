import os
import re

def remove_subnav(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
            
        original_content = content
        
        # 1. Remove import
        content = re.sub(r'import\s+{\s*SubNav\s*}\s+from\s+"@/components/sub-nav"\n*', '', content)
        
        # 2. Remove component usage
        content = re.sub(r'\s*<SubNav sections={sections}\s*/>\n*', '\n', content)
        
        # 3. Remove sections variable definition (if any and unused)
        # We can just leave `sections` unused, or we can try to remove it.
        # It's usually like: `const sections = [\n ... \n  ]`
        # Let's remove the sections array definition
        content = re.sub(r'\s*const sections\s*=\s*\[[\s\S]*?\]\n*', '\n', content)
        
        # 4. Remove hardcoded <div className="submenu-nav">...</div>
        # We will look for <div className="submenu-nav"> and match until its closing </div>
        # Since it might have nested divs, a simple regex might fail. 
        # But we know it looks like:
        # <div className="submenu-nav">
        #   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8 overflow-x-auto text-sm">
        #     <a ...</a>...
        #   </div>
        # </div>
        content = re.sub(r'\s*{\s*/\*\s*Submenu Navigation\s*\*/\s*}\s*<div className="submenu-nav">[\s\S]*?</div>\s*</div>\n*', '\n', content)

        # just in case there's no comment
        content = re.sub(r'\s*<div className="submenu-nav">[\s\S]*?</div>\s*</div>\n*', '\n', content)

        if content != original_content:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

for root, dirs, files in os.walk("."):
    if "node_modules" in root or ".git" in root or ".next" in root:
        continue
    for file in files:
        if file.endswith(".tsx"):
            remove_subnav(os.path.join(root, file))

print("Done!")
