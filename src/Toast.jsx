import { useEffect, useRef } from "react";

export function Toast({ message }) {
  const toastRef = useRef();
  // dismiss the toast after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      toastRef.current.classList.add("hidden");
    }, 3000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div
      ref={toastRef}
      className="fixed bottom-0 right-0 z-50 p-4 m-4 text-white bg-gray-800 rounded-md"
    >
      {message}
    </div>
  );
}
