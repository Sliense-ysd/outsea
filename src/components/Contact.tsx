import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">03.</span> 联系我
          </h2>
          <div className="section-line"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-heading">
            <div className="contact-title">Let's Connect<span className="blink">_</span></div>
            <div className="contact-subtitle">准备好开始合作或有任何问题？</div>
          </div>
          
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-info">
                <p>
                  如果您对我的工作感兴趣，或者想讨论潜在的合作机会，
                  欢迎随时与我联系。我特别擅长跨文化产品开发和面向中东市场的解决方案。
                </p>
                
                <div className="contact-methods">
                  <div className="method">
                    <div className="method-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="method-text">
                      <span className="method-label">邮箱</span>
                      <a href="mailto:contact@example.com" className="method-link">contact@example.com</a>
                    </div>
                  </div>
                  
                  <div className="method">
                    <div className="method-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="method-text">
                      <span className="method-label">GitHub</span>
                      <a href="https://github.com/Sliense-ysd" target="_blank" rel="noopener noreferrer" className="method-link">github.com/Sliense-ysd</a>
                    </div>
                  </div>
                  
                  <div className="method">
                    <div className="method-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="method-text">
                      <span className="method-label">LinkedIn</span>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="method-link">linkedin.com/in/yangshengdong</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input type="text" id="name" placeholder="您的姓名" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">邮箱</label>
                    <input type="email" id="email" placeholder="您的邮箱" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">主题</label>
                  <input type="text" id="subject" placeholder="消息主题" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">消息</label>
                  <textarea id="message" rows={5} placeholder="您的消息内容..."></textarea>
                </div>
                <button className="form-submit">发送消息</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 