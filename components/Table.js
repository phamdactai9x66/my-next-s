"use client";
import React from "react";
import useSWR from "swr";
import TableAction from "./TableAction";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const LIKE = "https://my-json-server.typicode.com/typicode/demo/posts";

const Table = () => {
  const { data, error, isLoading } = useSWR(LIKE, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (isLoading) return null;

  return (
    <React.Fragment>
      <h2>HTML Table</h2>

      <table>
        <tr>
          <th>Title</th>
          <th></th>
        </tr>

        {(data || []).map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.title}</td>
              <TableAction props={e} />
            </tr>
          );
        })}
      </table>
    </React.Fragment>
  );
};

export default Table;
