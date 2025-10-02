import React from 'react'
import PageContainer from '@/components/shared/PageContainer'
import Breadcrumb from '@/components/shared/BreadCrumb'
import LuxaryPropertiesPage from '@/components/properties/luxary'

const Luxury = () => {
    return (
        <PageContainer title="Luxury-Properties" description="Luxury-Properties">
            <Breadcrumb
                childComponent={'Luxury-Properties'} />
            <LuxaryPropertiesPage />
        </PageContainer>
    )
}

export default Luxury
