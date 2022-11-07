import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footerTop">
        <div className="footerContent footerContentTop">
          <div className="FooterTopWords">
            <ul>
              <li>online services</li>
              <li>boutique services</li>
              <li>
                <span className="bold">the house of chanel</span>
              </li>
              <li>explore chanel</li>
            </ul>
          </div>
          <div classNameName="FooterTopIcons">
            <a href="https://www.facebook.com/freemoa.net" target="_blank">
              <img
                src="https://www.freemoa.net/public/images/dgm/fb_icon.png"
                alt="페이스북"
              />
            </a>
            <a href="http://post.naver.com/freemoa1" target="_blank">
              <img
                src="https://www.freemoa.net/public/images/dgm/naverpost_icon.png"
                alt="네이버 포스트"
              />
            </a>
            <a href="http://blog.naver.com/freemoa1" target="_blank">
              <img
                src="https://www.freemoa.net/public/images/dgm/naverblog_icon.png"
                alt="네이버 블로그"
              />
            </a>
            <a href="https://pf.kakao.com/_rUrxdxd" target="_blank">
              <img
                src="https://www.freemoa.net/public/images/dgm/kt_icon.png"
                alt="카카오톡 채널"
              />
            </a>
            <a href="https://youtu.be/Dpv9wCWg5-Q" target="_blank">
              <img
                src="https://www.freemoa.net/public/images/dgm/yt_icon.png"
                alt="유튜브"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerContent">
          <div className="footerBottomWords">
            <h2>고객센터 : 02-6380-7521</h2>
            <p>평일(공휴일 휴무) 10:00 - 19:00</p>
          </div>
          <div className="footerBottomWords">
            <p className="noBorder">대표 : 한경원</p>
            <p>CFO : 주지웅</p>
            <p>사업자등록번호 : 113-86-89926</p>
            <p>서울특별시 금천구 가산디지털1로 128, STX V타워 409호</p>
          </div>
          <div className="footerBottomWords">
            <p className="noBorder">
              Copyright 2018 Freemoa Inc., All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
