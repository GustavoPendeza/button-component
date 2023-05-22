import React, { useState } from "react";
import styles from "../app/page.module.css";
import {
    MdSettings,
    MdSearch,
    MdDelete,
    MdLogout,
    MdAccountCircle,
} from "react-icons/md";

interface Props {
    icon: string;
    setIcon: (value: string) => void;
    left: boolean;
    setLeft: (value: boolean) => void;
    right: boolean;
    setRight: (value: boolean) => void;
}

export default function Icon({
    icon,
    setIcon,
    left,
    setLeft,
    right,
    setRight,
}: Props) {
    return (
        <div className={styles.iconContainer}>
            <div>
                <ul>
                    <li>
                        <button
                            className={left === true ? styles.active : ""}
                            onClick={() => (setLeft(true), setRight(false))}
                        >
                            Left
                        </button>
                    </li>
                    <li>
                        <button
                            className={
                                left === false && right === false
                                    ? styles.active
                                    : ""
                            }
                            onClick={() => (setLeft(false), setRight(false))}
                        >
                            None
                        </button>
                    </li>
                    <li>
                        <button
                            className={right === true ? styles.active : ""}
                            onClick={() => (setLeft(false), setRight(true))}
                        >
                            Right
                        </button>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        <button
                            className={icon === "settings" ? styles.active : ""}
                            onClick={() => setIcon("settings")}
                        >
                            <MdSettings className={styles.icon} />
                        </button>
                    </li>
                    <li>
                        <button
                            className={icon === "search" ? styles.active : ""}
                            onClick={() => setIcon("search")}
                        >
                            <MdSearch className={styles.icon} />
                        </button>
                    </li>
                    <li>
                        <button
                            className={icon === "account" ? styles.active : ""}
                            onClick={() => setIcon("account")}
                        >
                            <MdAccountCircle className={styles.icon} />
                        </button>
                    </li>
                    <li>
                        <button
                            className={icon === "delete" ? styles.active : ""}
                            onClick={() => setIcon("delete")}
                        >
                            <MdDelete className={styles.icon} />
                        </button>
                    </li>
                    <li>
                        <button
                            className={icon === "logout" ? styles.active : ""}
                            onClick={() => setIcon("logout")}
                        >
                            <MdLogout className={styles.icon} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
