import React from 'react';
import PageHeader from "@/components/PageHeader";
import ContactFooter from "@/components/ContactFooter";

const Contact: React.FC = () => {
    return (
        <div>
            <PageHeader title="Contact" color="bg-blue-50 text-blue-950"/>
            <ContactFooter vertical={true} />
        </div>
    );
}

export default Contact;