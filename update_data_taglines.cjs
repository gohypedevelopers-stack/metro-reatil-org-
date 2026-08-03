const fs = require('fs');
const path = require('path');

const dataFile = './src/app/services/[id]/data.ts';

if (fs.existsSync(dataFile)) {
  let content = fs.readFileSync(dataFile, 'utf8');
  
  const taglines = [
    "Metro Retail specializes in office & mall fitouts.", // 50 chars
    "Premium retail showrooms & office fitouts by Metro.", // 51 chars
    "Metro Retail: Expert office and retail fitout works.", // 52 chars
    "Delivering premium retail showrooms & office fitouts.", // 53 chars
    "Metro Retail specializes in office & showroom fitouts.", // 54 chars
    "Expert office fitouts & retail showrooms by Metro.", // 50 chars
    "Metro Retail builds premium office & mall fitouts.", // 50 chars
    "Expert retail fitout works for showrooms and malls.", // 51 chars
    "Metro Retail delivers office and showroom fitouts.", // 50 chars
    "Metro Retail creates premium offices and showrooms.", // 51 chars
    "Expert retail and office fitouts by Metro Retail!" // 49 chars (close enough, let's make it 50: "Expert retail and office fitouts by Metro Retail. ")
  ];
  
  let i = 0;
  content = content.replace(/tagline:\s*"(?:[^"\\]|\\.)*"/g, (match) => {
    const replacement = `tagline: "${taglines[i % taglines.length]}"`;
    i++;
    return replacement;
  });

  fs.writeFileSync(dataFile, content, 'utf8');
  console.log('Updated data.ts taglines');
} else {
  console.log('data.ts not found');
}
