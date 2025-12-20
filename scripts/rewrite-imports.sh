#!/bin/bash

echo "=== Rewriting imports in UI files ==="
find src/registry/onu/ui -name "*.tsx" -type f -exec sed -i '' \
  -e "s|from '@/ui/|from '@/components/ui/|g" \
  -e "s|from \"@/ui/|from \"@/components/ui/|g" \
  {} +

echo "=== Rewriting imports in components files ==="
find src/registry/onu/components -name "*.tsx" -type f -exec sed -i '' \
  -e "s|from '@/ui/|from '@/components/ui/|g" \
  -e "s|from \"@/ui/|from \"@/components/ui/|g" \
  {} +

echo "=== Rewriting imports in blocks files ==="
find src/registry/onu/blocks -name "*.tsx" -type f -exec sed -i '' \
  -e "s|from '@/ui/|from '@/components/ui/|g" \
  -e "s|from \"@/ui/|from \"@/components/ui/|g" \
  -e "s|from '@blocks/|from '@/blocks/|g" \
  -e "s|from \"@blocks/|from \"@/blocks/|g" \
  {} +

echo "=== Counting updated files ==="
echo "UI files: $(find src/registry/onu/ui -name '*.tsx' | wc -l)"
echo "Component files: $(find src/registry/onu/components -name '*.tsx' | wc -l)"
echo "Block files: $(find src/registry/onu/blocks -name '*.tsx' | wc -l)"
echo "Done!"
