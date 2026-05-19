"use client";

import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  onEdit?: () => void;
  onDelete?: () => void;
  showEdit?: boolean;
  showDelete?: boolean;
};

export function TableActions({
  onEdit,
  onDelete,
  showEdit = true,
  showDelete = true,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      {showEdit && (
        <Button size="icon" variant="destructive" onClick={onEdit}>
          <Pencil className="h-4 w-4" />
        </Button>
      )}

      {showDelete && (
        <Button size="icon" variant="destructive" onClick={onDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
