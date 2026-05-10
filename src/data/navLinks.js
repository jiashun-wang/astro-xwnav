/**
统一分类opensource
网站：
github
baidu.com
谷歌
具体按照以下样式生成，使用“JavaScript风格格式+单引号”，不要添加"icon字段"和"[]""      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。'
      shortDesc: '代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      },
描述根据网站实际内容,专业,准确,介绍背景独特优势等等,不要太刻板,臃肿,重复
自动下载图标脚本执行:
npx tsx icon-system/0icon.ts
*/
/**
 * 网站分类列表
 * @type {Array<{id: string, name: string}>}
 */
export const categories = [
  {
    id: 'opensource',
    name: '开源平台', icon: '/icons/category/opensource.svg',
  },
  {
    id: 'studying',
    name: '个人其他站点', icon: '/icons/category/studying.svg',
  },
  {
    id: 'pages',
    name: '静态部署平台', icon: '/icons/category/pages.svg',
  },
  {
    id: 'academic',
    name: '学术研究', icon: '/icons/category/academic.svg',
  },
  {
    id: 'tech',
    name: '技术社区', icon: '/icons/category/tech.svg',
  },
  {
    id: 'learning',
    name: '学习平台', icon: '/icons/category/learning.svg',
  },
];
/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, category: string}>}
 */
export const sites = [
  // 开源平台      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。',
      shortDesc: '全球最大代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      icon: '/icons/github.webp',
      },
      {
      id: 'gitlab',
      title: 'GitLab',
      description: '一体化 DevOps 平台，提供完整的软件开发生命周期管理，从源代码管理到 CI/CD、安全扫描和部署，支持自托管与云端服务。',
      shortDesc: '一体化 DevOps 平台。',
      url: 'https://gitlab.com/',
      category: 'opensource',
      icon: '/icons/gitlab.webp',
      },
      {
      id: 'gitee',
      title: 'Gitee',
      description: '中国领先的代码托管平台，提供 Git 代码托管、项目管理、代码质量检测等服务，特别适合国内开发者和企业使用。',
      shortDesc: '国内代码托管平台。',
      url: 'https://gitee.com/',
      category: 'opensource',
      icon: '/icons/gitee.webp',
      },
      {
      id: 'sourceforge',
      title: 'SourceForge',
      description: '老牌开源软件托管平台，提供软件下载、版本控制和项目管理服务，是许多知名开源项目的发源地。',
      shortDesc: '老牌开源软件托管。',
      url: 'https://sourceforge.net/',
      category: 'opensource',
      icon: '/icons/sourceforge.webp',
      },
      {
      id: 'bitbucket',
      title: 'Bitbucket',
      description: 'Atlassian 提供的 Git 代码托管服务，与 Jira、Confluence 等工具深度集成，适合团队协作和企业级开发。',
      shortDesc: 'Atlassian 代码托管。',
      url: 'https://bitbucket.org/',
      category: 'opensource',
      icon: '/icons/bitbucket.webp',
      },
  // 个人其他站点      
      {
      id: 'zywede',
      title: 'zywe.de',
      description: '个人主页与知识集散地。作为技术爱好者，展示自己的全部项目、实践与分享的中心。',
      shortDesc: 'zywe个人官网',
      url: 'https://zywe.de/',
      category: 'studying',
      icon: '/icons/zywede.webp',
      },
      {
      id: 'dh_zywede',
      title: 'nav.zywe.de',
      description: '专属导航页，这里汇聚了日常学习、开发与管理服务器所需的所有高效工具与资源链接，快速触达各项在线服务的便捷入口，确保学习与实践的流畅性。',
      shortDesc: '让每个人都有自己的网站式收藏夹',
      url: 'https://dh.zywe.de/',
      category: 'studying',
      icon: '/icons/dh-zywede.webp',
      },
  // 静态部署平台      
      {
      id: 'github-pages',
      title: 'GitHub Pages',
      description: 'GitHub 提供的静态网站托管服务，支持自定义域名与 HTTPS，可直接从仓库部署，适合个人主页、项目文档与开源展示，集成 Git 工作流，极简且可靠。',
      shortDesc: 'Git 驱动的静态网站托管。',
      url: 'https://pages.github.com/',
      category: 'pages',
      icon: '/icons/github-pages.webp',
      },
      {
      id: 'cloudflare-pages',
      title: 'Cloudflare Pages',
      description: '由全球领先的 CDN 提供商 Cloudflare 推出的前端部署平台，支持 Jamstack 架构，内置构建优化、边缘函数与自动缓存更新，适合高性能 Web 应用与博客。',
      shortDesc: 'CDN 优化的前端部署平台。',
      url: 'https://pages.cloudflare.com/',
      category: 'pages',
      icon: '/icons/cloudflare-pages.webp',
      },
      {
      id: 'vercel',
      title: 'Vercel',
      description: '专为前端开发打造的现代部署平台，由 Next.js 背后团队开发，支持 Serverless 架构、实时预览与多分支部署，适合敏捷开发、商业级应用与个性化项目。',
      shortDesc: 'Next.js 团队出品的部署平台。',
      url: 'https://vercel.com/',
      category: 'pages',
      icon: '/icons/vercel.webp',
      },
      {
      id: 'netlify',
      title: 'Netlify',
      description: '现代化的 Web 开发平台，提供自动化构建、部署和托管服务，支持无服务器函数、表单处理和身份验证，适合静态网站和前端应用。',
      shortDesc: '现代化 Web 开发平台。',
      url: 'https://www.netlify.com/',
      category: 'pages',
      icon: '/icons/netlify.webp',
      },
  // 学术研究      
      {
      id: 'arxiv',
      title: 'arXiv',
      description: '康奈尔大学运营的预印本服务器，覆盖物理学、数学、计算机科学、统计学等学科，是学术研究的前沿阵地，提供最新研究成果的快速发布与获取。',
      shortDesc: '学术预印本服务器。',
      url: 'https://arxiv.org/',
      category: 'academic',
      icon: '/icons/arxiv.webp',
      },
      {
      id: 'semanticscholar',
      title: 'Semantic Scholar',
      description: '由艾伦人工智能研究所开发的学术搜索引擎，利用 AI 技术提取论文核心内容，提供引用网络、研究趋势分析，帮助学者高效发现相关文献。',
      shortDesc: 'AI 驱动的学术搜索引擎。',
      url: 'https://www.semanticscholar.org/',
      category: 'academic',
      icon: '/icons/semanticscholar.webp',
      },
      {
      id: 'connectedpapers',
      title: 'Connected Papers',
      description: '基于论文引用关系构建的可视化工具，通过图谱展示学术文献间的联系，帮助研究者快速了解领域脉络、发现关键论文和新兴研究方向。',
      shortDesc: '论文关系可视化工具。',
      url: 'https://www.connectedpapers.com/',
      category: 'academic',
      icon: '/icons/connectedpapers.webp',
      },
      {
      id: 'paperswithcode',
      title: 'Papers with Code',
      description: '将机器学习论文与其实现代码链接起来的平台，覆盖计算机视觉、自然语言处理等前沿领域，加速研究成果的复现与应用。',
      shortDesc: '论文与代码结合的平台。',
      url: 'https://paperswithcode.com/',
      category: 'academic',
      icon: '/icons/paperswithcode.webp',
      },
      {
      id: 'scholar',
      title: 'Google Scholar',
      description: '谷歌学术搜索，全球最大的学术文献搜索引擎，涵盖期刊论文、学位论文、书籍、技术报告等各类学术资源，支持引用追踪和学术档案。',
      shortDesc: '谷歌学术搜索引擎。',
      url: 'https://scholar.google.com/',
      category: 'academic',
      icon: '/icons/scholar.webp',
      },
      {
      id: 'pubmed',
      title: 'PubMed',
      description: '美国国家医学图书馆提供的生物医学文献数据库，收录 MEDLINE 等数据库的文献，是医学和生命科学研究的重要资源。',
      shortDesc: '生物医学文献数据库。',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
      category: 'academic',
      icon: '/icons/pubmed.webp',
      },
      {
      id: 'ieee',
      title: 'IEEE Xplore',
      description: '电气电子工程师学会的数字图书馆，提供计算机科学、电子工程、通信技术等领域的高质量期刊、会议论文和技术标准。',
      shortDesc: '电气电子工程数字图书馆。',
      url: 'https://ieeexplore.ieee.org/',
      category: 'academic',
      icon: '/icons/ieee.webp',
      },
      {
      id: 'acm',
      title: 'ACM Digital Library',
      description: '计算机协会的数字图书馆，收录计算机科学领域的顶级期刊、会议论文和技术杂志，是计算机学术研究的重要资源。',
      shortDesc: '计算机科学数字图书馆。',
      url: 'https://dl.acm.org/',
      category: 'academic',
      icon: '/icons/acm.webp',
      },
  // 技术社区      
      {
      id: 'stackoverflow',
      title: 'Stack Overflow',
      description: '全球最大的程序员问答社区，涵盖各种编程语言、框架和工具的问题解答，是开发者解决技术难题、分享经验的首选平台。',
      shortDesc: '程序员问答社区。',
      url: 'https://stackoverflow.com/',
      category: 'tech',
      icon: '/icons/stackoverflow.webp',
      },
      {
      id: 'stackexchange',
      title: 'Stack Exchange',
      description: 'Stack Overflow 的姊妹网络，包含多个专业领域的问答社区，如数学、物理、计算机科学等，提供高质量的专业知识交流。',
      shortDesc: '多领域问答网络。',
      url: 'https://stackexchange.com/',
      category: 'tech',
      icon: '/icons/stackexchange.webp',
      },
      {
      id: 'devto',
      title: 'DEV Community',
      description: '面向开发者的社交平台，鼓励技术分享、项目展示和职业成长，涵盖编程教程、开发经验、行业趋势等多样化内容。',
      shortDesc: '开发者社交平台。',
      url: 'https://dev.to/',
      category: 'tech',
      icon: '/icons/devto.webp',
      },
      {
      id: 'hackernews',
      title: 'Hacker News',
      description: 'Y Combinator 运营的技术新闻聚合社区，聚焦计算机科学、创业和技术创新，以简洁界面和高质量讨论著称。',
      shortDesc: '技术新闻社区。',
      url: 'https://news.ycombinator.com/',
      category: 'tech',
      icon: '/icons/hackernews.webp',
      },
      {
      id: 'reddit-programming',
      title: 'r/programming',
      description: 'Reddit 上的编程社区，分享编程新闻、教程、项目和讨论，涵盖各种编程语言和技术栈，活跃度高且内容丰富。',
      shortDesc: 'Reddit 编程社区。',
      url: 'https://www.reddit.com/r/programming/',
      category: 'tech',
      icon: '/icons/reddit-programming.webp',
      },
      {
      id: 'v2ex',
      title: 'V2EX',
      description: '创意工作者社区，讨论技术、创业、设计等话题，以高质量的技术讨论和友好的社区氛围著称。',
      shortDesc: '创意工作者社区。',
      url: 'https://www.v2ex.com/',
      category: 'tech',
      icon: '/icons/v2ex.webp',
      },
  // 学习平台      
      {
      id: 'coursera',
      title: 'Coursera',
      description: '与世界顶尖大学和公司合作提供在线课程的平台，涵盖计算机科学、数据科学、商业等多个领域，提供认证证书和学位项目。',
      shortDesc: '在线课程平台。',
      url: 'https://www.coursera.org/',
      category: 'learning',
      icon: '/icons/coursera.webp',
      },
      {
      id: 'edx',
      title: 'edX',
      description: '由哈佛大学和麻省理工学院创立的非营利在线学习平台，提供大学级别的课程，涵盖计算机、工程、人文等多个学科领域。',
      shortDesc: '大学在线课程平台。',
      url: 'https://www.edx.org/',
      category: 'learning',
      icon: '/icons/edx.webp',
      },
      {
      id: 'khanacademy',
      title: 'Khan Academy',
      description: '非营利教育组织，提供免费的在线课程、练习和教学视频，涵盖数学、科学、计算机编程等多个学科，适合各年龄段学习者。',
      shortDesc: '免费在线教育平台。',
      url: 'https://www.khanacademy.org/',
      category: 'learning',
      icon: '/icons/khanacademy.webp',
      },
      {
      id: 'freecodecamp',
      title: 'freeCodeCamp',
      description: '开源的非营利组织，提供完全免费的编程课程和项目实践，涵盖 Web 开发、数据科学、机器学习等方向，帮助学习者获得实际技能。',
      shortDesc: '免费编程学习平台。',
      url: 'https://www.freecodecamp.org/',
      category: 'learning',
      icon: '/icons/freecodecamp.webp',
      },
      {
      id: 'udemy',
      title: 'Udemy',
      description: '全球最大的在线学习市场，提供各种技能课程，从编程到商业技能，由行业专家授课，适合职业发展和个人兴趣学习。',
      shortDesc: '在线学习市场。',
      url: 'https://www.udemy.com/',
      category: 'learning',
      icon: '/icons/udemy.webp',
      },
      {
      id: 'codecademy',
      title: 'Codecademy',
      description: '交互式编程学习平台，提供实时编码练习和项目，涵盖多种编程语言和 Web 开发技术，适合初学者和进阶学习者。',
      shortDesc: '交互式编程学习平台。',
      url: 'https://www.codecademy.com/',
      category: 'learning',
      icon: '/icons/codecademy.webp',
      },
      {
      id: 'leetcode',
      title: 'LeetCode',
      description: '程序员面试准备平台，提供算法和数据结构题目，支持多种编程语言，是技术面试准备和编程技能提升的重要工具。',
      shortDesc: '算法面试准备平台。',
      url: 'https://leetcode.com/',
      category: 'learning',
      icon: '/icons/leetcode.webp',
      },
];
/**
 * 搜索网站功能
 * @param {string} query - 搜索关键词
 * @returns {Array} - 符合条件的网站列表
 */
export function searchSites(query) {
  if (!query) return sites;
  const lowerQuery = query.toLowerCase();
  return sites.filter(site => {
    return (
      site.title.toLowerCase().includes(lowerQuery) ||
      site.url.toLowerCase().includes(lowerQuery) ||
      site.category.toLowerCase().includes(lowerQuery)
    );
  });
}
/**
 * 将网站数据转换为HTML标记
 * 允许直接在页面中嵌入HTML内容
 * @param {Array} sitesList - 要呈现的网站列表
 * @returns {string} - HTML标记字符串
 */
export function sitesToHtml(sitesList) {
  if (!sitesList || !sitesList.length) return '<p>没有找到符合条件的网站</p>';
  const html = sitesList.map(site => {
    // 转义HTML特殊字符以防止XSS攻击
    const safeTitle = escapeHtml(site.title);
    const safeDesc = escapeHtml(site.shortDesc || site.description);
    const safeUrl = escapeHtml(site.url);
    const safeIcon = escapeHtml(site.icon || '/images/default.svg');
    return `
      <div class="site-card" data-category="${site.category}">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <div class="site-icon">
            <img src="${safeIcon}" alt="${safeTitle}" loading="lazy" onerror="this.src='/images/default.svg'">
          </div>
          <div class="site-info">
            <h3>${safeTitle}</h3>
            <p>${safeDesc}</p>
          </div>
        </a>
      </div>
    `;
  }).join('');
  return `<div class="sites-grid">${html}</div>`;
}
/**
 * 安全转义HTML特殊字符
 * 防止XSS攻击
 * @param {string} str - 需要转义的字符串
 * @returns {string} - 安全的HTML字符串
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
