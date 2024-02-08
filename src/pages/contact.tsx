import React from 'react';
import PageHeader from "@/components/PageHeader";
import ContactFooter from "@/components/contact/ContactFooter";

const Contact: React.FC = () => {
    return (
        <div>
            <PageHeader title="Contact" color="bg-blue-50 text-blue-950 dark:bg-blue-950 dark:text-blue-50"/>
            <ContactFooter vertical={true} />
        </div>
    );
}

export default Contact;
