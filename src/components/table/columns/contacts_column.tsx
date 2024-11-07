import { ContactRecord } from "@/types/types";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Text } from "@radix-ui/themes";
import { ColumnDef } from "@tanstack/react-table";
import { X } from "lucide-react";

const DetailModal = ({ note }: { note: string }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="soft">View</Button>
      </Dialog.Trigger>
      <Dialog.Content minHeight={"30rem"}>
        <Dialog.Title>Applicant Details</Dialog.Title>
        <Dialog.Description size={"1"} mb={"4"}>
          Comprehensive information about the applicant
        </Dialog.Description>

        <Text>{note}</Text>
        <Dialog.Close>
          <Button variant="soft" className="absolute top-4 right-4">
            <X />
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export const contact_columns: ColumnDef<ContactRecord>[] = [
  {
    accessorKey: "created",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created
          {column.getIsSorted() === "asc" ? (
            <ArrowUpIcon className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>{new Date(row.getValue("created")).toLocaleString()}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => <div>{row.getValue("subject")}</div>,
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <div className="truncate max-w-[300px]">{row.getValue("message")}</div>
    ),
  },

  {
    accessorKey: "message",
    header: "View",
    cell: ({ row }) => (
      <div>
        <DetailModal note={row.getValue("message")} />
      </div>
    ),
  },
];
