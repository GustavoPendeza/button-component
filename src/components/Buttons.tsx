import React, { useState } from "react";
import "../styles/buttons.css";

interface Props {
    shadow: boolean;
    disable: boolean;
    size: string;
    color: string;
}

export default function Buttons({ shadow, disable, size, color }: Props) {
    const [hoverDefault, setHoverDefault] = useState(false);
    const [hoverOutline, setHoverOutline] = useState(false);
    const [hoverText, setHoverText] = useState(false);
    const [focusDefault, setFocusDefault] = useState(false);
    const [focusOutline, setFocusOutline] = useState(false);
    const [focusText, setFocusText] = useState(false);

    const styles = {
        btnDefault: {
            background: hoverDefault || focusDefault ? `${color}50` : color,
            border: `1px solid ${hoverDefault || focusDefault ? `${color}00` : color}`,
            color: "#eeeeee",
            boxShadow: shadow ? `0px 5px 5px ${color}40` : "",
            transition: "0.2s",
        },
        btnDefaultDisabled: {
            background: color,
            border: `1px solid ${color}`,
            color: "#eeeeee",
            boxShadow: shadow ? `0px 5px 5px ${color}40` : "",
            cursor: "not-allowed",
        },
        btnOutline: {
            border: `1px solid ${color}`,
            color: hoverOutline || focusOutline ? "#eeeeee" : color,
            background: hoverOutline || focusOutline ? color : "transparent",
            boxShadow: shadow ? `0px 5px 5px ${color}40` : "",
            transition: "0.2s",
        },
        btnOutlineDisabled: {
            border: `1px solid ${color}`,
            color: color,
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
            color: color,
            background: "transparent",
            border: "1px solid transparent",
            boxShadow: shadow ? `0px 5px 5px ${color}40` : "",
            cursor: "not-allowed",
        },
    };

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
                Default
            </button>

            <button
                className={size}
                style={disable ? styles.btnOutlineDisabled : styles.btnOutline}
                onMouseEnter={() => setHoverOutline(true)}
                onMouseLeave={() => setHoverOutline(false)}
                onFocus={() => setFocusOutline(true)}
                onBlur={() => setFocusOutline(false)}
            >
                Outline
            </button>

            <button
                className={size}
                style={disable ? styles.btnTextDisabled : styles.btnText}
                onMouseEnter={() => setHoverText(true)}
                onMouseLeave={() => setHoverText(false)}
                onFocus={() => setFocusText(true)}
                onBlur={() => setFocusText(false)}
            >
                Text
            </button>
        </div>
    );
}
