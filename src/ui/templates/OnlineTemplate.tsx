"use client";
import React, { useEffect, useState, useCallback } from "react";
import Pagination from "../molecules/Pagination/Pagination";
import HeaderOnline from "../organisms/Header/HeaderOnline";

const OnlineTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardData, setCardData] = useState<Array<unknown>>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchCardData = useCallback(async (page: string) => {
    setLoading(true);
    try {
      const url = `${page}`;

      const response = await fetch(url, {
        method: "GET",
        headers: { 'Accept': "*/*" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setCardData(responseData.content);
      console.log(responseData);

      const pages = responseData.totalPages;
      setTotalPages(pages);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCardData(currentPage.toString());
  }, [currentPage, fetchCardData]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="onlineTemplate">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <HeaderOnline/>
          <div className="cards-list">
            {cardData.map((item) => (
              <></>
            ))}
          </div>
          {children}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </>
      )}
    </main>
  );
};

export default OnlineTemplate;
