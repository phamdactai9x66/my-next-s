import { notFound } from "next/navigation";
import React from "react";

const ReviewDetail = (props) => {
  const idReview = props.params?._id;

  if (idReview > 10) notFound();

  return <div>ReviewDetail: {idReview || "--"}</div>;
};

export default ReviewDetail;
