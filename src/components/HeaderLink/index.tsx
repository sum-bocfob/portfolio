import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

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

    return (
        <li>
            <a ref={linkRef} href={`#${name.toLowerCase()}`} onMouseEnter={handleMouseEnter} className="upperCase">
                {name}
            </a>
        </li>
    );
};

export default HeaderLink;
