"use client";
import { NextPage } from "next";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/legacy/image";
import { HiPencilAlt } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import SkeletonTable from "@/components/skeleton/SkeletonTable";

interface Props {
  data: any;
  isLoading: boolean;
}

const clientColumn: string[] = ["Logo", "Name", "Email", "Nomor"];

const TableClient: NextPage<Props> = ({ data, isLoading }) => {
  const { toast } = useToast();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result: any) => {
        if (result.isConfirmed) {
          //   await deleteClient(id).unwrap();

          toast({
            title: "Successfully",
            description: "Delete Client Successfully",
          });
        }
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Delete Client Failed",
        description: err?.data?.message || "Internal Server Error",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-80">
              {clientColumn.map((item, key) => (
                <TableHead key={key}>{item}</TableHead>
              ))}
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <SkeletonTable length={clientColumn.length + 1} />
            ) : (
              <>
                {data?.data?.length > 0 ? (
                  data.data.map((item: any, key: number) => (
                    <TableRow key={key}>
                      <TableCell>
                        {item.image ? (
                          <Avatar>
                            <AvatarImage src={item.image} alt={item.name} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        ) : (
                          <Avatar>
                            <Image
                              src={`https://ui-avatars.com/api/?name=${item.name}&background=random`}
                              alt={item.name}
                              layout="fill"
                              objectFit="cover"
                            />
                          </Avatar>
                        )}
                      </TableCell>

                      <TableCell className="font-medium">
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          {item.description && (
                            <p className="text-xs text-gray-600 dark:text-gray-400 truncate w-[90px]">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{item?.contact?.email || " - "}</TableCell>
                      <TableCell>
                        {item?.contact?.numberPhone || " - "}
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-end space-x-2">
                          <Button
                            onClick={() =>
                              router.push(`/dashboard/client/edit/${item._id}`)
                            }
                            size={"icon"}
                            variant={"outline"}
                            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
                          >
                            <HiPencilAlt />
                          </Button>
                          <Button
                            onClick={() => handleDelete(item._id)}
                            size={"icon"}
                            variant={"outline"}
                            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                          >
                            <FaTrashAlt />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={clientColumn.length + 1}
                      className="text-center text-gray-400"
                    >
                      Client Not Found
                    </TableCell>
                  </TableRow>
                )}
              </>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">{data?.data?.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default TableClient;
