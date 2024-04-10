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
            <img src="https://raw.githubusercontent.com/zatty-5118/portfolio/cc213965352f2e94e4f30def25d075348d685e35/public/images/zp_logo.svg" alt="ロゴ" width={50} height={50} />
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