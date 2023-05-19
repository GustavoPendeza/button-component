"use client";

import Buttons from "@/components/Buttons";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import { useState } from "react";
import Size from "@/components/Size";
import Color from "@/components/Color";

export default function Home() {
    const [shadow, setShadow] = useState(false);
    const [disable, setDisable] = useState(false);
    const [action, setAction] = useState<string>("size");
    const [size, setSize] = useState<string>("btnRg");
    const [color, setColor] = useState<string>("#2962FF");

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

            <main className={styles.main}>
                <Buttons shadow={shadow} disable={disable} size={size} color={color} />

                <section className={styles.actionSection}>
                    <h2>{action}</h2>

                    {action === "size" ? (
                        <Size size={size} setSize={setSize} />
                    ) : null}

                    {action === "color" ? (
                        <Color color={color} setColor={setColor} />
                    ) : null}

                    {action === "Icon" ? "Icon" : null}
                </section>
            </main>
        </>
    );
}
