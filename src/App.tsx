
import { 
  Rocket, 
  Database, 
  BookOpen, 
  FlaskConical, 
  Newspaper, 
  Search, 
  FileText, 
  ClipboardCheck, 
  Image, 
  Presentation, 
  CheckCircle, 
  Cpu, 
  ChevronRight, 
  ArrowRight, 
  Users, 
  Building, 
  GraduationCap
} from 'lucide-react';
import { cn } from './lib/utils';

// Hero Section Component
const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg animate-gradient-x opacity-10 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),transparent_50%)] -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-8 animate-fade-in">
            <span className="mr-1">⚛️</span> AI驱动科研范式革命
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            让<span className="text-transparent bg-clip-text gradient-bg">科研发现</span>
            <br />加速N倍
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-10 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            ScienceOne 不是单一工具，而是全新的智能科研范式。从文献检索→综述写作→实验设计→成果产出，全链路AI协同，压缩从想法到发现的时间线。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a href="#features" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-medium text-lg hover:bg-primary-dark transition-colors">
              立即开始 <ChevronRight className="ml-2 size-5" />
            </a>
            <a href="#philosophy" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border bg-background text-foreground font-medium text-lg hover:bg-background-alt transition-colors">
              了解更多
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating elements for tech feel */}
      <div className="hidden md:block absolute top-1/4 left-10 size-20 bg-secondary/20 rounded-full blur-xl animate-float"></div>
      <div className="hidden md:block absolute bottom-1/4 right-10 size-32 bg-primary/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

// Stats Section Component
const Stats = () => {
  const stats = [
    { number: '2.3亿+', label: '收录文献' },
    { number: '80+', label: '覆盖学科' },
    { number: '50万+', label: '平台用户' },
    { number: '12万+', label: '产出综述' },
  ];

  return (
    <section id="stats" className="py-16 bg-background-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Philosophy Section Component
const Philosophy = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">科学哲学层</h2>
            <div className="h-1 w-20 mx-auto gradient-bg rounded-full"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              <strong>科学是世间万物的基石</strong> —— 药物、能源、技术、知识，每一项进步都依赖于科学发现。然而，从想法到成果的漫长旅程，依然困扰着每一位科研工作者。
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              ScienceOne 相信，<strong>AI不应只是写作助手</strong>，而是要彻底改变科研范式。我们将前沿AI模型与研究工具深度结合，延伸人类好奇心，让科学家专注于创造性探索，把机械重复的工作交给AI。
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              通过全链路协同，<strong>压缩科学发现的时间线</strong>，让突破更早到来，惠及社会每个角落。这不仅是效率提升，更是一次科研生产力革命。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Core Features Section Component
const CoreFeatures = () => {
  const features = [
    {
      icon: <Search className="size-8" />,
      title: '深度研究',
      description: 'AgentLoop多智能体协同架构，支持复杂调研任务，过程透明可追溯，深度绑定学科数据库和文献库，来源可溯。',
      tags: ['极速模式', '研究模式'],
      color: 'primary'
    },
    {
      icon: <Rocket className="size-8" />,
      title: '科学工具',
      description: '垂直领域专业工具广场，按学科和场景双维度分类，推动开源共享，非通用AI能力的简单包装。',
      tags: ['PDE-Agent', '科学计算器'],
      color: 'secondary'
    },
    {
      icon: <Database className="size-8" />,
      title: '科学数据库',
      description: '汇聚全球权威科学数据库，覆盖材料科学、生命科学等多学科领域，提供访问地址和一键跳转。',
      tags: ['数据枢纽', '多学科覆盖'],
      color: 'accent'
    },
    {
      icon: <BookOpen className="size-8" />,
      title: '科学文献库',
      description: '个人文献中心，支持批量上传管理和团队协作，提供全库对话、研究图谱可视化和文献对话功能。',
      tags: ['AI精读', '引文网络'],
      color: 'success'
    },
    {
      icon: <FlaskConical className="size-8" />,
      title: '科学实验站',
      description: '专业科学计算环境，支持多学科模拟与验证，对接科学工具模块，提供可重复使用的实验流程。',
      tags: ['计算仿真', '理论验证'],
      color: 'primary'
    },
    {
      icon: <Newspaper className="size-8" />,
      title: '科研资讯',
      description: '聚合国内外100+学术信息源，AI自动摘要，支持多维度筛选，无需逐篇手动查阅。',
      tags: ['实时聚合', '智能摘要'],
      color: 'secondary'
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-background-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">核心功能矩阵</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">全链路智能科研平台，覆盖研究的每个环节</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow group hover:-translate-y-1 duration-300"
            >
              <div className={cn(
                "inline-flex items-center justify-center p-3 rounded-lg mb-4 bg-opacity-10",
                `bg-${feature.color} text-${feature.color}`
              )}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted mb-4 leading-relaxed">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 text-xs rounded-md bg-background border border-border text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Workflow Section Component
const Workflow = () => {
  const workflows = [
    {
      icon: <Search />,
      title: '选题研判',
      description: '基于海量文献和最新科研动态，AI帮助评估选题新颖性、可行性，可视化呈现研究热力图。'
    },
    {
      icon: <FileText />,
      title: '学术综述',
      description: '自动规划大纲，全自动化执行，输出万字级完整综述，支持多格式下载，超长上下文+多源融合。'
    },
    {
      icon: <ClipboardCheck />,
      title: '学术审稿',
      description: '提供专业审稿意见，涵盖研究合理性、创新性、局限性，将审稿周期从月级压缩到分钟级。'
    },
    {
      icon: <Image />,
      title: '科研配图',
      description: '基于自然语言生成专业学术配图，支持多轮优化，深度适配科研场景，非通用图片生成可比。'
    },
    {
      icon: <Presentation />,
      title: 'PPT/海报',
      description: '上传文献自动生成学术汇报材料，从解析结构到编译PPTX一站式完成，无需手动复制粘贴。'
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">AI科研工作流</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">每一步都由AI深度增强，让科研更高效</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {workflows.map((item, index) => (
            <div 
              key={index} 
              className="flex gap-6 items-start p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary mt-1">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Studies Section Component
const CaseStudies = () => {
  const cases = [
    {
      title: '三天完成领域综述',
      description: '某985高校教授使用深度研究模式，从选题到完成万字综述仅用3天，传统方式需要至少1个月。',
      author: '某高校教授 · 物理学领域'
    },
    {
      title: '计算时间从周到小时',
      description: '科研团队使用ScienceOne科学工具，将复杂材料计算从传统的一周压缩到3小时，大幅提升实验迭代效率。',
      author: '材料科学研究团队'
    },
    {
      title: '新手也能快速入门',
      description: '硕一新生通过平台选题研判功能快速找到研究空白，顺利完成开题报告，比同届同学提前两个月进入实验。',
      author: '在读硕士研究生 · 生命科学'
    },
  ];

  return (
    <section id="cases" className="py-20 md:py-28 bg-background-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">应用案例展示</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">真实科研故事，看得见的效率提升</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="mb-4 text-primary">
                <CheckCircle className="size-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted mb-4 leading-relaxed">{item.description}</p>
              <p className="text-sm text-muted-foreground italic">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tech Base Section Component
const TechBase = () => {
  return (
    <section id="tech" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">技术底座</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">科学模态深度理解，专业能力远超通用模型</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">科学模态理解</h3>
            <p className="text-muted mb-6 leading-relaxed">
              ScienceOne 不只是读文字，而是真正理解科学表达的语义。对 LaTeX 公式、化学结构、实验数据图等专业科学内容具备深度理解能力，这是通用AI无法比拟的优势。
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="size-5 text-primary flex-shrink-0" />
                <span className="text-foreground">原生支持 LaTeX 公式识别与理解</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="size-5 text-primary flex-shrink-0" />
                <span className="text-foreground">化学结构、分子图深度解析</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="size-5 text-primary flex-shrink-0" />
                <span className="text-foreground">实验数据图表智能解读</span>
              </li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-6 text-foreground">基准表现（vs 通用模型）</h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">ScienceOne</span>
                  <span className="text-sm font-medium text-primary">92%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">GPT-5</span>
                  <span className="text-sm font-medium text-muted">78%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-muted rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Claude 3 Opus</span>
                  <span className="text-sm font-medium text-muted">76%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-muted rounded-full" style={{ width: '76%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Gemini Advanced</span>
                  <span className="text-sm font-medium text-muted">74%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-muted rounded-full" style={{ width: '74%' }}></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted mt-4">评测基于 MMLU-STEM 科学学科子集</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Ecosystem Section Component
const Ecosystem = () => {
  const partners = [
    { name: '清华大学', type: '高校' },
    { name: '北京大学', type: '高校' },
    { name: '中科院', type: '科研院所' },
    { name: '字节跳动', type: '企业' },
    { name: '阿里巴巴', type: '企业' },
    { name: '腾讯AI Lab', type: '企业' },
  ];

  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-background-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">生态联盟</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">与高校、科研机构、企业共建科研新范式</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center border border-border flex flex-col items-center justify-center">
              {partner.type === '高校' && <GraduationCap className="size-8 mb-3 text-primary" />}
              {partner.type === '科研院所' && <Building className="size-8 mb-3 text-primary" />}
              {partner.type === '企业' && <Users className="size-8 mb-3 text-primary" />}
              <div className="font-medium text-foreground">{partner.name}</div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">加入生态联盟</h3>
          <p className="text-muted mb-8">
            我们欢迎各类高校、科研机构、企业与我们开展深度合作，包括模型共建、定制部署、API开放、联合研究等多种合作方式。
          </p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
            联系我们 <ArrowRight className="ml-2 size-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Section Component
const Footer = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            一起加速科研发现
          </h2>
          <p className="text-xl mb-8 opacity-90">
            体验AI驱动的全新科研范式，让突破更早到来
          </p>
          <a href="#features" className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-primary font-semibold text-lg hover:bg-opacity-90 transition-colors">
            立即体验 <ChevronRight className="ml-2 size-5" />
          </a>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Cpu className="size-6" />
            <span className="font-semibold text-xl">ScienceOne</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/80 transition-colors">关于我们</a>
            <a href="#" className="hover:text-white/80 transition-colors">产品文档</a>
            <a href="#" className="hover:text-white/80 transition-colors">联系合作</a>
          </div>
        </div>
        <div className="text-center mt-8 text-sm opacity-70">
          © 2025 ScienceOne. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Utils
export { cn };

// Main App Component
function App() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Hero />
      <Stats />
      <Philosophy />
      <CoreFeatures />
      <Workflow />
      <CaseStudies />
      <TechBase />
      <Ecosystem />
      <Footer />
    </div>
  );
}

export default App;
