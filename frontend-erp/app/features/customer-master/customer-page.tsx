"use client";

import { useState, useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/ui/data-table";
import { customerColumns, Customer } from "../../columns/customers";
import { customerFields } from "./customer-fields";
import { MasterFormDialog } from "@/components/shared/master-form-dialog";
import {
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "@/lib/api/customers";
import { TableActions } from "@/components/shared/table-actions";

type Props = {
  data: any[];
};

export function CustomerPage({ data }: Props) {
  // const router = useRouter(); // route to another page for edit
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const columns: ColumnDef<Customer>[] = [
    ...customerColumns, // spread operator to include all columns from customerColumns
    {
      id: "actions",
      header: "Actions",

      cell: ({ row }) => {
        const customer = row.original;

        async function handleDelete() {
          const confirmDelete = confirm(`Delete ${customer.customerName}?`);

          if (!confirmDelete) return;
          try {
            await deleteCustomer(customer.customerId);
            alert("Customer deleted successfully");
            window.location.reload();
          } catch (err) {
            alert("Delete failed");
          }
        }

        function handleEdit() {
          console.log("EDIT CLICKED");
          setSelectedCustomer(customer);
          setOpen(true);
          
          // edit in another page - not in the same page
          // router.push(`/customer-master/edit/${customer.customerId}`);
        }

        return <TableActions onEdit={handleEdit} onDelete={handleDelete} />;
      },
    },
  ];



  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customer Master</h1>

        <MasterFormDialog
          title="Customer"
          fields={customerFields}
          initialValues={{
            customerId: "",
            customerName: "",
            email: "",
            contact: "",
            address: "",
          }}
          onSubmit={createCustomer}
        />
      </div>
      {selectedCustomer && (
        <MasterFormDialog
          open={open}
          setOpen={setOpen}
          title="Edit Customer"
          fields={customerFields}
          initialValues={selectedCustomer}
          onSubmit={(data) => updateCustomer(selectedCustomer.customerId, data)}
        />
      )}
      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search customers..."
      />
    </div>
  );
}
