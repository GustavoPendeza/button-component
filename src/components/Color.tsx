import React from "react";
import styles from "../app/page.module.css";
import { HexColorInput, HexColorPicker } from "react-colorful";

interface Props {
    color: string;
    setColor: (value: string) => void;
}

export default function Color({ color, setColor }: Props) {
    return (
        <div className={styles.colorContainer}>
            <div>
                <HexColorPicker color={color} onChange={setColor} />
                <HexColorInput color={color} onChange={setColor} className={styles.hexcolorInput} />
            </div>

            <div className={styles.colorsList}>
                <ul>
                    <li>
                        <button
                            className={color === "#E0E0E0" ? styles.active : ""}
                            onClick={() => setColor("#E0E0E0")}
                        >
                            Default
                        </button>
                    </li>
                    <li>
                        <button
                            className={color === "#2962FF" ? styles.active : ""}
                            onClick={() => setColor("#2962FF")}
                        >
                            Primary
                        </button>
                    </li>
                    <li>
                        <button
                            className={color === "#455A64" ? styles.active : ""}
                            onClick={() => setColor("#455A64")}
                        >
                            Secondary
                        </button>
                    </li>
                    <li>
                        <button
                            className={color === "#D32F2F" ? styles.active : ""}
                            onClick={() => setColor("#D32F2F")}
                        >
                            Danger
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
