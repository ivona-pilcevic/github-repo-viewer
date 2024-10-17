export const renderPagination = (
  page: number,
  changePage: (newPage: number) => void,
  totalPages: number
) => {
  const pagination = [];
  const buttonStyle = {
    backgroundColor: "#58a6ff",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    margin: "0 5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ccc",
  };

  const handleButtonClick = (pageNum: number) => {
    changePage(pageNum);
  };

  if (page > 1) {
    pagination.push(
      <button
        key="first"
        onClick={() => handleButtonClick(1)}
        style={buttonStyle}
      >
        First
      </button>
    );
    pagination.push(
      <button
        key="prev"
        onClick={() => handleButtonClick(page - 1)}
        style={buttonStyle}
      >
        Previous
      </button>
    );
  }

  if (page > 3) {
    pagination.push(
      <button
        key="page-1"
        onClick={() => handleButtonClick(1)}
        style={buttonStyle}
      >
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
        onClick={() => handleButtonClick(i)}
        style={i === page ? activeButtonStyle : buttonStyle}
      >
        {i}
      </button>
    );
  }
  if (page < totalPages - 2) {
    pagination.push(<span key="dots2">...</span>);
    pagination.push(
      <button
        key={`page-${totalPages}`}
        onClick={() => handleButtonClick(totalPages)}
        style={buttonStyle}
      >
        {totalPages}
      </button>
    );
  }

  if (page < totalPages) {
    pagination.push(
      <button
        key="next"
        onClick={() => handleButtonClick(page + 1)}
        style={buttonStyle}
      >
        Next
      </button>
    );
    pagination.push(
      <button
        key="last"
        onClick={() => handleButtonClick(totalPages)}
        style={buttonStyle}
      >
        Last
      </button>
    );
  }

  return pagination;
};
