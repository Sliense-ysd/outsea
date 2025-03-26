import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: '前端技术',
      skills: [
        { name: 'React', level: 90 },
        { name: 'React Native', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Vue.js', level: 80 },
      ]
    },
    {
      title: '后端技术',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'AWS Lambda', level: 80 },
        { name: 'MongoDB', level: 78 },
        { name: 'Express', level: 82 },
        { name: 'RESTful API', level: 88 },
      ]
    },
    {
      title: 'AI & 数据',
      skills: [
        { name: 'TensorFlow Lite', level: 85 },
        { name: 'NLP模型训练', level: 78 },
        { name: 'OpenVINO', level: 75 },
        { name: '数据可视化', level: 82 },
        { name: 'Python', level: 80 },
      ]
    },
    {
      title: '开发工具',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 82 },
        { name: 'CI/CD', level: 78 },
        { name: '测试自动化', level: 75 },
        { name: 'Figma/设计工具', level: 70 },
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">02.</span> 技能集
          </h2>
          <div className="section-line"></div>
        </div>
        
        <div className="skills-content">
          <div className="skills-tagcloud">
            <div className="tagcloud-wrapper">
              <div className="tagcloud">
                <span className="tag-item t1">React</span>
                <span className="tag-item t2">React Native</span>
                <span className="tag-item t3">TypeScript</span>
                <span className="tag-item t2">Node.js</span>
                <span className="tag-item t3">AWS Lambda</span>
                <span className="tag-item t1">TensorFlow</span>
                <span className="tag-item t2">NLP</span>
                <span className="tag-item t3">RTL设计</span>
                <span className="tag-item t2">WebSocket</span>
                <span className="tag-item t1">Three.js</span>
                <span className="tag-item t3">性能优化</span>
                <span className="tag-item t2">文化本地化</span>
                <span className="tag-item t1">UI/UX</span>
                <span className="tag-item t2">敏捷开发</span>
                <span className="tag-item t3">API设计</span>
              </div>
            </div>
          </div>
          
          <div className="skills-grid">
            {skillCategories.map((category, idx) => (
              <div className="skill-category" key={idx}>
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, i) => (
                    <div className="skill-item" key={i}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                          data-level={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 