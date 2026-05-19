"use client";

import { DataTable } from "@/components/ui/data-table";
import { itemColumns } from "../../columns/items";
import { useState } from "react";
import { itemFields } from "./item-fields";
import { MasterFormDialog } from "@/components/shared/master-form-dialog";
import { createItem, deleteItem, updateItem } from "@/lib/api/items";
import { TableActions } from "@/components/shared/table-actions";


export function ItemPage({ data }: { data: any[] }) {


  const [open,setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const columns = [
  ...itemColumns,
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }: { row: any }) => {
      const item = row.original;

  function HandleEdit() {

    setSelectedItem(item);
    setOpen(true);
  
  }
  
  function HandleDelete() {
    const confirmDelete = confirm(`Delete ${item.ItemName}?`);
    if (!confirmDelete) return;

    try {
      deleteItem(item.itemId);
      alert("Item deleted successfully");
      window.location.reload();
    } catch (err) {
      alert("Delete failed");
    }
  }
  
  return (<TableActions onEdit={HandleEdit} onDelete={HandleDelete} />);
  }
},];
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Item Master</h1>

        <MasterFormDialog
          title="Item"
          fields={itemFields}
          initialValues={{
            itemId: "",
            ItemName: "",
            itemDesc: "",
            UOM: "",
            itemPrice: 0,
          }}
          onSubmit={createItem}
        />
      </div>

      {selectedItem && (
        <MasterFormDialog
        open={open}
        setOpen={setOpen}
          title="Edit Item"
          fields={itemFields}
          initialValues={selectedItem}
          onSubmit={(data) => updateItem(selectedItem.itemId, data)}
        />
      )}

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search items..."
      />
    </div>
  );
}
