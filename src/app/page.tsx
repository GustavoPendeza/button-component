"use client";

import Buttons from "@/components/Buttons";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import { useState } from "react";
import Size from "@/components/Size";
import Color from "@/components/Color";
import Icon from "@/components/Icon";

export default function Home() {
    const [shadow, setShadow] = useState(false);
    const [disable, setDisable] = useState(false);
    const [action, setAction] = useState<string>("size");
    const [icon, setIcon] = useState<string>("settings");
    const [left, setLeft] = useState<boolean>(false);
    const [right, setRight] = useState<boolean>(false);
    const [size, setSize] = useState<string>("btnRg");
    const [color, setColor] = useState<string>("#2962FF");
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);

    const style = {
        main: {
            background:
                r * 0.299 + g * 0.587 + b * 0.114 > 150 ? "#1a1c22" : "#ffffff",
            transition: "0.2s",
        },
    };

    return (
        <>
            <header className={styles.header}>
                <h3 id={styles.title}>
                    <span id={styles.titleButton}>Button</span>{" "}
                    <span id={styles.titleComponent}>Component</span>
                </h3>

                <Nav
                    shadow={shadow}
                    setShadow={setShadow}
                    disable={disable}
                    setDisable={setDisable}
                    setAction={setAction}
                />
            </header>

            <main className={styles.main} style={style.main}>
                <Buttons
                    r={r}
                    setR={setR}
                    g={g}
                    setG={setG}
                    b={b}
                    setB={setB}
                    shadow={shadow}
                    disable={disable}
                    icon={icon}
                    left={left}
                    right={right}
                    size={size}
                    color={color}
                />

                <section className={styles.actionSection}>
                    <h2>{action}</h2>

                    {action === "size" ? (
                        <Size size={size} setSize={setSize} />
                    ) : null}

                    {action === "color" ? (
                        <Color color={color} setColor={setColor} />
                    ) : null}

                    {action === "icon" ? (
                        <Icon
                            icon={icon}
                            setIcon={setIcon}
                            left={left}
                            setLeft={setLeft}
                            right={right}
                            setRight={setRight}
                        />
                    ) : null}
                </section>
            </main>
        </>
    );
}
