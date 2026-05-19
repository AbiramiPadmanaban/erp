"use client";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

type Field = {
  name: string;
  placeholder: string;
  type?: string;
};

type Props = {
  title: string;
  fields: Field[];
  initialValues: Record<string, any>;
  onSubmit: (data: any) => Promise<void>;
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

export function MasterFormDialog({
  title,
  fields,
  initialValues,
  onSubmit,
  open,
  setOpen
}: Props) {
  const [formData, setFormData] = useState(initialValues);

  useEffect(() => {
    setFormData(initialValues);
  }, [initialValues]);
const isControlled = open !== undefined && setOpen !== undefined;
  async function handleSubmit() {
    try{
    await onSubmit(formData);

    alert(`${title} Created`);}
    catch(error: any) {
      alert(`Error: ${error.message}`);
    }
  }

  return (
    <Dialog
      {...(isControlled
        ? {
            open,
            onOpenChange: setOpen,
          }
        : {})}
    >
      {!isControlled && (
        <DialogTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded">
            <Plus size={18} />
            Add {title}
          </button>
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add {title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {fields.map((field) => (
            <Input
              key={field.name}
              type={field.type ?? "text"}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [field.name]:
                    field.type === "number"
                      ? Number(e.target.value)
                      : e.target.value,
                })
              }
            />
          ))}

          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
