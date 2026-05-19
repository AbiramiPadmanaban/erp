import { ColumnDef } from "@tanstack/react-table";

export type Item = {
  itemId: string;
  ItemName: string;
  itemDesc: string;
  UOM: string;
  itemPrice: number;
};

export const itemColumns: ColumnDef<Item>[] = [
  {
    accessorKey: "itemId",
    header: "Item ID",
  },
  {
    accessorKey: "ItemName",
    header: "Item Name",
  },
  {
    accessorKey: "itemDesc",
    header: "Description",
  },
  {
    accessorKey: "UOM",
    header: "UOM",
  },
  {
    accessorKey: "itemPrice",
    header: "Price",
  },
];