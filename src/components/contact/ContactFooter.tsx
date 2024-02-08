import React from 'react';
import SocialLinksList from "@/components/contact/SocialLinksList";

type ContactFooterProps = {
    vertical?: boolean;
};

const ContactFooter: React.FC<ContactFooterProps> = ({vertical = false }) => {
    return (
        <SocialLinksList vertical={vertical} />
    );
};

export default ContactFooter;
