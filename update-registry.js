const fs = require('fs');

const registry = JSON.parse(fs.readFileSync('registry.json', 'utf8'));

// Helper to determine target path
function getTargetPath(filePath) {
  if (filePath.includes('/blocks/')) {
    const filename = filePath.split('/').pop();
    return `blocks/${filename}`;
  }
  if (filePath.includes('/ui/')) {
    const filename = filePath.split('/').pop();
    return `components/ui/${filename}`;
  }
  if (filePath.includes('/components/')) {
    const parts = filePath.replace('src/registry/onu/components/', '').split('/');
    return `components/${parts.join('/')}`;
  }
  return null;
}

// Update each item
registry.items = registry.items.map(item => {
  if (item.files && Array.isArray(item.files)) {
    item.files = item.files.map(file => {
      if (typeof file === 'object' && file.path) {
        const target = getTargetPath(file.path);
       if (target) {
          return { ...file, target };
        }
      }
      return file;
    });
  }
  return item;
});

fs.writeFileSync('registry.json', JSON.stringify(registry, null, 2) + '\n');
console.log('✅ Updated registry.json with target paths');
console.log(`   Total items: ${registry.items.length}`);
console.log(`   Files with targets: ${registry.items.reduce((acc, item) => acc + (item.files?.filter(f => f.target)?.length || 0), 0)}`);
