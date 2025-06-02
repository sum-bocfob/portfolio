import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(SplitText, ScrollToPlugin);

const HeaderLink = ({ name }: { name: string }) => {
    // a要素
    const linkRef = useRef<HTMLAnchorElement>(null);
    // 文字の配列
    const charRef = useRef<HTMLElement[] | null>(null);

    useEffect(() => {
        const split = new SplitText(linkRef.current, { type: "chars" });
        charRef.current = split.chars as HTMLElement[];

        return () => {
            split.revert();
        };
    }, []);

    const handleMouseEnter = () => {
        if (!charRef.current) return;
        const tl = gsap.timeline();
        tl.to(charRef.current, {
            y: -5,
            duration: 0.15,
            stagger: 0.03,
        }).to(
            charRef.current,
            {
                y: 0,
                duration: 0.15,
                ease: "power2.out",
                stagger: 0.03,
            },
            "-=0.1"
        );
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        gsap.to(window, { duration: 0.25, ease: "power2.out", scrollTo: { y: `#${name.toLowerCase()}`, offsetY: 80 } });
    };

    return (
        <li>
            <a ref={linkRef} href={`#${name.toLowerCase()}`} onMouseEnter={handleMouseEnter} onClick={(e) => handleClick(e)} className="upperCase">
                {name}
            </a>
        </li>
    );
};

export default HeaderLink;
