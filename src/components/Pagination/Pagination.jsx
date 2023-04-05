import { useState } from 'react';
import {
  PaginationList,
  PaginationItem,
  PaginationButton,
  PaginationPageButton,
} from './Pagination.styled';

export default function Pagination() {
  const [activePage, setActivePage] = useState(1);

  const pages = [1, 2, 3, 4, 40];

  const goPrevPage = () => {
    if (activePage === 1) {
      return;
    }

    setActivePage(prev => prev - 1);
  };

  const goNextPage = () => {
    if (activePage === pages[pages.length - 1]) {
      return;
    }

    setActivePage(prev => prev + 1);
  };

  return (
    <PaginationList>
      <PaginationItem>
        <PaginationButton onClick={goPrevPage}>{'<'}</PaginationButton>
      </PaginationItem>
      {pages.map(page => (
        <PaginationItem key={page}>
          <PaginationPageButton
            isActive={page === activePage}
            onClick={e => setActivePage(page)}
          >
            {page}
          </PaginationPageButton>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationButton onClick={goNextPage}>{'>'}</PaginationButton>
      </PaginationItem>
    </PaginationList>
  );
}
