import React from "react";

const Card = () => {
  return (
    <section>
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <img
            src={linkImage}
            className="w-12 h-12 rounded-full"
            alt="Hello babe"
          />
          <div>
            <p className="text-sm/6 font-semibold text-gray-900">
              Leslie Alexander
            </p>
            <p className="mt-1 text-sm/4 text-gray-500">
              leslie.alexander@example.com
            </p>
          </div>
        </div>
        <div>
          <div className="">
            <p className="text-right text-sm/6 text-gray-900">
              Co-Founder / CEO
            </p>
            <p className="mt-1 text-right text-sm/5 text-gray-500">
              Last seen 3h ago
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const linkImage =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const Practice = () => {
  return (
    <div className="container  flex flex-col gap-4 py-4 ">
      <Card />

      <hr />

      <Card />

      <hr />

      <Card />
    </div>
  );
};

export default Practice;
