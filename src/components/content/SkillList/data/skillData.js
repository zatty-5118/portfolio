import html from "/public/images/skillList/icon/html-5.svg";
import css from "/public/images/skillList/icon/css-3.svg";
import sass from "/public/images/skillList/icon/sass.svg";
import javascript from "/public/images/skillList/icon/javascript.svg";
import typescript from "/public/images/skillList/icon/typescript.svg";
import react from "/public/images/skillList/icon/react.svg";
import vue from "/public/images/skillList/icon/vue.svg";
import partytown from "/public/images/skillList/icon/partytown.svg";
import astro from "/public/images/skillList/icon/astro.svg";
import nextjs from "/public/images/skillList/icon/nextjs.svg";
import nuxt from "/public/images/skillList/icon/nuxt.svg";
// import tailwindcss from "/public/images/skillList/icon/tailwindcss.svg";
import git from "/public/images/skillList/icon/git.svg";
import github from "/public/images/skillList/icon/github.svg";
import bitbucket from "/public/images/skillList/icon/bitbucket.svg";
import sourcetree from "/public/images/skillList/icon/sourcetree.svg";
import visualStudioCode from "/public/images/skillList/icon/visual-studio-code.svg";
import vite from "/public/images/skillList/icon/vite.svg";
import npm from "/public/images/skillList/icon/npm.svg";
import nodejs from "/public/images/skillList/icon/nodejs.svg";
import cloudflare from "/public/images/skillList/icon/cloudflare.svg";
import firebase from "/public/images/skillList/icon/firebase.svg";
import storybook from "/public/images/skillList/icon/storybook-icon.svg";
import illustrator from "/public/images/skillList/icon/adobe-illustrator.svg";
import photoshop from "/public/images/skillList/icon/adobe-photoshop.svg";
import xd from "/public/images/skillList/icon/adobe-xd.svg";
import figma from "/public/images/skillList/icon/figma.svg";
import microcms from "/public/images/skillList/icon/microcms.svg";
import notion from "/public/images/skillList/icon/notion.svg";
import wordpress from "/public/images/skillList/icon/wordpress.svg";
import gpt from "/public/images/skillList/icon/gpt.svg";
import teams from "/public/images/skillList/icon/microsoft-teams.svg";
import slack from "/public/images/skillList/icon/slack.svg";
import windows from "/public/images/skillList/icon/microsoft-windows.svg";
import mac from "/public/images/skillList/icon/apple.svg";
import jira from "/public/images/skillList/icon/jira.svg";
import confluence from "/public/images/skillList/icon/confluence.svg";
import java from "/public/images/skillList/icon/java.svg";
import thymeleaf from "/public/images/skillList/icon/thymeleaf.svg";


export const skillData = [
    {
        id: "frontend",
        heading: "フロントエンド",
        items: [
            {
                key: "html",
                icon: html,
                alt: "html アイコン",
                title: "HTML-5",
                rate: "3",
                description: "セマンティックHTMLを意識し、構造設計・アクセシビリティ・SEOを考慮したマークアップが可能",
            },
            {
                key: "css",
                icon: css,
                alt: "css アイコン",
                title: "CSS-3",
                rate: "3",
                description: "レイアウト設計からレスポンシブ対応まで対応でき、保守性を意識したスタイル設計が可能",
            },
            {
                key: "sass",
                icon: sass,
                alt: "sass アイコン",
                title: "Sass(SCSS)",
                rate: "3",
                description: "@mixin・@function・変数管理を活用し、再利用性と可読性の高いスタイル設計が可能",
            },
            {
                key: "javascript",
                icon: javascript,
                alt: "javascript アイコン",
                title: "JavaScript",
                rate: "3",
                description: "UI制御や非同期処理を理解し、fetchを用いたAPI連携や動的機能の実装が可能",
            },
            {
                key: "typescript",
                icon: typescript,
                alt: "typescript アイコン",
                title: "TypeScript",
                rate: "0",
                description: "型安全な開発手法を習得予定で、JavaScriptからの段階的移行を視野に学習中",
            },
        ],
    },

    {
        id: "library",
        heading: "ライブラリ",
        items: [
            {
                key: "react",
                icon: react,
                alt: "react アイコン",
                title: "React",
                rate: "3",
                description: "コンポーネント設計を理解し、0からのUI構築や検索機能・モーダル実装が可能",
            },
            {
                key: "vue",
                icon: vue,
                alt: "vue アイコン",
                title: "Vue",
                rate: "0",
                description: "基本文法とコンポーネント設計を中心に、実装力向上を目的として学習中",
            },
            {
                key: "partytown",
                icon: partytown,
                alt: "partytown アイコン",
                title: "partytown",
                rate: "2",
                description: "サードパーティスクリプトをWeb Workerで実行し、パフォーマンス改善に対応可能",
            },
        ],
    },

    {
        id: "framework",
        heading: "フレームワーク",
        items: [
            {
                key: "astro",
                icon: astro,
                alt: "Astro.js アイコン",
                title: "Astro.js",
                rate: "3",
                description: "設計思想を理解し、300ページ規模の静的サイトを0から構築した実務経験あり",
            },
            {
                key: "nextjs",
                icon: nextjs,
                alt: "Next.js アイコン",
                title: "Next.js",
                rate: "3",
                description: "環境構築からSSGを用いたページ実装まで対応可能で、実践的な利用経験あり",
            },
            {
                key: "nuxt",
                icon: nuxt,
                alt: "Nuxt.js アイコン",
                title: "Nuxt.js",
                rate: "0",
                description: "Vueベースのフレームワークとして今後の実務活用を想定し学習予定",
            },

            // Tailwindは元コードでコメントアウトだったので入れてない（必要なら追加する）
            // {
            //   key: "tailwindcss",
            //   icon: tailwindcss,
            //   alt: "tailwindcss アイコン",
            //   title: "Tailwind CSS",
            //   rate: "1",
            //   description: "基本的な知識は備えているため、ページ制作に用いることが可能",
            // },
             
        ],
    },

    {
        id: "version",
        heading: "バージョン管理",
        items: [
            {
                key: "git",
                icon: git,
                alt: "git アイコン",
                title: "Git",
                rate: "2",
                description: "チーム開発での実務経験があり、履歴管理を含むGit運用やリバート・スタッシュ操作が可能",
            },
            {
                key: "github",
                icon: github,
                alt: "github アイコン",
                title: "Github",
                rate: "2",
                description: "PagesやActionsを活用し、CI/CDを含めた静的サイトの公開・運用が可能",
            },
            {
                key: "bitbucket",
                icon: bitbucket,
                alt: "Bitbucket アイコン",
                title: "Bitbucket",
                rate: "2",
                description: "PRベースの開発フローを理解し、レビュー・マージ対応が可能",
            },
            {
                key: "sourcetree",
                icon: sourcetree,
                alt: "sourcetree アイコン",
                title: "sourcetree",
                rate: "1",
                description: "GUIを活用したGit操作により、安定したバージョン管理が可能",
            },
        ],
    },

    {
        id: "devTool",
        heading: "開発環境",
        items: [
            {
                key: "vscode",
                icon: visualStudioCode,
                alt: "Visual Studio Code アイコン",
                title: "Visual Studio Code",
                rate: "3",
                description: "拡張機能を活用し、生産性を高めた開発環境構築と共同作業が可能",
            },
 
            {
                key: "vite",
                icon: vite,
                alt: "vite アイコン",
                title: "Vite",
                rate: "3",
                description: "高速な開発環境を構築でき、用途に応じた設定調整が可能",
            },
 
        ],
    },

    {
        id: "package",
        heading: "パッケージ管理",
        items: [
            {
                key: "npm",
                icon: npm,
                alt: "npm アイコン",
                title: "npm",
                rate: "2",
                description: "依存関係管理やscript運用を行い、開発・ビルド環境の制御が可能",
            },
        ],
    },

    {
        id: "execute",
        heading: "実行環境",
        items: [
            {
                key: "nodejs",
                icon: nodejs,
                alt: "Node.js アイコン",
                title: "Node.js",
                rate: "3",
                description: "Node.js環境での実務経験があり、スクレイピングや画像変換処理を行うスクリプトを実装可能",
            },
        ],
    },

    {
        id: "hosting",
        heading: "ホスティング",
        items: [
            {
                key: "cloudflare",
                icon: cloudflare,
                alt: "cloudflare アイコン",
                title: "cloudflare",
                rate: "2",
                description: "Pagesを用いた自動デプロイ環境を構築し、CMS連携を含めた運用が可能",
            },
        ],
    },

    {
        id: "backend",
        heading: "バックエンド",
        items: [
            {
                key: "java",
                icon: java,
                alt: "Java アイコン",
                title: "Java",
                rate: "1",
                description: "基本文法を理解し、既存システムのコード修正や簡単な機能追加が可能",
            },
 
            {
                key: "thymeleaf",
                icon: thymeleaf,
                alt: "Thymeleaf アイコン",
                title: "Thymeleaf",
                rate: "1",
                description: "テンプレートエンジンを理解し、条件分岐や繰り返し処理の実装が可能",
            },
 
        ],
    },


    {
        id: "baas",
        heading: "BaaS",
        items: [
            {
                key: "firebase",
                icon: firebase,
                alt: "firebase アイコン",
                title: "firebase",
                rate: "2",
                description: "認証機能とFirestoreを活用し、データ連携を含むWebアプリ構築が可能",
            },
        ],
    },

    {
        id: "ui",
        heading: "UIツール",
        items: [
            {
                key: "storybook",
                icon: storybook,
                alt: "storybook アイコン",
                title: "Storybook",
                rate: "2",
                description: "UIコンポーネントの切り出しと管理を行い、再利用性向上に貢献可能",
            },
        ],
    },

    {
        id: "designTool",
        heading: "デザインツール",
        items: [
            {
                key: "illustrator",
                icon: illustrator,
                alt: "illustrator アイコン",
                title: "illustrator",
                rate: "2",
                description: "ベクターデザインを理解し、地図や装飾要素などの制作が可能",
            },
            {
                key: "photoshop",
                icon: photoshop,
                alt: "Photoshop アイコン",
                title: "Photoshop",
                rate: "2",
                description: "画像編集・加工を行い、Web制作向け素材の作成が可能",
            },
 
            {
                key: "adobexd",
                icon: xd,
                alt: "XD アイコン",
                title: "Adobe XD",
                rate: "2",
                description: "LPデザインを中心に、UI設計からデザインカンプ作成まで対応可能",
            },
            {
                key: "figma",
                icon: figma,
                alt: "Figma アイコン",
                title: "Figma",
                rate: "2",
                description: "デザインと開発の橋渡しを意識し、開発モードを活用した実装が可能",
            },
        ],
    },

    {
        id: "cms",
        heading: "CMS",
        items: [
            {
                key: "microcms",
                icon: microcms,
                alt: "microCMS アイコン",
                title: "microCMS",
                rate: "3",
                description: "実務での導入経験があり、API設計から自動ビルド連携まで対応したJamstack構成の運用が可能",
            },
 
            {
                key: "notion",
                icon: notion,
                alt: "notion アイコン",
                title: "Notion",
                rate: "2",
                description: "データベース設計とインテグレーション活用による情報管理が可能",
            },
 
            {
                key: "wordpress",
                icon: wordpress,
                alt: "wordpress アイコン",
                title: "WordPress",
                rate: "1",
                description: "基本操作を理解し、既存テーマを用いた記事作成・更新が可能",
            },
 
        ],
    },

    {
        id: "aiTool",
        heading: "AIツール",
        items: [
            {
                key: "chatgpt",
                icon: gpt,
                alt: "GPT アイコン",
                title: "Chat GPT",
                rate: "3",
                description: "出力特性を理解し、再現性の高いプロンプト設計や業務効率化に活用可能",
            },
        ],
    },

    {
        id: "os",
        heading: "OS",
        items: [
            {
                key: "windows",
                icon: windows,
                alt: "Windows アイコン",
                title: "Windows",
                rate: "2",
                description: "実務での利用経験があり、開発環境構築や設定変更を含めて安定して対応可能",
            },
            {
                key: "mac",
                icon: mac,
                alt: "Mac アイコン",
                title: "Mac",
                rate: "2",
                description: "実務での利用経験があり、基本操作から開発環境構築まで対応でき、Web制作に対応可能",
            },
 
        ],
    },

    {
        id: "project",
        heading: "プロジェクト管理",
        items: [
            {
                key: "jira",
                icon: jira,
                alt: "JIRA アイコン",
                title: "JIRA",
                rate: "2",
                description: "チケット作成、ステータスによる進捗管理、カンバンボードによるタスク管理が可能",
            },
 
            {
                key: "confluence",
                icon: confluence,
                alt: "confluence アイコン",
                title: "confluence",
                rate: "2",
                description: "ドキュメント管理を通じて、ナレッジ共有と情報整理が可能",
            },
 
        ],
    },

    {
        id: "chatTool",
        heading: "チャットツール",
        items: [
            {
                key: "teams",
                icon: teams,
                alt: "teams アイコン",
                title: "Microsoft teams",
                rate: "2",
                description: "チーム内コミュニケーションや情報共有を円滑に行うことが可能",
            },
 
            {
                key: "slack",
                icon: slack,
                alt: "slack アイコン",
                title: "slack",
                rate: "2",
                description: "タスク管理やハドルを活用し、非同期・同期コミュニケーションが可能",
            },
 
        ],
    },
];
