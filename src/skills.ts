import img_html from "../src/assets/logo_HTML5.svg";
import img_css from "../src/assets/logo_css.svg";
import img_sass from "../src/assets/logo_sass.svg";
import img_js from "../src/assets/logo_js.svg";
import img_ts from "../src/assets/logo_ts.svg";
import img_react from "../src/assets/logo_react.svg";
import img_vscode from "../src/assets/logo_vscode.svg";
import img_figma from "../src/assets/logo_figma.svg";
import img_blender from "../src/assets/logo_blender.png";
import img_tool from "../src/assets/logo_tool.svg";

export type SkillType = {
    name: string;
    desc: string;
    level: number;
    img: string;
};

const skills: SkillType[] = [
    {
        name: "HTML",
        desc: "セマンティックなマークアップが可能。",
        level: 3,
        img: img_html,
    },
    {
        name: "CSS",
        desc: "レスポンシブなページ作成が可能。BEMの基本を理解している。",
        level: 3,
        img: img_css,
    },
    {
        name: "Sass",
        desc: "基本的な構文を理解しており、簡単なmixinの作成が可能。",
        level: 2,
        img: img_sass,
    },
    {
        name: "JavaScript",
        desc: "基本的な構文やDOM操作が可能。",
        level: 2,
        img: img_js,
    },
    {
        name: "TypeScript",
        desc: "基本的な型注釈、type文を理解している。\n勉強中。",
        level: 1,
        img: img_ts,
    },
    {
        name: "React",
        desc: "コンポーネント、JSXを理解している。\n勉強中。",
        level: 1,
        img: img_react,
    },
    {
        name: "Visual Studio Code",
        desc: "スムーズなコーディングのためのショートカットを理解している。ターミナルのごく基本的な操作、VSCode内のGUIからGitの一部操作が可能。",
        level: 2,
        img: img_vscode,
    },
    {
        name: "Figma",
        desc: "簡単なフレームワーク及びデザインカンプの作成が可能。オートレイアウトを理解している。",
        level: 1,
        img: img_figma,
    },
    {
        name: "Photoshop",
        desc: "画像の簡単な編集や基本操作が可能。",
        level: 1,
        img: img_tool,
    },
    {
        name: "Illustrator",
        desc: "簡単なロゴ及びイラストの作成が可能。",
        level: 1,
        img: img_tool,
    },
    {
        name: "Blender",
        desc: "簡単な3Dモデルの作成、アニメーションの作成、ジオメトリノードの操作、スカルプトなどが可能。",
        level: 2,
        img: img_blender,
    },
];

export default skills;
