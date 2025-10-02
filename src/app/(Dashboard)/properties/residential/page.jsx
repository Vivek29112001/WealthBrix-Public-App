'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import PageContainer from '@/components/shared/PageContainer'
import Breadcrumb from '@/components/shared/BreadCrumb'
import ResidentialPropertiesPage from '@/components/properties/residential'

const Residential = () => {
    return (
        <PageContainer title="Residential Properties" description="Residential Properties">
            <Breadcrumb
                childComponent={'Residential Properties'} />
            <ResidentialPropertiesPage />
        </PageContainer>
    )
}

export default Residential
