import React from "react";
import styles from "../app/page.module.css";

interface Props {
    size: string;
    setSize: (arg: string) => void;
}

export default function Size({ size, setSize }: Props) {
    return (
        <div className={styles.sizeContainer}>
            <ul>
                <li>
                    <button
                        className={size === "btnSm" ? styles.active : ""}
                        onClick={() => setSize("btnSm")}
                    >
                        Small
                    </button>
                </li>
                <li>
                    <button
                        className={size === "btnRg" ? styles.active : ""}
                        onClick={() => setSize("btnRg")}
                    >
                        Regular
                    </button>
                </li>
                <li>
                    <button
                        className={size === "btnLg" ? styles.active : ""}
                        onClick={() => setSize("btnLg")}
                    >
                        Large
                    </button>
                </li>
            </ul>
        </div>
    );
}
