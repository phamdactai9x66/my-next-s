import React from "react";

const Client = (props) => {
  const renderMenu = () => {
    return (
      <div className="invisible group-hover/client-btn:visible absolute top-[100%] left-0 w-full bg-red-500 rounded-lg">
        <div>Recall</div>
        <div>Cancel</div>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4">
      <div className="flex justify-between p-2 bg-slate-200 rounded-lg group/client-group">
        <h1>Client</h1>
        <div className="visible group-hover/client-group:visible bg-slate-400 px-4 rounded-lg group/client-btn relative">
          <span className="group-hover/client-btn:text-white">Call ICON</span>
          {renderMenu()}
        </div>
      </div>

      <div className="flex justify-between p-2 bg-slate-200 rounded-lg group/client-group">
        <h1>Client 2</h1>
        <div className="invisible group-hover/client-group:visible bg-slate-400 px-4 rounded-lg group/client-btn">
          <span className="group-hover/client-btn:text-white">Call ICON</span>
        </div>
      </div>

      <div className="flex justify-between p-2 bg-slate-200 rounded-lg group/client-group">
        <h1>Client 3</h1>
        <div className="invisible group-hover/client-group:visible bg-slate-400 px-4 rounded-lg group/client-btn">
          <span className="group-hover/client-btn:text-white">Call ICON</span>
        </div>
      </div>

      <div className="flex justify-between p-2 bg-slate-200 rounded-lg group/client-group">
        <h1>Client 4</h1>
        <div className="invisible group-hover/client-group:visible bg-slate-400 px-4 rounded-lg group/client-btn">
          <span className="group-hover/client-btn:text-white">Call ICON</span>
        </div>
      </div>
    </div>
  );
};

export default Client;
