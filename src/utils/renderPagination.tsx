export const renderPagination = (
  page: number,
  changePage: (newPage: number) => void,
  totalPages: number
) => {
  const pagination = [];

  if (page > 1) {
    pagination.push(
      <button key="first" onClick={() => changePage(1)}>
        First
      </button>
    );
    pagination.push(
      <button key="prev" onClick={() => changePage(page - 1)}>
        Previous
      </button>
    );
  }

  if (page > 3) {
    pagination.push(
      <button key="page-1" onClick={() => changePage(1)}>
        1
      </button>
    );
    pagination.push(<span key="dots1">...</span>);
  }

  for (
    let i = Math.max(1, page - 2);
    i <= Math.min(totalPages, page + 2);
    i++
  ) {
    pagination.push(
      <button
        key={`page-${i}`}
        onClick={() => changePage(i)}
        style={{
          backgroundColor: i === page ? "#ccc" : "#fff",
        }}
      >
        {i}
      </button>
    );
  }
  if (page < totalPages - 2) {
    pagination.push(<span key="dots2">...</span>);
    pagination.push(
      <button key={`page-${totalPages}`} onClick={() => changePage(totalPages)}>
        {totalPages}
      </button>
    );
  }

  if (page < totalPages) {
    pagination.push(
      <button key="next" onClick={() => changePage(page + 1)}>
        Next
      </button>
    );
    pagination.push(
      <button key="last" onClick={() => changePage(totalPages)}>
        Last
      </button>
    );
  }

  return pagination;
};
