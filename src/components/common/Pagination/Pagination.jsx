import React, { useState, useEffect } from "react";

import Arrow from "./Arrow/Arrow";

import { StyledButtonPage } from "./StyledPagination";

const Pagination = ({
  totalUsers = 0,
  usersCountOnPage = 5,
  setCurrentPage,
}) => {
  const [qualityUsersOnPage, setQualityUsersOnPage] = useState(
    usersCountOnPage
  );
  const [qualityUsers, setQualityUsers] = useState(totalUsers);

  const totalPages = Math.ceil(totalUsers / usersCountOnPage);
  const totalGroup = Math.ceil(totalPages / 5);

  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const [firstPage, setFirstPage] = useState(pages[0]);
  const [lastPage, setLastPage] = useState(pages[pages.length - 1]);
  const [groupPages, setGroupPages] = useState(1);
  const [firstPageGroup, setFirstPageGroup] = useState(0);
  const [lastPageGroup, setLastPageGroup] = useState(4);
  const [currentPage, setCurrentPagePagination] = useState(0);

  useEffect(() => {
    setQualityUsersOnPage(usersCountOnPage);
    setQualityUsers(totalUsers);
  }, [totalUsers, usersCountOnPage]);

  const nextPage = (sideArrow, group = groupPages, pages = 0) => {
    const numberGroupPage = sideArrow
      ? sideArrow === "right"
        ? group + 1
        : group - 1
      : "";
    setGroupPages(numberGroupPage ? numberGroupPage : group);
    setFirstPageGroup(pages !== 0 ? pages - 5 : numberGroupPage * 5 - 5);
    setLastPageGroup(pages !== 0 ? pages : numberGroupPage * 5 - 1);
  };

  return (
    <>
      {groupPages > 1 ? <Arrow side="left" nextPage={nextPage} /> : ""}
      {groupPages > 1 ? (
        <>
          <StyledButtonPage
            onClick={() => {
              setCurrentPage(1);
              nextPage("", 1, 5);
            }}
          >
            1
          </StyledButtonPage>
          <StyledButtonPage>...</StyledButtonPage>
        </>
      ) : (
        ""
      )}
      {pages
        .filter(
          (page, index) => index >= firstPageGroup && index <= lastPageGroup
        )
        .map((page) => (
          <StyledButtonPage
            key={page}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page}
          </StyledButtonPage>
        ))}
      {groupPages < totalGroup ? (
        <>
          <StyledButtonPage>...</StyledButtonPage>
          <StyledButtonPage
            onClick={() => {
              setCurrentPage(totalPages);
              nextPage("", totalGroup, totalPages);
            }}
          >
            {totalPages}
          </StyledButtonPage>
        </>
      ) : (
        ""
      )}

      {groupPages < totalGroup ? (
        <Arrow side="right" nextPage={nextPage} />
      ) : (
        ""
      )}
    </>
  );
};

export default React.memo(Pagination);
