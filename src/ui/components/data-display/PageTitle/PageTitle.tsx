import React from 'react'
import { PageSubtitleStyled, PageTitleContainer, PageTitleStyled } from './PageTitle.style';
interface PageTitleProps {
    title: string;
    subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle,  }) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {title}
            </PageTitleStyled>
            <PageSubtitleStyled>
                {subtitle}
            </PageSubtitleStyled>
        </PageTitleContainer>
    )
}

export default PageTitle
