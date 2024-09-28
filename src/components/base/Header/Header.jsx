"use client";
import { Link as Scroll } from 'react-scroll';
import Link from 'next/link';
import style from './Header.module.scss';

export default function Header() {
  return (
    <header id="header" className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Link href="/">
            <picture>
              <source srcset="/images/header/header_logo_pc.svg" media="(min-width: 768px)"/>
              <img src="/images/header/header_logo_sp.svg" alt="ヘッダーロゴ" width={50} height={50} />
            </picture>
          </Link>
        </div>
        <div className={style.menu}>
          <div className={`${style.link} ${style.work}`}>
            <Scroll to='workList' smooth={ true } offset={-70}>Work List</Scroll>
          </div>
          <div className={`${style.link} ${style.about}`}>
            <Scroll to='aboutMe' smooth={ true } offset={-70}>About Me</Scroll>
          </div>
          <div className={`${style.link} ${style.skill}`}>
            <Scroll to='skillList' smooth={ true } offset={-70}>Skill List</Scroll>
          </div>
          <div className={`${style.link} ${style.news}`}>
            <Scroll to='newsList' smooth={ true } offset={-70}>News List</Scroll>
          </div>
        </div>
      </div>
    </header>
  )
}