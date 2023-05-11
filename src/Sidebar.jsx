import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

// eslint-disable-next-line react/prop-types
export function Sidebar({ currentPage, setPage }) {
  const { width } = useScreenSize();
  const [transfersAnimate, setTransfersAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState();

  useEffect(() => {
    // tailwind lg breakpoint
    if (width < 1024) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [width]);

  return (
    <>
      {isOpen && (
        <motion.div
          key="sidebar-overlay"
          className="fixed z-10 left-[256px] top-0 bottom-0 w-[calc(100vw-256px)] h-full bg-gray-900 lg:hidden"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
        ></motion.div>
      )}
      <LayoutGroup>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.aside
                key="sidebar-aside"
                initial={{ x: -250 }}
                animate={{ x: 0 }}
                exit={{ x: -256, width: 0 }}
                className="bg-gray-900 md:shadow md:block shrink-0 w-[256px]"
                transition={{ type: "spring", bounce: 0 }}
              >
                <div className="flex items-center justify-center py-4">
                  <div className="inline-flex">
                    <a
                      href="#"
                      className="inline-flex flex-row items-center"
                      onClick={() => setPage()}
                    >
                      <svg
                        className="w-10 h-10 text-violet-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-1 text-2xl font-bold leading-10 text-gray-100 uppercase">
                        Draft Site
                      </span>
                    </a>
                  </div>
                </div>
                <div className="px-4 py-6 sidebar-content">
                  <ul className="flex flex-col w-full gap-6 uppercase">
                    <li>
                      <a
                        href="#"
                        className={`flex flex-row items-center h-10 px-3 ${
                          currentPage === "dashboard"
                            ? "text-gray-700 bg-gray-100"
                            : "text-gray-300 hover:bg-gray-700 hover:text-gray-100"
                        }`}
                        onClick={() =>
                          setPage(() => {
                            return "dashboard";
                          })
                        }
                      >
                        <span className="flex items-center justify-center text-lg text-gray-400">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </span>
                        <span className="ml-3">Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`flex flex-row items-center h-10 px-3 ${
                          currentPage === "pick-team"
                            ? "text-gray-700 bg-gray-100"
                            : "text-gray-300 hover:bg-gray-700 hover:text-gray-100"
                        }`}
                        onClick={() =>
                          setPage(() => {
                            return "pick-team";
                          })
                        }
                      >
                        <span className="flex items-center justify-center text-lg text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem"
                            height="1.5rem"
                            strokeWidth="2"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M5 2a1 1 0 0 0-.447.106L1.106 3.829A2 2 0 0 0 0 5.618v3.764a2 2 0 0 0 2.894 1.789L4 10.618V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8.382l1.106.553A2 2 0 0 0 24 9.382V5.618a2 2 0 0 0-1.106-1.789l-3.447-1.723A1 1 0 0 0 19 2h-3a2 2 0 0 0-2 2 2 2 0 1 1-4 0 2 2 0 0 0-2-2H5ZM4 4.618v3.764l-2 1V5.618l2-1ZM8 4H6v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4h-2a4 4 0 0 1-8 0Zm14 1.618-2-1v3.764l2 1V5.618ZM10 12.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm.5-2.5A2.5 2.5 0 0 0 8 12.5v2a2.5 2.5 0 0 0 5 0v-2a2.5 2.5 0 0 0-2.5-2.5Zm3.5 0a1 1 0 1 0 0 2v4a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1h-1Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="ml-3">Pick Team</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`flex flex-row items-center h-10 px-3 ${
                          currentPage === "table"
                            ? "text-gray-700 bg-gray-100"
                            : "text-gray-300 hover:bg-gray-700 hover:text-gray-100"
                        }`}
                        onClick={() =>
                          setPage(() => {
                            return "table";
                          })
                        }
                      >
                        <span className="flex items-center justify-center text-lg text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem"
                            height="1.5rem"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="rounash"
                              d="M15 9h6v9c0 .943 0 1.414-.293 1.707C20.414 20 19.943 20 19 20h-4V9ZM3 9h6v11H5c-.943 0-1.414 0-1.707-.293C3 19.414 3 18.943 3 18V9ZM9 9h6v11H9zM3 6c0-.943 0-1.414.293-1.707C3.586 4 4.057 4 5 4h14c.943 0 1.414 0 1.707.293C21 4.586 21 5.057 21 6v3H3V6Z"
                            />
                          </svg>
                        </span>
                        <span className="ml-3">Table</span>
                      </a>
                    </li>
                    <motion.li whileHover="hover">
                      <a
                        href="#"
                        className={`flex flex-row items-center h-10 px-3 ${
                          currentPage === "transfers"
                            ? "text-gray-700 bg-gray-100"
                            : "text-gray-300 hover:bg-gray-700 hover:text-gray-100"
                        }`}
                        onClick={() => {
                          setTransfersAnimate((p) => !p);
                          setPage(() => {
                            return "transfers";
                          });
                        }}
                      >
                        <motion.span
                          className="flex items-center justify-center text-lg text-gray-400"
                          animate={
                            transfersAnimate ? { rotate: 180 } : { rotate: 0 }
                          }
                          transition={{ type: "spring", duration: 0.7 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem"
                            height="1.5rem"
                            strokeWidth="2"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="1.2"
                              d="M19.5 16.5H6m-.5-8H19M16 13l3.5 3.5L16 20m-7-8L5.5 8.5 9 5"
                            />
                          </svg>
                        </motion.span>
                        <span className="ml-3">Transfers</span>
                      </a>
                    </motion.li>
                  </ul>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
        {!isOpen && (
          <motion.button
            key="sidebar-button"
            className="fixed mt-2 ml-2 cursor-pointer h-fit w-fit"
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-100 "
            >
              <line
                x1="4.8"
                y1="9.6"
                x2="27.2"
                y2="9.6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              ></line>
              <line
                x1="27.2"
                y1="22.4"
                x2="4.8"
                y2="22.4"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              ></line>
            </svg>
          </motion.button>
        )}
      </LayoutGroup>
    </>
  );
}

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}
