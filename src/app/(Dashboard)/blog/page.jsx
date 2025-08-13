import React from 'react'
import PageContainer from '@/components/shared/PageContainer'
import Breadcrumb from '@/components/shared/BreadCrumb'
import BlogPage from '@/components/blog'

const Blog = () => {
    return (
        <PageContainer title="Blog" description="Blog">
            <Breadcrumb childComponent={'Blog'} />
            <BlogPage />
        </PageContainer>
    )
}

export default Blog
