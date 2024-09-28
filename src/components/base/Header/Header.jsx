"use client";
import { Link as Scroll } from 'react-scroll';
import Link from 'next/link';
import style from './Header.module.scss';
import Image from 'next/image';
import header_logo from '/public/images/header/header_logo.svg';

export default function Header() {
  return (
    <header id="header" className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Link href="/">
            <Image loader={({src}) => src} src={header_logo} alt="ヘッダーロゴ" layout={"responsive"}/>
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