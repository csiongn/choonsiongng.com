// components/SocialLinksList.tsx
import React from 'react';
import { socialLinks } from '@/data/socialLinks';
import SocialLinkItem from '@/components/contact/SocialLinkItem';

type SocialLinksListProps = {
    vertical: boolean;
};

const SocialLinksList: React.FC<SocialLinksListProps> = ({ vertical= false }) => {
    const arrangement = vertical ? 'flex-col' : '';
    return (
        <div className={`flex justify-center items-center flex-wrap ${arrangement} gap-2 m-4`}>
            {socialLinks.map(link => (
                <SocialLinkItem key={link.name} link={link} />
            ))}
        </div>
    );
};

export default SocialLinksList;
