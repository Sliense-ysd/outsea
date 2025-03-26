import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">01.</span> 项目经验
          </h2>
          <div className="section-line"></div>
        </div>
        
        <div className="featured-project">
          <div className="project-content">
            <div className="project-label">特色项目</div>
            <h3 className="project-title">智能斋月任务管家"RamadanProductive"</h3>
            <div className="project-meta">
              <span className="project-duration">2024.01-2024.06 (6个月)</span>
              <span className="project-team">团队规模：4人（本人主导全栈开发）</span>
            </div>
            <div className="project-description">
              <p>针对中东市场设计的宗教文化融合型效率工具，解决传统TodoList在斋月期间作息调整、祈祷时间同步等场景的适配问题，上线首月获得沙特App Store效率榜Top 20。</p>
            </div>
            
            <div className="project-highlights">
              <div className="highlight-category">
                <h4>文化特性实现</h4>
                <ul>
                  <li>
                    <span className="highlight-title">斋月模式：</span>
                    <span className="highlight-desc">基于地理位置动态生成封斋/开斋时间表（Adhan API集成）；自动调整任务推荐算法，避开高温时段（当地气象局数据接入）</span>
                  </li>
                  <li>
                    <span className="highlight-title">宗教功能：</span>
                    <span className="highlight-desc">五次礼拜提醒与完成状态追踪（自定义伊斯兰日历组件）；天课(Zakat)计算器：集成财务公式引擎，支持货币自动换算</span>
                  </li>
                  <li>
                    <span className="highlight-title">RTL布局：</span>
                    <span className="highlight-desc">实现全阿拉伯语右到左布局适配，Text组件支持《古兰经》经文特殊排版</span>
                  </li>
                </ul>
              </div>
              
              <div className="highlight-category">
                <h4>AI+社区架构</h4>
                <ul>
                  <li>
                    <span className="highlight-title">智能任务生成：</span>
                    <span className="highlight-desc">基于Transformer的NLP模型（本地化训练含50万条阿拉伯语语料）；场景化建议：如"距离昏礼还有1小时，推荐完成3项工作"</span>
                  </li>
                  <li>
                    <span className="highlight-title">社区模块：</span>
                    <span className="highlight-desc">实时祷告动态墙：WebSocket推送附近用户的集体礼拜完成状态；成就系统：SSR渲染的3D奖章组件（Three.js + React Native GL）</span>
                  </li>
                  <li>
                    <span className="highlight-title">混合部署：</span>
                    <span className="highlight-desc">敏感数据处理：涉及宗教内容的AI推理在本地TensorFlow Lite完成；用户行为分析模型部署于AWS Lambda（节约中东地区服务器成本）</span>
                  </li>
                </ul>
              </div>
              
              <div className="highlight-category">
                <h4>性能优化</h4>
                <ul>
                  <li>
                    <span className="highlight-title">阿拉伯语字体加载速度优化：</span>
                    <span className="highlight-desc">将《Naskh》书法字体拆分按需加载</span>
                  </li>
                  <li>
                    <span className="highlight-title">AI模型轻量化：</span>
                    <span className="highlight-desc">使用OpenVINO将PB级模型压缩至18MB</span>
                  </li>
                  <li>
                    <span className="highlight-title">高热地区适配：</span>
                    <span className="highlight-desc">55℃环境下的设备发热控制策略（帧率自适应调节）</span>
                  </li>
                </ul>
              </div>
              
              <div className="highlight-category">
                <h4>开发流程</h4>
                <ul>
                  <li>
                    <span className="highlight-title">需求验证：</span>
                    <span className="highlight-desc">与当地宗教顾问合作完成10场用户访谈，建立合规性检查清单</span>
                  </li>
                  <li>
                    <span className="highlight-title">敏捷迭代：</span>
                    <span className="highlight-desc">双周交付：采用Feature Toggle控制宗教敏感功能灰度发布；自动化测试：针对RTL布局的视觉回归测试（Applitools SDK集成）</span>
                  </li>
                  <li>
                    <span className="highlight-title">交付管理：</span>
                    <span className="highlight-desc">分阶段上线：优先吉达、麦地那等城市试运行，避开朝觐高峰时段；合规审计：通过沙特CITC（通信委员会）宗教内容认证</span>
                  </li>
                </ul>
              </div>
              
              <div className="highlight-category">
                <h4>项目成果</h4>
                <ul>
                  <li>实现<span className="highlight-stats">87%</span>的次日留存率（行业平均42%），MAU突破15万</li>
                  <li>AI建议采纳率达<span className="highlight-stats">63%</span>，社区模块日均互动次数22次/用户</li>
                  <li>获选沙特2030愿景数字经济示范项目，被海湾新闻等6家媒体报道</li>
                  <li>技术输出：撰写《阿拉伯语NLP在移动端的工程实践》白皮书，抽象RTL组件库复用于3个后续项目</li>
                </ul>
              </div>
            </div>
            
            <div className="project-links">
              <div className="project-tech-stack">
                <span>React Native</span>
                <span>TensorFlow Lite</span>
                <span>WebSocket</span>
                <span>AWS Lambda</span>
                <span>Three.js</span>
              </div>
              <div className="project-buttons">
                <a href="https://github.com/Sliense-ysd/outsea" className="project-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project-image">
            <div className="project-image-wrapper">
              <div className="mobile-mockup">
                <div className="mobile-screen"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 