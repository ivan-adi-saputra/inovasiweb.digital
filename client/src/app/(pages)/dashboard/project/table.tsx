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
import { formatDate } from "date-fns";
import { ProjectResponse } from "@/types/project";

interface Props {
  data: ProjectResponse[];
  isLoading: boolean;
  handleDelete: (id: string) => void;
}

const projectColumn: string[] = ["Name", "Date", "Service", "Features"];

const TableProject: NextPage<Props> = ({ data, isLoading, handleDelete }) => {
  const projectRow = (item: any) => (
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
      <TableCell className="font-medium">
        {formatDate(item.date, "dd-MM-yyyy")}
      </TableCell>
      <TableCell className="font-medium">{item?.service?.name}</TableCell>
      <TableCell className="font-medium">
        {item.features && item.features.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {item.features.map((feature: string, index: number) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-gray-500">No features listed</span>
        )}
      </TableCell>
      <TableCell>
        <ButtonActionTable
          handleDelete={(id) => handleDelete(id)}
          id={item._id}
          name="project"
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
              {projectColumn.map((item, key) => (
                <TableHead key={key}>{item}</TableHead>
              ))}
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              // skeleton for loading
              <SkeletonTable length={projectColumn.length + 1} />
            ) : (
              <>
                {data?.length > 0 ? (
                  data.map(projectRow)
                ) : (
                  // table if not found
                  <TableRow>
                    <TableCell
                      colSpan={projectColumn.length + 1}
                      className="text-center text-gray-400"
                    >
                      Project Not Found
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

export default TableProject;
