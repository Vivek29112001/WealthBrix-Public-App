import React from 'react'
import PageContainer from '@/components/shared/PageContainer'
import Breadcrumb from '@/components/shared/BreadCrumb'
import ProjectsPage from '@/components/projects'

const Projects = () => {
    return (
        <PageContainer title="projects" description="Get in touch with us">
            <Breadcrumb childComponent={'Projects'} />
            <ProjectsPage />
        </PageContainer>
    )
}

export default Projects
