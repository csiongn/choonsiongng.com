import React from 'react';
import SocialLink from "@/data/SocialLink";

const SocialLinkItem: React.FC<{ link: SocialLink }> = ({ link }) => {
    return (
        <a href={link.url} className="flex items-center justify-center gap-2 p-4 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={link.name} className="w-6 h-6" />
            <span>{link.name}</span>
        </a>
    );
};

export default SocialLinkItem;
