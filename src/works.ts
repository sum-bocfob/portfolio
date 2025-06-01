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
};

const works: WorkType[] = [
    {
        name: "一葉庵",
        img: img_ichiyoan,
        pageUrl: "/",
        siteUrl: "https://sum-bocfob.github.io/ichiyoan/",
        fromComp: false,
    },
    {
        name: "Lumo Creatives",
        img: img_lumo,
        pageUrl: "/",
        siteUrl: "https://sum-bocfob.github.io/Lumo_Creatives/",
        fromComp: false,
    },
    {
        name: "Mellow Sound Studio",
        img: img_mellow,
        pageUrl: "/",
        siteUrl: "https://sum-bocfob.github.io/Mellow_Sound_Studio/index.html",
        fromComp: false,
    },
    {
        name: "Café Lumière",
        img: img_cafe,
        pageUrl: "/",
        siteUrl: "https://sum-bocfob.github.io/Cafe_Lumiere/",
        fromComp: false,
    },
    {
        name: "FA EXHIBITION",
        img: img_fa,
        pageUrl: "/",
        siteUrl: "https://sum-bocfob.github.io/gallery/",
        fromComp: true,
    },
    {
        name: "BBB英会話スクール",
        img: img_bbb,
        pageUrl: "/",
        siteUrl: "https://sum-bocfob.github.io/bbb_lp/",
        fromComp: true,
    },
    {
        name: "Sneakers",
        img: img_sneakers,
        pageUrl: "/",
        siteUrl: "https://sum-bocfob.github.io/media/",
        fromComp: true,
    },
    {
        name: "Planet Hunters",
        img: img_planet,
        pageUrl: "/",
        siteUrl: "https://sum-bocfob.github.io/planet_hunter/",
        fromComp: true,
    },
    {
        name: "ENGBODY",
        img: img_engbody,
        pageUrl: "/",
        siteUrl: "https://sum-bocfob.github.io/engbody/",
        fromComp: true,
    },
];

export default works;
