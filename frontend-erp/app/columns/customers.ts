import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { access } from "fs";

export type Customer = {
  customerId: string;
  customerName: string;
  email?: string;
  contact?: string;
  address?: string;
  action? : string;
};

export const customerColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: "customerId",
    header: "Customer ID",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "contact",
    header: "Contact",
  },
  {
    accessorKey: "address",
    header: "Address",
  },


];