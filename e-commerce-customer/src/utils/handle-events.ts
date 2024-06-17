export const onMouseOverStar = (e: React.MouseEvent) => {
  e.preventDefault();
  e.currentTarget.setAttribute("fill", "yellow");
};

export const onMouseOutStar = (e: React.MouseEvent, fillColor: string) => {
  e.preventDefault();
  e.currentTarget.setAttribute("fill", fillColor);
};
