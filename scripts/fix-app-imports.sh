#!/bin/bash

echo "=== Fixing imports in src/app ==="
find src/app -name "*.tsx" -o -name "*.ts" | while read file; do
  sed -i '' \
    -e "s|from '@/ui/|from '@/components/ui/|g" \
    -e "s|from \"@/ui/|from \"@/components/ui/|g" \
    "$file"
done

echo "=== Fixing imports in src/components (non-proxy files) ==="
# Fix only files that are not in ui/ subdirectory and not our new proxies
find src/components -name "*.tsx" -o -name "*.ts" | grep -v "/ui/" | grep -v "/navigation/" | grep -v "/media/" | grep -v "/story/" | grep -v "/content/" | grep -v "/layout/" | grep -v "/hero.tsx" | while read file; do
  sed -i '' \
    -e "s|from '@/ui/|from '@/components/ui/|g" \
    -e "s|from \"@/ui/|from \"@/components/ui/|g" \
    "$file"
done

echo "=== Counting files fixed ==="
echo "Files in src/app: $(find src/app -name '*.tsx' -o -name '*.ts' | wc -l)"
echo "Non-proxy files in src/components: $(find src/components -name '*.tsx' | grep -v '/ui/' | grep -v '/navigation/' | grep -v '/media/' | grep -v '/story/' | grep -v '/content/' | grep -v '/layout/' | grep -v '/hero.tsx' | wc -l)"
echo "Done!"
