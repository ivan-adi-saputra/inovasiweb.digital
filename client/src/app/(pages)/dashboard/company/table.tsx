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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { config } from "@/config";
import ButtonActionTable from "@/components/common/ButtonActionTable";
import { companyForm } from "@/types/company";

interface Props {
  data: companyForm[];
  isLoading: boolean;
  handleDelete: (id: string) => void;
}

const companyColumn: string[] = ["Image", "Name"];

const TableCompany: NextPage<Props> = ({ data, isLoading, handleDelete }) => {
  const companyRow = (item: any) => (
    <TableRow key={item._id}>
      <TableCell>
        <Avatar>
          <AvatarImage
            src={`${config.base_url}/${item.image.name}`}
            alt={item.name}
          />
        </Avatar>
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
      <TableCell>
        <ButtonActionTable
          handleDelete={(id) => handleDelete(id)}
          id={item._id}
          name="company"
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
              {companyColumn.map((item, key) => (
                <TableHead key={key}>{item}</TableHead>
              ))}
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              // skeleton for loading
              <SkeletonTable length={companyColumn.length + 1} />
            ) : (
              <>
                {data?.length > 0 ? (
                  data.map(companyRow)
                ) : (
                  // table if not found
                  <TableRow>
                    <TableCell
                      colSpan={companyColumn.length + 1}
                      className="text-center text-gray-400"
                    >
                      Company Not Found
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

export default TableCompany;
