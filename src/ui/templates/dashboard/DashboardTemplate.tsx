"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { IAllProjectsResponse, Metadata } from '@/app/core/application/dto';
import styles from "./DashboardTemplate.module.scss"
import Table from '@/ui/organisms/Table/Table';
import PageNavigation from '@/ui/molecules/Pagination/Pagination';
import GroupCard from '@/ui/organisms/GroupCards/GroupCards';

interface IDashboardTemplateProps {
  pagination: Metadata,
  data: IAllProjectsResponse
}
const DashboardTemplate = ({ data, pagination }: IDashboardTemplateProps) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const handleNext = (nextPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (nextPage <= pagination.totalPages) {
      params.set('page', nextPage.toString());
      router.push(`?${params.toString()}`);
    }
  };

  const handlePrevious = (backPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (backPage > 0) {
      params.set('page', backPage.toString());
      router.push(`?${params.toString()}`);
    }
  };

  const currentPage = pagination.currentPage;
  return (
    <div className={styles.container}>
      <GroupCard allData={data} />
      <div className={styles.div}>
        <Table allData={data} />
        <PageNavigation
          pagination={pagination}
          onNext={() => handleNext(currentPage + 1)}
          onPrevious={() => handlePrevious(currentPage - 1)}
        />
      </div>
    </div>
  );
};

export default DashboardTemplate;