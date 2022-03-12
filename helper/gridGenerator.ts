export const themeGrids = (
  device: 'mobile' | 'desktop' | 'tablet',
  col: '1' | '2' | '3' | '4',
) => {
  return `col-${device}-${col}`;
};
