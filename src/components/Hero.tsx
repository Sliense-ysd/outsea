import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = ['全栈开发工程师', '独立开发者', '中东市场专家'];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentText = '';
    let i = 0;
    let isDeleting = false;
    let currentPhraseIndex = 0;
    
    const type = () => {
      const phrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        currentText = phrase.substring(0, i--);
      } else {
        currentText = phrase.substring(0, i++);
      }
      
      setTypedText(currentText);
      
      let typingSpeed = isDeleting ? 50 : 150;
      
      if (!isDeleting && i === phrase.length) {
        // Wait at end of phrase
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setCurrentPhrase(currentPhraseIndex);
        typingSpeed = 500;
      }
      
      timer = setTimeout(type, typingSpeed);
    };
    
    timer = setTimeout(type, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="greeting-wrapper">
            <div className="greeting">你好，我是</div>
            <div className="name">丞东</div>
            <div className="title">
              <span className="bracket">{"<"}</span>
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
              <span className="bracket">{"/>"}</span>
            </div>
            <div className="description">
              专注于开发具有文化敏感性的移动应用和网站，以解决特定市场需求。
            </div>
            <div className="buttons">
              <a href="#projects" className="btn btn-primary">查看项目</a>
              <a href="#contact" className="btn btn-secondary">联系我</a>
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="close"></span>
                <span className="minimize"></span>
                <span className="maximize"></span>
              </div>
              <div className="terminal-title">~/portfolio</div>
            </div>
            <div className="terminal-body">
              <div className="line">
                <span className="prompt">$ </span>
                <span className="command">cat about.md</span>
              </div>
              <div className="output">
                <p><span className="highlight"># 丞东</span></p>
                <p>- 🚀 全栈开发者，专注React和React Native</p>
                <p>- 🌐 擅长跨文化产品设计与本地化</p>
                <p>- 🧠 AI集成与自然语言处理专家</p>
                <p>- 🛠️ 性能优化和技术架构设计</p>
              </div>
              <div className="line">
                <span className="prompt">$ </span>
                <span className="cursor-blink">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 