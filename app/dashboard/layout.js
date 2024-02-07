"use client";

import Table from "@/components/Table";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }) => {
  const path = usePathname();
  const router = useRouter();

  const onBackPreStep = () => {
    router.back();
  };

  return (
    <React.Fragment>
      <Link href={"/dashboard/video_game"} title=" Video Game">
        Video Game
      </Link>{" "}
      |
      <Link href={"/dashboard/book"} title="Book">
        Book
      </Link>{" "}
      |
      <Link href={"/dashboard"} title="Dashboard">
        Dashboard
      </Link>
      |<button onClick={onBackPreStep}>Back</button>
      {children}
      <Table />
    </React.Fragment>
  );
};

export default DashboardLayout;
