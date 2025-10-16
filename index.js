const fs = require('fs');
const path = require('path');

const config = {
  host: "https://kjsone.com",
  // 忽略的文件/目录列表
  ignore: [
    '.DS_Store',
    '.htaccess',
    '404.html',
    'CNAME',
    'LICENSE',
    'README.md',
    'robots.txt',
    'sitemap.xml'
  ],
  // 文件扩展名白名单
  extensions: [
    '.html',
    '.css',
    '.js',
    '.json',
    '.xml',
    '.txt',
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.svg',
    '.webp',
    '.woff',
    '.woff2',
    '.ttf',
    '.eot',
    '.map'
  ]
};

// 递归遍历目录并生成URL列表
function generateUrlList(dir, urlList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      generateUrlList(filePath, urlList);
    } else {
      const relativePath = path.relative('public', filePath).replace(/\\/g, '/');
      const extension = path.extname(file).toLowerCase();

      // 应用过滤规则
      const shouldInclude =
        !config.ignore.includes(file) &&
        !config.ignore.includes(relativePath) &&
        config.extensions.includes(extension);

      if (shouldInclude) {
        // 对路径的每个部分进行URL编码（特别是处理中文）
        const encodedPath = relativePath.split('/')
          .map(segment => encodeURIComponent(segment))
          .join('/');

        urlList.push(`${config.host}/${encodedPath}`);
      }
    }
  });

  return urlList;
}

// 主执行函数
function main() {
  try {
    const publicDir = path.join(__dirname, 'public');
    if (!fs.existsSync(publicDir)) {
      throw new Error('public 目录不存在，请先运行 Hugo 生成静态文件');
    }

    const urls = generateUrlList(publicDir);

    // 按URL排序
    urls.sort();

    // 写入文本文件
    const outputPath = path.join(__dirname, 'static-resources.txt');
    fs.writeFileSync(outputPath, urls.join('\n'));

    console.log(`✅ 成功生成资源列表！`);
    console.log(`📄 资源数量: ${urls.length}`);
    console.log(`📝 输出路径: ${outputPath}`);

    // 显示一些示例（包含中文的URL）
    const sampleUrls = urls.filter(url => /[\u4e00-\u9fa5]/.test(decodeURIComponent(url)));
    if (sampleUrls.length > 0) {
      console.log('\n包含中文的URL示例：');
      console.log(sampleUrls.slice(0, 3).join('\n'));
    }

  } catch (error) {
    console.error(`❌ 生成失败: ${error.message}`);
    process.exit(1);
  }
}

// 执行主函数
main();