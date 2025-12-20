#!/bin/bash

# Create blocks proxies
for file in src/registry/onu/blocks/*.tsx; do
  filename=$(basename "$file")
  target="src/blocks/$filename"
  
  if grep -q "export default" "$file"; then
    cat > "$target" << PROXY
export { default } from '@/onu/blocks/$(basename "$file" .tsx)';
export * from '@/onu/blocks/$(basename "$file" .tsx)';
PROXY
  else
    cat > "$target" << PROXY
export * from '@/onu/blocks/$(basename "$file" .tsx)';
PROXY
  fi
done

# Create component proxies (only top-level .tsx files)
for file in src/registry/onu/components/*.tsx; do
  [ -f "$file" ] || continue
  filename=$(basename "$file")
  target="src/components/$filename"
  
  if grep -q "export default" "$file"; then
    cat > "$target" << PROXY
export { default } from '@/onu/components/$(basename "$file" .tsx)';
export * from '@/onu/components/$(basename "$file" .tsx)';
PROXY
  else
    cat > "$target" << PROXY
export * from '@/onu/components/$(basename "$file" .tsx)';
PROXY
  fi
done

# Create component folder proxies
for dir in src/registry/onu/components/*/; do
  [ -d "$dir" ] || continue
  dirname=$(basename "$dir")
  mkdir -p "src/components/$dirname"
  
  for file in "$dir"*.tsx; do
    [ -f "$file" ] || continue
    filename=$(basename "$file")
    target="src/components/$dirname/$filename"
    
    if grep -q "export default" "$file"; then
      cat > "$target" << PROXY
export { default } from '@/onu/components/$dirname/$(basename "$file" .tsx)';
export * from '@/onu/components/$dirname/$(basename "$file" .tsx)';
PROXY
    else
      cat > "$target" << PROXY
export * from '@/onu/components/$dirname/$(basename "$file" .tsx)';
PROXY
    fi
  done
done

echo "Blocks: $(ls src/blocks/*.tsx 2>/dev/null | wc -l)"
echo "Components: $(find src/components -name '*.tsx' -not -path '*/ui/*' 2>/dev/null | wc -l)"
