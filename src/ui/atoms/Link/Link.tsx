"use client"
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ILinkProps } from '@/models/atoms/Link';

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 10px;
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 400;
    transition: 0.4s;

    &:hover {
        font-weight: 700;
        transition: 0.4s;
    }
`;

const Links: React.FC<ILinkProps> = ({className, key, href, target, label, onClick, children }) => {
    return (
        <StyledLink
            key={key}
            href={href}
            onClick={onClick}
            target={target}
            className={className}
        >
            {children || label}
        </StyledLink>
    );
};

export default Links;
