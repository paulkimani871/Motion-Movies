import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from "react-router";

export function PrevNext() {
    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1
  return (
    <div className="fixed bottom-20 left-2/5 bg-[#030014] p-3">

    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className={"text-white"} disabled={currentPage === 1} href={`?page=${currentPage-1}`} />
          {/* <Link to={`?page=${currentPage-1}`} className="text-white font-semibold">Prev</Link> */}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive={currentPage === 1} className={"text-white"} href="?page=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className={"text-white"} href="?page=2" isActive={currentPage === 2}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className={"text-white"} href="?page=3" isActive={currentPage === 3}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`?page=${currentPage+1}`} className={"text-white"} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
  )
}
