"use client";
import { Link as Scroll } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';
import footer_portfolio_logo from '/public/images/footer/footer_portfolio_logo.svg';
import footer_blog_logo from '/public/images/footer/footer_blog_logo.svg';
import footer_sb_logo from '/public/images/footer/footer_sb_logo.svg';

import style from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.scrollTop}>
        <Scroll to='mainView' smooth={ true }>↑ページTOPへ</Scroll>
      </div>
      <div className={style.wrapper}>
        <div className={style.myContents}>
          <div className="inner">
            <div className={style.title}>
              <p>My Contents</p>
            </div>
            <ul>
              <li>
                <Link href="https://zatty-5118.github.io/portfolio/" target='_blank'>
                  <div className={style.image}>
                    <Image loader={({src}) => src} src={footer_portfolio_logo} alt="zatty's Portfolio" layout={"responsive"}/>
                  </div>
                  <div className={style.text}>
                    <p>フロントエンドエンジニアの「zatty」が制作した<br />Next.jsベースのポートフォリオです。</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="https://zatty-5118.github.io/blog/" target='_blank'>
                  <div className={style.image}>
                    <Image loader={({src}) => src} src={footer_blog_logo} alt="zatty's Blog" layout={"responsive"}/>
                  </div>
                  <div className={style.text}>
                    <p>フロントエンドエンジニアの「zatty」が制作した<br />Astro.jsとNotion APIを活用したブログです。</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="https://zatty-5118.github.io/storybook/" target='_blank'>
                  <div className={style.image}>
                    <Image loader={({src}) => src} src={footer_sb_logo} alt="zatty's Blog" layout={"responsive"}/>
                  </div>
                  <div className={style.text}>
                    <p>フロントエンドエンジニアの「zatty」が制作した<br />Vite×React×Storybookで作成したUIカタログ集です。</p>
                  </div>
                </Link>
              </li>
            </ul>
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