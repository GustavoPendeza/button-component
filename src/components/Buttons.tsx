import React, { useEffect, useState } from "react";
import "../styles/buttons.css";
import {
    MdAccountCircle,
    MdDelete,
    MdLogout,
    MdSearch,
    MdSettings,
} from "react-icons/md";

interface Props {
    r: number;
    setR: (value: number) => void;
    g: number;
    setG: (value: number) => void;
    b: number;
    setB: (value: number) => void;
    shadow: boolean;
    disable: boolean;
    icon: string;
    left: boolean;
    right: boolean;
    size: string;
    color: string;
}

export default function Buttons({
    r,
    setR,
    g,
    setG,
    b,
    setB,
    shadow,
    disable,
    icon,
    left,
    right,
    size,
    color,
}: Props) {
    const [hoverDefault, setHoverDefault] = useState(false);
    const [hoverOutline, setHoverOutline] = useState(false);
    const [hoverText, setHoverText] = useState(false);
    const [focusDefault, setFocusDefault] = useState(false);
    const [focusOutline, setFocusOutline] = useState(false);
    const [focusText, setFocusText] = useState(false);

    const styles = {
        btnDefault: {
            background: color,
            border: `1px solid ${
                hoverDefault || focusDefault ? `${color}` : color
            }`,
            color:
                r * 0.299 + g * 0.587 + b * 0.114 > 150 ? "#000000" : "#eeeeee",
            boxShadow: shadow ? `0px 5px 5px ${color}40` : "",
            filter: hoverDefault || focusDefault ? "brightness(80%)" : "",
            transition: "0.2s",
        },
        btnDefaultDisabled: {
            background: `${color}80`,
            border: `1px solid ${color}00`,
            color:
                r * 0.299 + g * 0.587 + b * 0.114 > 150 ? "#000000" : "#eeeeee",
            boxShadow: shadow ? `0px 5px 5px ${color}40` : "",
            cursor: "not-allowed",
        },
        btnOutline: {
            border: `1px solid ${color}`,
            color:
                hoverOutline || focusOutline
                    ? r * 0.299 + g * 0.587 + b * 0.114 > 150
                        ? "#000000"
                        : "#eeeeee"
                    : color,
            background: hoverOutline || focusOutline ? color : "transparent",
            boxShadow: shadow ? `0px 5px 5px ${color}40` : "",
            transition: "0.2s",
        },
        btnOutlineDisabled: {
            border: `1px solid ${color}80`,
            color: `${color}80`,
            background: "transparent",
            boxShadow: shadow ? `0px 5px 5px ${color}40` : "",
            cursor: "not-allowed",
        },
        btnText: {
            color: color,
            background: hoverText || focusText ? `${color}50` : "transparent",
            border: "1px solid transparent",
            boxShadow: shadow ? `0px 5px 5px ${color}40` : "",
            transition: "0.2s",
        },
        btnTextDisabled: {
            color: `${color}80`,
            background: "transparent",
            border: "1px solid transparent",
            boxShadow: shadow ? `0px 5px 5px ${color}40` : "",
            cursor: "not-allowed",
        },
    };

    function setIcon() {
        if (icon === "settings") {
            return <MdSettings />;
        } else if (icon === "search") {
            return <MdSearch />;
        } else if (icon === "account") {
            return <MdAccountCircle />;
        } else if (icon === "delete") {
            return <MdDelete />;
        } else if (icon === "logout") {
            return <MdLogout />;
        }
    }

    useEffect(() => {
        setR(parseInt(color.slice(1, 3), 16));
        setG(parseInt(color.slice(3, 5), 16));
        setB(parseInt(color.slice(5, 7), 16));
    }, [color]);

    return (
        <div id="btnContainer">
            <button
                className={size}
                style={disable ? styles.btnDefaultDisabled : styles.btnDefault}
                onMouseEnter={() => setHoverDefault(true)}
                onMouseLeave={() => setHoverDefault(false)}
                onFocus={() => setFocusDefault(true)}
                onBlur={() => setFocusDefault(false)}
            >
                {left === true ? setIcon() : null}
                Default
                {right === true ? setIcon() : null}
            </button>

            <button
                className={size}
                style={disable ? styles.btnOutlineDisabled : styles.btnOutline}
                onMouseEnter={() => setHoverOutline(true)}
                onMouseLeave={() => setHoverOutline(false)}
                onFocus={() => setFocusOutline(true)}
                onBlur={() => setFocusOutline(false)}
            >
                {left === true ? setIcon() : null}
                Outline
                {right === true ? setIcon() : null}
            </button>

            <button
                className={size}
                style={disable ? styles.btnTextDisabled : styles.btnText}
                onMouseEnter={() => setHoverText(true)}
                onMouseLeave={() => setHoverText(false)}
                onFocus={() => setFocusText(true)}
                onBlur={() => setFocusText(false)}
            >
                {left === true ? setIcon() : null}
                Text
                {right === true ? setIcon() : null}
            </button>
        </div>
    );
}
