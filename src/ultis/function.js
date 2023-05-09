export function handlePagination(paging, sorter, setFilterData) {
  let sortKey = "orderBy";
  let currentKey = "orderByDesc";
  if (sorter.order === "descend") {
    sortKey = "orderByDesc";
    currentKey = "orderBy";
  } else {
    sortKey = "orderBy";
    currentKey = "orderByDesc";
  }
  setFilterData((oldState) => ({
    ...oldState,
    pageIndex: paging.current,
    pageSize: paging.pageSize,
    [sortKey]: sorter.order ? sorter.field : undefined,
    [currentKey]: undefined,
  }));
}
