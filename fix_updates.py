with open("UPDATES.md", "r") as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if line.startswith("### 2. **Changelog Page**"):
        skip = True
    elif line.startswith("### 3. **Resources Page**"):
        skip = True
    elif line.startswith("### 4. **Blog Page**"):
        skip = True
    elif line.startswith("### 5. **Docs Page**"):
        skip = True
    elif line.startswith("## Design & UX Consistency"):
        skip = False
        
    if line.startswith("## Page Routes"):
        skip = True
    elif line.startswith("## Navigation Integration"):
        skip = False

    if line.startswith("## Build Status"):
        skip = True
    elif line.startswith("## Next Steps (Optional)"):
        skip = True
    elif line.startswith("---"):
        skip = False

    if not skip:
        new_lines.append(line)

with open("UPDATES.md", "w") as f:
    f.writelines(new_lines)

