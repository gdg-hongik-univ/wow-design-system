"use client";
import Card from "@components/Card";
import Pagination from "wowds-ui/Pagination";

const PaginationCard = () => {
  return (
    <Card style={{ padding: "68px" }}>
      <Pagination pageButtonBackgroundColor="white" totalPages={5} />
    </Card>
  );
};

export default PaginationCard;
