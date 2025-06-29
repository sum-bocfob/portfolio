import gsap from "gsap";

export const showUp = (target: gsap.TweenTarget, trigger: gsap.DOMTarget, delay: number = 0): void => {
    gsap.from(target, {
        y: 100,
        duration: 0.5,
        stagger: 0.04,
        delay,
        scrollTrigger: {
            trigger: trigger,
            start: "top 80%", // ビューポート下から80%の位置に来たら
        },
    });
};

export const showRollUp = (target: gsap.TweenTarget, trigger: gsap.DOMTarget, delay: number = 0): void => {
    gsap.from(target, {
        rotateZ: -90,
        transformOrigin: "right bottom",
        duration: 0.5,
        stagger: 0.04,
        delay,
        scrollTrigger: {
            trigger: trigger,
            start: "top 80%", // ビューポート下から80%の位置に来たら
        },
    });
};

export const showScaleUp = (target: gsap.TweenTarget, trigger: gsap.DOMTarget, delay: number = 0): void => {
    gsap.from(target, {
        scale: 0,
        ease: "back.out(1.75)",
        duration: 0.5,
        stagger: 0.04,
        delay,
        scrollTrigger: {
            trigger: trigger,
            start: "top 80%", // ビューポート下から80%の位置に来たら
        },
    });
};
