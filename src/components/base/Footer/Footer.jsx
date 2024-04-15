"use client";
import { Link as Scroll } from 'react-scroll';
import Link from 'next/link';

import style from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.scrollTop}>
        <Scroll to='mainView' smooth={ true }>↑ページTOPへ</Scroll>
      </div>
      <div className={style.wrapper}>
        <div className={style.pfContents}>
          <div className="inner">
            <div className={style.title}>
              <p>Portfolio Contents</p>
            </div>
            <div className={style.link}>
              <ul>
                <li className={style.work}>
                  <Scroll to='workList' smooth={ true } offset={-70}>Work List</Scroll>
                </li>
                <li className={style.about}>
                  <Scroll to='aboutMe' smooth={ true } offset={-70}>About Me</Scroll>
                </li>
                <li className={style.skill}>
                  <Scroll to='skillList' smooth={ true } offset={-70}>Skill List</Scroll>
                </li>
                <li className={style.news}>
                  <Scroll to='newsList' smooth={ true } offset={-70}>News List</Scroll>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.myContents}>
          <div className="inner">
            <div className={style.title}>
              <p>zatty's Contents</p>
            </div>
            <div className={style.link}>
              <ul>
                <li>
                  <a href="https://zatty-5118.github.io/portfolio/" target="_blank">ポートフォリオ</a>
                </li>
                <li>
                  <a href="https://zatty-5118.github.io/blog/" target="_blank">ブログ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.copyRight}>
          <div className="inner">
            <p>&copy;2024 zatty's Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}