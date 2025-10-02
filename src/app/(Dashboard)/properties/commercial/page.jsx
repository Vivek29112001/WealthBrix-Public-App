import React from 'react'
import PageContainer from '@/components/shared/PageContainer'
import Breadcrumb from '@/components/shared/BreadCrumb'
import CommercialPropertiesPage from '@/components/properties/commercial'

const Commercial = () => {
    return (
        <PageContainer title="Commercial Properties" description="Commercial Properties">
            <Breadcrumb
                childComponent={'Commercial Properties'} />
            <CommercialPropertiesPage />
        </PageContainer>
    )
}

export default Commercial
