"use client";
import Image from "next/image";
import style from "./SkillList.module.scss";
import ScrollReveal from "../../module/ScrollReveal/ScrollReveal.jsx";
import ChartRadar from "../../module/Chart/ChartRadar";
import ChartBar from "../../module/Chart/ChartBar";
import { skillData } from "./data/skillData";

export default function SkillList() {
  const data = [
    {
      label: "フロントエンド",
      value: 5.0,
      description: "HTML/CSS/JavaScriptによるUI基礎力",
    },
    {
      label: "UI・FW実装",
      value: 4.2,
      description: "ReactやAstroを用いたコンポーネント実装力",
    },
    {
      label: "バックエンド",
      value: 1.8,
      description: "BaaSやサーバーサイドの基礎を理解し、フロントとの連携が可能",
    },
    {
      label: "運用・Jamstack構築",
      value: 4.1,
      description: "CMS連携・自動デプロイに加え、Node.jsによる自動化を含む運用構築力",
    },
    {
      label: "チーム開発",
      value: 3.6,
      description: "Git運用や業務ツールを活用した開発力",
    },
  ];

  return (
    <section id="skillList" className={style.skillList}>
      <div className={style.wave_top} />
      <div className="inner">
        <ScrollReveal move="left">
          <h2>Skill List</h2>
        </ScrollReveal>
        <div className={style.wrapper}>
          <div className={style.skill_chart}>
            <ScrollReveal move="left">
              <div className={style.radar}>
                <ChartRadar data={data} />
              </div>
            </ScrollReveal>
            <ScrollReveal move="left">
              <div className={style.bar}>
                <ChartBar data={data} />
              </div>
            </ScrollReveal>
          </div>
          <div className={style.rate_list}>
            <p>各レートの詳細</p>
            <div>
              <dl>
                <dt>
                  <div className={style.rate}>
                    <span className={`${style.rate_star} ${style[`rate_0`]}`}/>
                  </div>
                </dt>
                <dd>学習予定/学習中（実装は限定的）</dd>
              </dl>
              <dl>
                <dt>
                  <div className={style.rate}>
                    <span className={`${style.rate_star} ${style[`rate_1`]}`}/>
                  </div>
                </dt>
                <dd>基礎理解＋既存改修中心</dd>
              </dl>
              <dl>
                <dt>
                  <div className={style.rate}>
                    <span className={`${style.rate_star} ${style[`rate_2`]}`}/>
                  </div>
                </dt>
                <dd>実務 or 制作で使える、調べつつでも実装できる</dd>
              </dl>
              <dl>
                <dt>
                  <div className={style.rate}>
                    <span className={`${style.rate_star} ${style[`rate_3`]}`}/>
                  </div>
                </dt>
                <dd>設計意識＋自走（0→1）＋安定して再現できる</dd>
              </dl>
            </div>
          </div>
          {skillData.map((section) => (
            <div key={section.id} id={section.id}>
              <ScrollReveal move="left">
                <h3>{section.heading}</h3>
              </ScrollReveal>

              <ul className={style.skill_list}>
                {section.items.map((item) => {
                  const rateNum =
                    typeof item.rate === "string" && item.rate.startsWith("rate_")
                      ? Number(item.rate.replace("rate_", ""))
                      : item.rate;

                  return (
                    <li key={item.key ?? item.title}>
                      <ScrollReveal move="left">
                        <div className={style.skill_item}>
                          <div className={style.image}>
                            <Image loader={({ src }) => src} src={item.icon} alt={item.alt} priority={false}/>
                          </div>
                          <div className={style.details}>
                            <div className={style.header}>
                              <div className={style.name}>
                                <h3>{item.title}</h3>
                              </div>
                              <div className={style.rate}>
                                <span className={`${style.rate_star} ${style[`rate_${rateNum}`]}`}/>
                              </div>
                            </div>
                            {item.description && (
                              <div className={style.description}>
                                <p>{item.description}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </ScrollReveal>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={style.wave_bottom} />
    </section>
  );
}