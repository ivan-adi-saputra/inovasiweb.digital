"use client";
import { NextPage } from "next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SkeletonTable from "@/components/skeleton/SkeletonTable";
import ButtonActionTable from "@/components/common/ButtonActionTable";
import { formatPRice } from "@/lib/utils";
import { serviceForm } from "@/types/service";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface Props {
  data: serviceForm[];
  isLoading: boolean;
  handleDelete: (id: string) => void;
}

const serviceColumn: string[] = ["Name", "Benefits", "Price", "Recomended"];

const TableService: NextPage<Props> = ({ data, isLoading, handleDelete }) => {
  const serviceRow = (item: any) => (
    <TableRow key={item._id}>
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
      <TableCell className="font-medium">{item.benefits}</TableCell>
      <TableCell className="font-medium">{formatPRice(+item.price)}</TableCell>
      <TableCell className="font-medium text-center">
        <div className="flex items-center justify-center">
          {item.isRecomended ? (
            <FaRegCheckCircle className="text-green-600" />
          ) : (
            <IoMdCloseCircleOutline className="text-red-600" />
          )}
        </div>
      </TableCell>
      <TableCell>
        <ButtonActionTable
          handleDelete={(id) => handleDelete(id)}
          id={item._id}
          name="service"
        />
      </TableCell>
    </TableRow>
  );

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-80">
              {serviceColumn.map((item, key) => (
                <TableHead key={key}>{item}</TableHead>
              ))}
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              // skeleton for loading
              <SkeletonTable length={serviceColumn.length + 1} />
            ) : (
              <>
                {data?.length > 0 ? (
                  data.map(serviceRow)
                ) : (
                  // table if not found
                  <TableRow>
                    <TableCell
                      colSpan={serviceColumn.length + 1}
                      className="text-center text-gray-400"
                    >
                      Service Not Found
                    </TableCell>
                  </TableRow>
                )}
              </>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableService;
