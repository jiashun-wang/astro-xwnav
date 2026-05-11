/**
 * 网站分类列表
 * @type {Array<{id: string, name: string}>}
 */
export const categories = [
  {
    id: 'studying',
    name: '个人站点', icon: '/icons/category/studying.svg',
  },
  {
    id: 'opensource',
    name: '开源平台', icon: '/icons/category/opensource.svg',
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
  {
    id: 'tools',
    name: '工具与效率', icon: '/icons/category/tools.svg',
  },
  {
    id: 'social',
    name: '社交与媒体', icon: '/icons/category/social.svg',
  },
  {
    id: 'media',
    name: '视频平台', icon: '/icons/category/media.svg',
  },
  {
    id: 'design',
    name: '设计资源', icon: '/icons/category/design.svg',
  },
  {
    id: 'productivity',
    name: '生产力工具', icon: '/icons/category/productivity.svg',
  },
  {
    id: 'study',
    name: '学习与考试', icon: '/icons/category/study.svg',
  },
];
/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, category: string}>}
 */
export const sites = [
  // 个人站点      
      {
      id: 'academic-homepage',
      title: "Jiashun Wang's Homepage",
      description: '个人主页与知识集散地。作为技术爱好者，展示自己的全部项目、实践与分享的中心。',
      shortDesc: "Jiashun Wang's 的学术主页",
      url: 'https://jia-shun.wang/',
      category: 'studying',
      icon: '/icons/academic-homepage.webp',
      },
      {
      id: 'nav-homepage',
      title: '海之霸学术导航',
      description: '专属导航页，这里汇聚了学术与技术所需的所有高效工具与资源链接。',
      shortDesc: '学术与技术网站式收藏夹',
      url: 'https://chum-bucket.site/',
      category: 'studying',
      icon: '/icons/nav-homepage.webp',
      },
      {
      id: 'JiashunWang-Blog',
      title: '海洋学笔记',
      description: '海洋学相关的笔记，记录了海洋学领域的最新研究进展、经典理论和实用工具。',
      shortDesc: '海洋学相关的笔记',
      url: 'https://blog.chum-bucket.site/',
      category: 'studying',
      icon: '/icons/jiashunwang-blog.webp',
      },
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
      {
      id: 'ablesci',
      title: '研毕导航',
      description: '一个面向科研人员的导航网站，聚合了各类学术工具、数据库、期刊、软件等资源，旨在提高科研工作效率。',
      shortDesc: '科研资源导航站。',
      url: 'https://www.ablesci.com/',
      category: 'academic',
      icon: '/icons/ablesci.webp',
      },
      {
      id: 'ablesci_daohang',
      title: '研毕学术导航',
      description: '研毕网旗下的学术专用导航页面，深度整合了文献检索、数据库、学术工具等科研全流程所需的核心网站。',
      shortDesc: '深度学术资源导航。',
      url: 'https://www.ablesci.com/daohang',
      category: 'academic',
      icon: '/icons/ablesci-daohang.webp',
      },
      {
      id: 'webofscience',
      title: 'Web of Science',
      description: '科睿唯安旗下的核心学术数据库，提供科学引文索引（SCI）等，用于检索高水平期刊论文和进行引文分析。',
      shortDesc: '核心引文数据库。',
      url: 'https://webofscience.clarivate.cn/wos/woscc/basic-search',
      category: 'academic',
      icon: '/icons/webofscience.webp',
      },
      {
      id: 'cnki',
      title: '中国知网',
      description: '中国最大的学术资源库，收录海量的中文期刊论文、博硕士学位论文、会议论文、报纸等文献，是中文研究必备。',
      shortDesc: '中文权威学术数据库。',
      url: 'https://www.cnki.net/',
      category: 'academic',
      icon: '/icons/cnki.webp',
      },
      {
      id: 'osf',
      title: 'OSF',
      description: '开放科学框架，一个用于支持研究项目协作、数据管理和成果预注册的平台，旨在提高研究的透明度和可重复性。',
      shortDesc: '开放科学协作平台。',
      url: 'https://osf.io/dashboard',
      category: 'academic',
      icon: '/icons/osf.webp',
      },
      {
      id: 'researchgate',
      title: 'ResearchGate',
      description: '面向科研人员的社交网络平台，学者可以分享论文、提出问题、寻找合作者，并跟踪领域内的研究动态。',
      shortDesc: '科研社交网络。',
      url: 'https://www.researchgate.net/',
      category: 'academic',
      icon: '/icons/researchgate.webp',
      },
      {
      id: 'las',
      title: '中国科学院文献情报中心',
      description: '提供中国科学院及国内外丰富的学术资源检索、全文传递、科技查新等服务，支持国家战略科技力量。',
      shortDesc: '中科院学术资源门户。',
      url: 'https://www.las.ac.cn/',
      category: 'academic',
      icon: '/icons/las.webp',
      },
      {
      id: 'scidownload',
      title: 'Sci-Hub 镜像',
      description: '提供免费下载学术论文的镜像站点，通过输入论文DOI或URL即可获取全文，旨在打破知识获取的壁垒。',
      shortDesc: '免费学术论文下载。',
      url: 'https://www.scidownload.com/',
      category: 'academic',
      icon: '/icons/scidownload.webp',
      },
      {
      id: 'researcherhome',
      title: '科研者之家',
      description: '为科研人员提供工具和服务的平台，包括期刊查询、AI工具、基金信息、绘图资源等，助力科研全过程。',
      shortDesc: '科研综合服务平台。',
      url: 'https://professional.home-for-researchers.com/#/',
      category: 'academic',
      icon: '/icons/researcherhome.webp',
      },
      {
      id: 'libgen',
      title: 'Library Genesis',
      description: '著名的影子图书馆，提供海量的学术书籍、教科书、论文等电子资源的免费下载，涵盖多个学科领域。',
      shortDesc: '电子书与文献资源库。',
      url: 'https://libgen.li/',
      category: 'academic',
      icon: '/icons/libgen.webp',
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
      {
      id: 'linuxdo',
      title: 'Linux Do',
      description: '中文 Linux 技术社区，专注于 Linux 系统、开源软件和运维开发技术的讨论与分享，氛围友好专业。',
      shortDesc: 'Linux 技术社区。',
      url: 'https://linux.do/',
      category: 'tech',
      icon: '/icons/linuxdo.webp',
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
      {
      id: 'itongzhuo_ielts',
      title: '雅思备考平台',
      description: '提供雅思考试资讯、备考策略、模拟练习和学习资源的平台，帮助考生系统性地准备雅思考试。',
      shortDesc: '雅思考试学习资源。',
      url: 'https://ielts.itongzhuo.com/',
      category: 'learning',
      icon: '/icons/itongzhuo-ielts.webp',
      },
  // 工具与效率      
      {
      id: 'byrnavi',
      title: '北邮人导航',
      description: '由北京邮电大学社区维护的综合性导航网站，包含学术、工具、生活、娱乐等各类实用链接，设计简洁高效。',
      shortDesc: '综合性资源导航。',
      url: 'https://byr-navi.com/',
      category: 'tools',
      icon: '/icons/byrnavi.webp',
      },
      {
      id: 'yanwebtop',
      title: '颜伟的导航',
      description: '个人整理的资源导航页面，汇集了学术搜索、开发工具、设计资源等多个领域的实用网站链接。',
      shortDesc: '个人资源导航页。',
      url: 'https://yanweb.top/',
      category: 'tools',
      icon: '/icons/yanwebtop.webp',
      },
      {
      id: 'latexstudio',
      title: 'LaTeX 工作室',
      description: '中文 LaTeX 资源社区，提供丰富的模板、教程、工具和问答，是学习和使用 LaTeX 进行科技排版的重要站点。',
      shortDesc: 'LaTeX 资源与社区。',
      url: 'https://www.latexstudio.net/',
      category: 'tools',
      icon: '/icons/latexstudio.webp',
      },
      {
      id: 'vscodejs',
      title: 'VS Code 中文网',
      description: 'Visual Studio Code 编辑器的中文社区网站，提供软件下载、插件推荐、使用教程和最新资讯。',
      shortDesc: 'VS Code 中文资源站。',
      url: 'https://vscode.js.cn/',
      category: 'tools',
      icon: '/icons/vscodejs.webp',
      },
      {
      id: 'pdffree',
      title: 'PDF 处理工具',
      description: '提供在线 PDF 编辑、转换、合并、分割等免费功能的网站，方便用户对 PDF 文档进行快速处理。',
      shortDesc: '在线 PDF 工具集。',
      url: 'https://pdffree.channel/',
      category: 'tools',
      icon: '/icons/pdffree.webp',
      },
      {
      id: 'chongbuluo',
      title: '虫部落快搜',
      description: '聚合了众多搜索引擎和垂直搜索工具的导航页面，实现一站式快速搜索，涵盖学术、数据、图片、资源等多个维度。',
      shortDesc: '聚合搜索工具站。',
      url: 'https://search.chongbuluo.com/',
      category: 'tools',
      icon: '/icons/chongbuluo.webp',
      },
      {
      id: '123pan',
      title: '123 云盘',
      description: '提供大容量免费云存储和高速上传下载服务的网盘，适合用于文件备份、分享和在线协作。',
      shortDesc: '免费大容量网盘。',
      url: 'https://www.123pan.com/',
      category: 'tools',
      icon: '/icons/123pan.webp',
      },
  // 社交与媒体      
      {
      id: 'linkedin',
      title: 'LinkedIn',
      description: '全球知名的职业社交平台，用于建立职业人脉、寻找工作机会、分享行业见解和进行商务交流。',
      shortDesc: '职业社交网络。',
      url: 'https://www.linkedin.com/feed/',
      category: 'social',
      icon: '/icons/linkedin.webp',
      },
      {
      id: 'x',
      title: 'X (Twitter)',
      description: '全球性的社交媒体平台，以实时短消息和快速传播信息为特点，是获取新闻、追踪热点和连接社群的重要渠道。',
      shortDesc: '社交媒体与资讯平台。',
      url: 'https://x.com/home',
      category: 'social',
      icon: '/icons/x.webp',
      },
      {
      id: 'weibo',
      title: '微博',
      description: '中国领先的社交媒体平台，提供公开的实时信息分享、讨论和传播，是了解社会热点和娱乐资讯的主要窗口。',
      shortDesc: '中文社交媒体平台。',
      url: 'https://weibo.com/',
      category: 'social',
      icon: '/icons/weibo.webp',
      },
      {
      id: 'zhihu',
      title: '知乎',
      description: '中文互联网高质量的问答社区和创作者聚集的原创内容平台，用户分享彼此的知识、经验和见解。',
      shortDesc: '问答与知识分享社区。',
      url: 'https://www.zhihu.com/',
      category: 'social',
      icon: '/icons/zhihu.webp',
      },
  // 视频平台      
      {
      id: 'youtube',
      title: 'YouTube',
      description: '全球最大的视频分享网站，包含教育教程、科技评测、娱乐节目、音乐视频等海量内容，支持创作者上传和分享。',
      shortDesc: '视频分享与观看平台。',
      url: 'https://www.youtube.com/',
      category: 'media',
      icon: '/icons/youtube.webp',
      },
      {
      id: 'bilibili',
      title: '哔哩哔哩',
      description: '中国领先的年轻人文化社区和视频平台，以弹幕互动为特色，内容涵盖动画、游戏、知识、生活、科技等多元领域。',
      shortDesc: '弹幕视频社区。',
      url: 'https://www.bilibili.com/',
      category: 'media',
      icon: '/icons/bilibili.webp',
      },
  // 设计资源      
      {
      id: 'iconfont',
      title: 'IconFont',
      description: '阿里巴巴矢量图标库，提供海量可缩放的矢量图标，支持下载、在线编辑和前端项目引用，是设计师和开发者的常用资源。',
      shortDesc: '矢量图标库。',
      url: 'https://www.iconfont.cn/',
      category: 'design',
      icon: '/icons/iconfont.webp',
      },
  // 生产力工具      
      {
      id: 'gmail',
      title: 'Gmail',
      description: '谷歌提供的免费电子邮件服务，集成于谷歌生态系统，以其强大的搜索功能、大容量存储和稳定性著称。',
      shortDesc: '谷歌电子邮件服务。',
      url: 'https://mail.google.com/',
      category: 'productivity',
      icon: '/icons/gmail.webp',
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
    // 根据网站ID生成图标路径，优先尝试SVG，如果不存在则使用PNG
    const iconPath = `/icons/${site.id}.svg`;
    return `
      <div class="site-card" data-category="${site.category}">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <div class="site-icon">
            <img src="${iconPath}" alt="${safeTitle}" loading="lazy" onerror="this.onerror=null; this.src='/icons/${site.id}.png'; this.onerror=function(){this.src='/images/default.svg'}">
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
