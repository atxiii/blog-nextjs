export const sort = (
  data: Array<any>,
  sort: 'asc' | 'desc',
  order: 'title' | 'date',
) => {
  return data.sort((a: any, b: any) => {
    if (order === 'title') return sortByTitle(a, b, sort);
    return sortByDate(a, b, sort);
  });
};

function sortByTitle<Number>(a: any, b: any, order: string) {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  const sanitizeOrder = order.toUpperCase();

  // Ascending
  if (sanitizeOrder == 'ASC') {
    if (titleA > titleB) return 1;
    if (titleA < titleB) return -1;
  }

  // Descending
  if (sanitizeOrder == 'DESC') {
    if (titleA > titleB) return -1;
    if (titleA < titleB) return 1;
  }

  return 0;
}

function sortByDate<Number>(a: any, b: any, order: string) {
  const sanitizeOrder = order.toUpperCase();

  const dateA = new Date(a.publishedAt).getTime();
  const dateB = new Date(b.publishedAt).getTime();

  // Descending
  if (sanitizeOrder == 'DESC') {
    if (dateA > dateB) return -1;
  }

  if (dateB > dateA) return -1;

  return 0;
}

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
