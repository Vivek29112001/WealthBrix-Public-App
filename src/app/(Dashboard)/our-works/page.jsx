import React from 'react'
import PageContainer from '@/components/shared/PageContainer'
import Breadcrumb from '@/components/shared/BreadCrumb'
import OurWorksPage from '@/components/our-works'

const OurWork = () => {
    return (
        <PageContainer title="Our-Works" description="Get in touch with us">
            <Breadcrumb childComponent={'Our-Works'} />
            <OurWorksPage />
        </PageContainer>
    )
}

export default OurWork
