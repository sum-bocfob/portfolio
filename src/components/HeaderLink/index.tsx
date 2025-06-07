import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useLocation, useNavigate } from "react-router-dom";
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

    const location = useLocation();
    const isHome = location.pathname === "/";
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent, id: string) => {
        if (isHome) {
            e.preventDefault();
            gsap.to(window, { duration: 0.25, ease: "power2.out", scrollTo: { y: `#${name.toLowerCase()}`, offsetY: 80 } });
        } else {
            e.preventDefault();
            navigate("/", { replace: false });
            setTimeout(() => {
                gsap.to(window, { duration: 0.25, ease: "power2.out", scrollTo: { y: `#${id}`, offsetY: 80 } });
            }, 100);
        }
    };

    return (
        <li>
            <a ref={linkRef} href={isHome ? `#${name.toLowerCase()}` : `/#${name.toLowerCase()}`} onMouseEnter={handleMouseEnter} onClick={(e) => handleClick(e, name.toLowerCase())} className="upperCase">
                {name}
            </a>
        </li>
    );
};

export default HeaderLink;
