// src/pages/SlowTest.jsx
import React, { useEffect, useState } from "react";
import Loading from "./Loading"; // make sure path is correct

export default function SlowTest() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 5000); // 3s delay
    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    // Show spinner while this page is "preparing"
    return <Loading />;
  }

  return (
    <div className="p-10 text-white text-2xl">
      🎉 SlowTest component has rendered!
    </div>
  );
}

