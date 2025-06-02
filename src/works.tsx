import img_ichiyoan from "./assets/site_ichiyoan.png";
import img_lumo from "./assets/site_lumoCreatives.png";
import img_mellow from "./assets/site_mellowSoundStudio.png";
import img_cafe from "./assets/site_cafe.png";
import img_fa from "./assets/site_faExhibition.png";
import img_bbb from "./assets/site_bbb.png";
import img_sneakers from "./assets/site_sneakers.png";
import img_planet from "./assets/site_planetHunters.png";
import img_engbody from "./assets/site_engbody.png";

export type WorkType = {
    name: string;
    img: string;
    pageUrl: string;
    siteUrl: string;
    fromComp: boolean;
    type: string;
    usedSkills: string[];
    duration_day: number;
    duration_hour: number;
    descJSX: React.ReactNode;
};

const works: WorkType[] = [
    {
        name: "一葉庵",
        img: img_ichiyoan,
        pageUrl: "/work_detail/ichiyoan",
        siteUrl: "https://sum-bocfob.github.io/ichiyoan/",
        fromComp: false,
        type: "Webサイト",
        usedSkills: ["Vite", "vite-plugin-handlebars", "Sass", "FLOCSS", "JQuery", "Motion"],
        duration_day: 4,
        duration_hour: 27,
        descJSX: (
            <>
                <h3>依頼内容(一部抜粋)</h3>
                <p>
                    私たちは、京都・祇園にある小さな和菓子屋「一葉庵」です。
                    <br />
                    伝統的な製法と、現代的な美意識を融合させた和菓子を手作りで提供しています。
                    <br />
                    今回、観光客や若い世代にも和菓子の魅力を届けるため、 ブランドサイトを新たに立ち上げたいと考えています。
                </p>
                <h4>サイトの目的</h4>
                <ul>
                    <li>お店の雰囲気や和菓子の魅力をビジュアルで伝える</li>
                    <li>和の世界観を感じられるデザインにする</li>
                    <li>商品紹介や職人のこだわりを丁寧に伝える</li>
                    <li>実店舗への来訪を促す（アクセス情報や営業時間などを掲載）</li>
                </ul>
                <h4>雰囲気・デザインの要望</h4>
                <ul>
                    <li>和風 × モダン（伝統と洗練された美しさの融合）</li>
                    <li>背景は和紙や麻布を連想させる質感</li>
                    <li>色味は、生成色・深緑・茜色・墨色など落ち着いた和の配色</li>
                </ul>
            </>
        ),
    },
    {
        name: "Lumo Creatives",
        img: img_lumo,
        pageUrl: "/work_detail/lumo_creatives",
        siteUrl: "https://sum-bocfob.github.io/Lumo_Creatives/",
        fromComp: false,
        type: "Webサイト",
        usedSkills: ["Vite", "vite-plugin-handlebars", "Sass", "FLOCSS", "JQuery", "Motion"],
        duration_day: 6,
        duration_hour: 26,
        descJSX: (
            <>
                <h3>依頼内容(一部抜粋)</h3>
                <h4>目的</h4>
                <ul>
                    <li>映像制作・写真撮影・デザインの受注を目的としたブランディングサイト</li>
                    <li>作品紹介、サービス内容、料金プラン、問い合わせフォームの掲載</li>
                    <li>シンプルだけど個性的なデザインが希望</li>
                </ul>
                <h4>必須セクション</h4>
                <ul>
                    <li>トップヒーロー（動画orキャッチコピー）</li>
                    <li>About（自己紹介＋コンセプト）</li>
                    <li>Works（実績紹介ギャラリー）</li>
                    <li>Services（提供サービス＋料金）</li>
                    <li>Contact（問い合わせフォーム）</li>
                </ul>
            </>
        ),
    },
    {
        name: "Mellow Sound Studio",
        img: img_mellow,
        pageUrl: "/work_detail/mellow_sound_studio",
        siteUrl: "https://sum-bocfob.github.io/Mellow_Sound_Studio/index.html",
        fromComp: false,
        type: "Webサイト",
        usedSkills: ["Vite", "vite-plugin-handlebars", "Sass", "FLOCSS", "JQuery", "Motion"],
        duration_day: 5,
        duration_hour: 26,
        descJSX: (
            <>
                <h3>依頼内容(一部抜粋)</h3>
                <h4>目的</h4>
                <ul>
                    <li>音楽練習スタジオの紹介と予約受付</li>
                    <li>スタジオ設備の紹介（機材など）</li>
                    <li>料金プランの掲載</li>
                    <li>初心者〜プロまで幅広い顧客に安心感を与える</li>
                    <li>Webから予約できる仕組み（問い合わせ可でもOK）</li>
                </ul>
                <h4>必須セクション</h4>
                <ul>
                    <li>トップページ（印象的なキャッチコピー＋ビジュアル）</li>
                    <li>スタジオ紹介（部屋写真、機材リストなど）</li>
                    <li>料金プラン（時間貸し・パック料金）</li>
                    <li>アクセス（地図、営業時間など）</li>
                    <li>予約フォーム（名前、電話番号、メール、利用希望日時、スタジオ選択）</li>
                </ul>
            </>
        ),
    },
    {
        name: "Café Lumière",
        img: img_cafe,
        pageUrl: "/work_detail/cafe_lumiere",
        siteUrl: "https://sum-bocfob.github.io/Cafe_Lumiere/",
        fromComp: false,
        type: "Webサイト",
        usedSkills: ["Vite", "vite-plugin-handlebars", "Sass", "FLOCSS", "JQuery", "Motion"],
        duration_day: 5,
        duration_hour: 25,
        descJSX: (
            <>
                <h3>依頼内容(一部抜粋)</h3>
                <h4>目的</h4>
                <ul>
                    <li>メニューや店舗情報の掲載</li>
                    <li>予約受付</li>
                    <li>SNSリンクの表示</li>
                </ul>
                <h4>必要なページ</h4>
                <ul>
                    <li>ホーム</li>
                    <li>メニュー（写真付き）</li>
                    <li>店舗情報・アクセス</li>
                    <li>予約フォーム</li>
                    <li>お知らせ・ブログ（スタッフのおすすめや新メニュー紹介）</li>
                </ul>
            </>
        ),
    },
    {
        name: "FA EXHIBITION",
        img: img_fa,
        pageUrl: "/work_detail/fa_exhibition",
        siteUrl: "https://sum-bocfob.github.io/gallery/",
        fromComp: true,
        type: "Webサイト",
        usedSkills: ["Vite", "vite-plugin-handlebars", "Sass", "FLOCSS", "JQuery", "Motion"],
        duration_day: 4,
        duration_hour: 27,
        descJSX: <div></div>,
    },
    {
        name: "BBB英会話スクール",
        img: img_bbb,
        pageUrl: "/work_detail/bbb_english_school",
        siteUrl: "https://sum-bocfob.github.io/bbb_lp/",
        fromComp: true,
        type: "Webサイト",
        usedSkills: ["Vite", "vite-plugin-handlebars", "Sass", "FLOCSS", "JQuery", "Motion"],
        duration_day: 4,
        duration_hour: 27,
        descJSX: <div></div>,
    },
    {
        name: "Sneakers",
        img: img_sneakers,
        pageUrl: "/work_detail/sneakers",
        siteUrl: "https://sum-bocfob.github.io/media/",
        fromComp: true,
        type: "Webサイト",
        usedSkills: ["Vite", "vite-plugin-handlebars", "Sass", "FLOCSS", "JQuery", "Motion"],
        duration_day: 4,
        duration_hour: 27,
        descJSX: <div></div>,
    },
    {
        name: "Planet Hunters",
        img: img_planet,
        pageUrl: "/work_detail/planet_hunters",
        siteUrl: "https://sum-bocfob.github.io/planet_hunter/",
        fromComp: true,
        type: "Webサイト",
        usedSkills: ["Vite", "vite-plugin-handlebars", "Sass", "FLOCSS", "JQuery", "Motion"],
        duration_day: 4,
        duration_hour: 27,
        descJSX: <div></div>,
    },
    {
        name: "ENGBODY",
        img: img_engbody,
        pageUrl: "/work_detail/engbody",
        siteUrl: "https://sum-bocfob.github.io/engbody/",
        fromComp: true,
        type: "Webサイト",
        usedSkills: ["Vite", "vite-plugin-handlebars", "Sass", "FLOCSS", "JQuery", "Motion"],
        duration_day: 4,
        duration_hour: 27,
        descJSX: <div></div>,
    },
];

export default works;
