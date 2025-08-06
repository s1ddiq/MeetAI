import { Button } from "@/components/ui/button";
import React from "react";
// TODO: Change to PageProps or the page.tsx (agents) to Props
//     * to avoid confusion with the page props.
interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const DataPagination = ({ page, totalPages, onPageChange }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 text-sm text-muted-foreground">
        Page {page} of {totalPages || 1}
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          className=""
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={!page}
          variant="outline"
          size="sm"
        >
          Previous
        </Button>
        <Button
          className=""
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages || totalPages === 0}
          variant="outline"
          size="sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DataPagination;
