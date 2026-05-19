"use client";

import { DataTable } from "@/components/ui/data-table";
import { itemColumns } from "../../columns/items";
import { itemFields } from "./item-fields";
import { MasterFormDialog } from "@/components/shared/master-form-dialog";
import { createItem } from "@/lib/api/items";

export function ItemPage({ data }: { data: any[] }) {
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

      <DataTable
        columns={itemColumns}
        data={data}
        searchPlaceholder="Search items..."
      />
    </div>
  );
}
