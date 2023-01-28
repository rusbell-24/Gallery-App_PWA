import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center pt-5">
      <div class="spinner-border text-info " role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
