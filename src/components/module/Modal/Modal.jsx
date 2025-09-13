"use client";
import { useState } from 'react';
import style from "./Modal.module.scss";
import ScrollReveal from '../ScrollReveal/ScrollReveal.jsx';
import Image from 'next/image';

const Modal = ({ buttonLabel,title,description,period,stack,img,url,status }) => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggleModal = () => {
      setIsOpen(!isOpen)
      document.querySelector('body').classList.toggle('hidden');
    }
  
    return (
        <>
            <button onClick={toggleModal}>
                <ScrollReveal move="bottom">
                    <div>
                        <Image loader={({src}) => src} src={img} alt={title} layout={"responsive"}/>
                    </div>
                </ ScrollReveal>
                <ScrollReveal move="bottom">
                    <h2>{buttonLabel}</h2>
                </ ScrollReveal>
            </button>
            {isOpen && (
                <div className={style.modal}>
                    <div className={style.modal_overlay} onClick={toggleModal}></div>
                    <div className={style.modal_wrapper}>
                        <div className={style.modal_contents}>
                            <div className={style.modal_image}>
                                <Image loader={({src}) => src} src={img} alt={title} layout={"responsive"}/>
                            </div>
                            <div className={style.modal_text}>
                                <div className={style.title}>
                                    <h3>{title}</h3>
                                </div>
                                <div className={style.description}>
                                    <p>{description}</p>
                                </div>
                                <div className={style.period}>
                                    <h4>制作期間</h4>
                                    <p>{period}</p>
                                </div>
                                <div className={style.skill}>
                                    <div>
                                        <h4>技術スタック</h4>
                                        <p>{stack}</p>
                                    </div>
                                </div>
                                <div className={`${status === 'open' ? style.link : style.disabled}`}>
                                    <a href={url} target="_blank">{`${status === 'open' ? "詳細はこちら" : "Cooming Soon"}`}</a>
                                </div>
                            </div>
                        </div>
                        <div className={style.modal_close}>
                            <button onClick={toggleModal}></button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
    
export default Modal