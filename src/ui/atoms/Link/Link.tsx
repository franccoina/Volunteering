"use client"
import React from 'react';
import Link from 'next/link';
import { ILinkProps } from '@/app/core/application/models/atoms/Link';
import styles from "./Link.module.scss"

const Links: React.FC<ILinkProps> = ({key, href, target, label, onClick, children }) => {
    return (
        <Link
            key={key}
            href={href}
            onClick={onClick}
            target={target}
            className={styles.link}
        >
            {children || label}
        </Link>
    );
};

export default Links;
