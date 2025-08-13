import React from 'react'
import PageContainer from '@/components/shared/PageContainer'
import Breadcrumb from '@/components/shared/BreadCrumb'
import CareerPage from '@/components/career'

const Carrer = () => {
    return (
        <PageContainer title="Carrer" description="Carrer">
            <Breadcrumb childComponent={'Carrer'} />
            <CareerPage />
        </PageContainer>
    )
}

export default Carrer
