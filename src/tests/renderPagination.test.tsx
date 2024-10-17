import { renderPagination } from "../utils/renderPagination";

describe("renderPagination", () => {
  it("should generate pagination buttons correctly", () => {
    const page = 3;
    const totalPages = 5;
    const changePage = jest.fn();

    const pagination = renderPagination(page, changePage, totalPages);

    expect(pagination).toHaveLength(9);
  });
});
