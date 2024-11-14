import styles from "./Dash.module.scss";
import { IAllProjectsRequest } from '@/app/core/application/dto';
import { ProjectService } from '@/app/infrastructure';
import DashboardTemplate from "@/ui/templates/dashboard/DashboardTemplate";
import React from 'react'
import HeaderOnline from '@/ui/organisms/HeaderOnline/HeaderOnline';
interface IProps {
    searchParams: IAllProjectsRequest
}

export const generateMetadata = async ({ searchParams }: IProps) => {
    const page = searchParams.page ?? 1;

    return {
        title: `Projects | Page ${page}`,
        description: `List of projects on page ${page}`,
        meta: [
            { name: 'description', content: `List of projects on page ${page}` },
            { property: 'og:title', content: `Projects | Page ${page}` },
            { property: 'og:description', content: `List of projects on page ${page}` },
        ],
    }
}

const projectService = new ProjectService();

export default async function Dashboard({ searchParams }: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const data = await projectService.findAll({ page, size: 3 });

    return (
        <div className={styles.dashContent}>
            <HeaderOnline project={null}/>
            <DashboardTemplate data={data} pagination={data.metadata} />
        </div>
    )
}
