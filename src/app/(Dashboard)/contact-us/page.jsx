import React from 'react'
import PageContainer from '@/components/shared/PageContainer'
import Breadcrumb from '@/components/shared/BreadCrumb'
import ContactUsPage from '@/components/contact-us'

const ContactUs = () => {
    return (
        <PageContainer title="Contact-Us" description="Get in touch with us">
            <Breadcrumb childComponent={'Contact-Us'} />
            <ContactUsPage />
        </PageContainer>
    )
}

export default ContactUs
