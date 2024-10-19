"use client";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

interface Props {
  handleDelete: (id: string) => void;
  id: string;
  name: string;
}

const ButtonActionTable: NextPage<Props> = ({ handleDelete, id, name }) => {
  const router = useRouter();

  return (
    <div className="flex justify-end space-x-2">
      <Button
        onClick={() => router.push(`/dashboard/${name}/edit/${id}`)}
        size={"icon"}
        variant={"outline"}
        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
      >
        <HiPencilAlt />
      </Button>
      <Button
        onClick={() => handleDelete(id)}
        size={"icon"}
        variant={"outline"}
        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
      >
        <FaTrashAlt />
      </Button>
    </div>
  );
};

export default ButtonActionTable;
