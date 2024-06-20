export enum StatusEnum {
  ACTIVE = "ACTIVE",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  DELETED = "DELETED",
}

export const statusRender = {
  ACTIVE: "In stock",
  OUT_OF_STOCK: "Out of stock",
}

export const statusColor = {
  ACTIVE: "text-green-500",
  OUT_OF_STOCK: "text-red-1"
}