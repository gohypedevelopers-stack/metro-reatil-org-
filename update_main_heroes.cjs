const fs = require('fs');

const pages = [
  {
    file: './src/app/about/page.tsx',
    search: /Over 25\+ years of experience handling complete MEP, civil, and interior works with in-house manufacturing of modular fixtures\./,
    replace: 'Expert retail showrooms and office fitouts by Metro.' // 52 chars
  },
  {
    file: './src/app/blog/page.tsx',
    search: /Expert advice, design trends, and project insights from Metro Retail Solutions' leading fitout and joinery specialists\./,
    replace: 'Insights on retail and office fitouts from Metro Retail.' // 56 chars
  },
  {
    file: './src/app/careers/page.tsx',
    search: /Join our team of passionate designers, engineers, and craftsmen building the future of immersive spaces\./,
    replace: 'Join Metro Retail to build premium showrooms & offices.' // 55 chars
  },
  {
    file: './src/app/contact/page.tsx',
    search: /Whether you have a specific project in mind or just want to learn more about our services, we are here to help\./,
    replace: 'Contact Metro Retail for office and showroom fitouts.' // 53 chars
  }
];

pages.forEach(p => {
  if (fs.existsSync(p.file)) {
    let content = fs.readFileSync(p.file, 'utf8');
    content = content.replace(p.search, p.replace);
    fs.writeFileSync(p.file, content, 'utf8');
    console.log('Updated ' + p.file);
  }
});
