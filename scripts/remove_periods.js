const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/i18n/translations');
fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.ts')) return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace('jasdeep97.dev@gmail.com.', 'jasdeep97.dev@gmail.com')
                   .replace('jasdeep97.dev@gmail.com。', 'jasdeep97.dev@gmail.com');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
