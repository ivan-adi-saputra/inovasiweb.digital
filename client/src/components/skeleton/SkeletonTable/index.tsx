import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { NextPage } from "next";

interface Props {
  length: number;
}

const SkeletonTable: NextPage<Props> = ({ length }) => {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <TableRow key={item}>
          {Array.from({ length }, (_, index) => (
            <TableCell key={index}>
              <Skeleton className="w-16 h-4" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default SkeletonTable;
