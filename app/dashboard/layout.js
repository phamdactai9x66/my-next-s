// "use client";

import Table from "@/components/Table";
import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import Loading from "./loading";
import { notFound } from "next/navigation";
import { formatData } from "../_lib/utils";

const DashboardLayout = ({ children, team, listuser }) => {
  // notFound();
  formatData();
  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>
        {children}
        {/* {team}
        {listuser} */}
      </Suspense>
      <Table />
    </React.Fragment>
  );
};

export default DashboardLayout;
