#!/bin/bash
for file in src/registry/onu/ui/*.tsx; do
  filename=$(basename "$file")
  target="src/components/ui/$filename"
  
  # Check if source has default export
  if grep -q "export default" "$file"; then
    cat > "$target" << 'PROXY'
export { default } from '@/onu/ui/${filename%.tsx}';
export * from '@/onu/ui/${filename%.tsx}';
PROXY
  else
    cat > "$target" << 'PROXY'
export * from '@/onu/ui/${filename%.tsx}';
PROXY
  fi
  
  # Replace placeholders
  sed -i '' "s/\${filename%.tsx}/$(basename "$file" .tsx)/g" "$target"
done
echo "Created $(ls src/components/ui/*.tsx 2>/dev/null | wc -l) UI proxy files"
