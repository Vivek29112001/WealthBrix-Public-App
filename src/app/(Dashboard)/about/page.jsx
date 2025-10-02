import React from 'react'
import PageContainer from '@/components/shared/PageContainer'
import Breadcrumb from '@/components/shared/BreadCrumb'
import AboutPage from '@/components/about'

const About = () => {
    return (
        <PageContainer title="About-Us" description="About-Us">
            <Breadcrumb childComponent={'About-Us'} />
            <AboutPage />
        </PageContainer>
    )
}

export default About
