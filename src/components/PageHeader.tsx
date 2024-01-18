import React from 'react';

type PageHeaderProps = {
    title: string;
    description?: string;
    color?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({
                                                   title,
                                                   description,
                                                   color = 'bg-blue-100 text-blue-950' // Default colors
                                               }) => {
    return (
        <div className={`${color} w-full`}>
            <div className="max-w-4xl mx-auto py-20">
                <h1 className="text-center text-2xl font-semibold">{title}</h1>
                {description && <p className="text-center text-sm mt-4">{description}</p>}
            </div>
        </div>
    );
};

export default PageHeader;
