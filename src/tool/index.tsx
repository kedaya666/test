export const toThousand = (num: any) => {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
};
