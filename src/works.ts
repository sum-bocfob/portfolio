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
};

const works: WorkType[] = [
    {
        name: "一葉庵",
        img: img_ichiyoan,
        pageUrl: "/work_detail/ichiyoan",
        siteUrl: "https://sum-bocfob.github.io/ichiyoan/",
        fromComp: false,
        type: "Webサイト",
    },
    {
        name: "Lumo Creatives",
        img: img_lumo,
        pageUrl: "/work_detail/lumo_creatives",
        siteUrl: "https://sum-bocfob.github.io/Lumo_Creatives/",
        fromComp: false,
        type: "Webサイト",
    },
    {
        name: "Mellow Sound Studio",
        img: img_mellow,
        pageUrl: "/work_detail/mellow_sound_studio",
        siteUrl: "https://sum-bocfob.github.io/Mellow_Sound_Studio/index.html",
        fromComp: false,
        type: "Webサイト",
    },
    {
        name: "Café Lumière",
        img: img_cafe,
        pageUrl: "/work_detail/cafe_lumiere",
        siteUrl: "https://sum-bocfob.github.io/Cafe_Lumiere/",
        fromComp: false,
        type: "Webサイト",
    },
    {
        name: "FA EXHIBITION",
        img: img_fa,
        pageUrl: "/work_detail/fa_exhibition",
        siteUrl: "https://sum-bocfob.github.io/gallery/",
        fromComp: true,
        type: "Webサイト",
    },
    {
        name: "BBB英会話スクール",
        img: img_bbb,
        pageUrl: "/work_detail/bbb_english_school",
        siteUrl: "https://sum-bocfob.github.io/bbb_lp/",
        fromComp: true,
        type: "Webサイト",
    },
    {
        name: "Sneakers",
        img: img_sneakers,
        pageUrl: "/work_detail/sneakers",
        siteUrl: "https://sum-bocfob.github.io/media/",
        fromComp: true,
        type: "Webサイト",
    },
    {
        name: "Planet Hunters",
        img: img_planet,
        pageUrl: "/work_detail/planet_hunters",
        siteUrl: "https://sum-bocfob.github.io/planet_hunter/",
        fromComp: true,
        type: "Webサイト",
    },
    {
        name: "ENGBODY",
        img: img_engbody,
        pageUrl: "/work_detail/engbody",
        siteUrl: "https://sum-bocfob.github.io/engbody/",
        fromComp: true,
        type: "Webサイト",
    },
];

export default works;
