import React from "react";
import styles from "../app/page.module.css";

interface Props {
    shadow: boolean;
    setShadow: (value: boolean) => void;
    disable: boolean;
    setDisable: (value: boolean) => void;
    setAction: (action: string) => void;
}

export default function Nav({
    shadow,
    setShadow,
    disable,
    setDisable,
    setAction,
}: Props) {
    function handleChangeAction(action: string) {
        setAction(action);
    }

    function handleShadow() {
        shadow ? setShadow(false) : setShadow(true);
    }

    function handleDisable() {
        disable ? setDisable(false) : setDisable(true);
        console.log(disable)
    }

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <button onClick={handleShadow}>Shadow</button>
                </li>
                <li>
                    <button onClick={handleDisable}>{disable ? 'Enable' : 'Disable'}</button>
                </li>
                <li>
                    <button onClick={() => handleChangeAction("icon")}>
                        Icon
                    </button>
                </li>
                <li>
                    <button onClick={() => handleChangeAction("color")}>
                        Color
                    </button>
                </li>
                <li>
                    <button onClick={() => handleChangeAction("size")}>
                        Size
                    </button>
                </li>
            </ul>
        </nav>
    );
}
