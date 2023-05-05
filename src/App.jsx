/* eslint-disable react/prop-types */
import "./App.css";
import { useEffect, useState } from "react";
import { TeamPicker } from "./TeamPicker";
import avatarIcon from "./assets/avatarIcon.svg";

const managerData = {
  data: [
    {
      rank: 1,
      team: "DON'T LET THIS SLIP!",
      manager: "James",
      gw: 34,
      tot: 1659,
    },
    {
      rank: 2,
      team: "ChickenTikka MoSalah",
      manager: "Sean",
      gw: 44,
      tot: 1467,
    },
    {
      rank: 3,
      team: "Bats in the loft",
      manager: "Laurie",
      gw: 37,
      tot: 1467,
    },
    {
      rank: 4,
      team: "Bruce'll Fix It",
      manager: "Nicholas",
      gw: 33,
      tot: 1377,
    },
    {
      rank: 5,
      team: "Jealous of Jesus",
      manager: "Ben",
      gw: 39,
      tot: 1283,
    },
  ],
};

const topScoringPlayers = {
  players: [
    {
      id: 12,
      webName: "Lukaku",
      gwPoints: 15,
      manager: "Sean",
    },
    {
      id: 19,
      webName: "Foden",
      gwPoints: 12,
      manager: "Nicholas",
    },
    {
      id: 10,
      webName: "Sterling",
      gwPoints: 11,
      manager: "Ben",
    },
    {
      id: 1,
      webName: "Trippier",
      gwPoints: 10,
      manager: "Ben",
    },
    {
      id: 6,
      webName: "Ronaldo",
      gwPoints: 9,
      manager: "James",
    },
    {
      id: 2,
      webName: "De Bruyne",
      gwPoints: 8,
      manager: "James",
    },
    {
      id: 14,
      webName: "Vardy",
      gwPoints: 8,
      manager: "Nicholas",
    },
    {
      id: 8,
      webName: "Mount",
      gwPoints: 7,
      manager: "Laurie",
    },
    {
      id: 5,
      webName: "Fernandes",
      gwPoints: 6,
      manager: "Nicholas",
    },
    {
      id: 16,
      webName: "Calvert-Lewin",
      gwPoints: 6,
      manager: "James",
    },
    {
      id: 3,
      webName: "Salah",
      gwPoints: 5,
      manager: "Sean",
    },
    {
      id: 15,
      webName: "Bamford",
      gwPoints: 5,
      manager: "Ben",
    },
    {
      id: 7,
      webName: "Son",
      gwPoints: 4,
      manager: "Sean",
    },
    {
      id: 18,
      webName: "Zaha",
      gwPoints: 4,
      manager: "Laurie",
    },
    {
      id: 4,
      webName: "Kane",
      gwPoints: 3,
      manager: "Laurie",
    },
    {
      id: 13,
      webName: "Aubameyang",
      gwPoints: 3,
      manager: "Laurie",
    },
    {
      id: 17,
      webName: "Mané",
      gwPoints: 3,
      manager: "Sean",
    },
    {
      id: 11,
      webName: "Trent",
      gwPoints: 2,
      manager: "James",
    },
    {
      id: 9,
      webName: "Grealish",
      gwPoints: 1,
      manager: "Nicholas",
    },
    {
      id: 20,
      webName: "Maddison",
      gwPoints: 1,
      manager: "Ben",
    },
  ],
};

function TopScoringPlayers() {
  return (
    <div className="grid items-center w-full h-full">
      {topScoringPlayers.players.map((player) => (
        <div
          className="grid justify-center grid-cols-[1fr_1fr_30px] gap-2 px-1 py-2 bg-gray-600"
          key={player.id}
        >
          <div>{player.manager}</div>
          <div>{player.webName}</div>
          <div>{player.gwPoints}</div>
        </div>
      ))}
    </div>
  );
}

function ManagerTable() {
  return (
    <table className=" border border-gray-500 table-auto w-full md:w-[600px] h-2/4 text-gray-600 text-sm mr-8">
      <thead className="text-gray-100 bg-violet-600 sm:text-left">
        <tr>
          <th className="px-2 py-3 sm:py-2 sm:px-4">Rank</th>
          <th className="px-2 py-3 sm:py-2 sm:px-4">Team</th>
          <th className="px-2 py-3 sm:py-2 sm:px-4">GW</th>
          <th className="px-2 py-3 sm:py-2 sm:px-4">Total</th>
        </tr>
      </thead>
      <tbody>
        {managerData.data.map((manager) => (
          <tr className=" odd:bg-white even:bg-gray-100" key={manager.rank}>
            <td className="px-2 py-3 sm:py-2 sm:px-4">{manager.rank}</td>
            <td className="px-2 py-3 sm:py-2 sm:px-4">
              <div>{manager.team}</div>
              <div className="text-xs text-gray-500">{manager.manager}</div>
            </td>
            <td className="px-2 py-3 sm:py-2 sm:px-4">{manager.gw}</td>
            <td className="px-2 py-3 sm:py-2 sm:px-4 ">{manager.tot}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Sidebar({ setPage, currentPage, open, setIsOpen }) {
  return (
    <>
      {open && (
        <aside className="w-[256px] bg-gray-900 md:shadow md:block shrink-0">
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
                      setIsOpen(false);
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
                      setIsOpen(false);
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
                      setIsOpen(false);
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
              <li>
                <a
                  href="#"
                  className={`flex flex-row items-center h-10 px-3 ${
                    currentPage === "transfers"
                      ? "text-gray-700 bg-gray-100"
                      : "text-gray-300 hover:bg-gray-700 hover:text-gray-100"
                  }`}
                  onClick={() =>
                    setPage(() => {
                      setIsOpen(false);
                      return "transfers";
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
                        stroke="currentColor"
                        strokeWidth="1.2"
                        d="M19.5 16.5H6m-.5-8H19M16 13l3.5 3.5L16 20m-7-8L5.5 8.5 9 5"
                      />
                    </svg>
                  </span>
                  <span className="ml-3">Transfers</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </>
  );
}

function TransfersPage() {
  return (
    <div className="container px-6 mx-auto text-gray-100 md:px-10 lg:px-12">
      <h3 className="mb-3 text-2xl word-space-tight">Transfers</h3>
    </div>
  );
}

function DashbordPage() {
  return (
    <div className="container px-6 mx-auto text-gray-100 md:px-10 lg:px-12">
      <h3 className="mb-3 text-2xl word-space-tight">Dashboard</h3>
      <p>Relevant stats to react to</p>
      <ul>
        <li>Current GW stats althou maybe current GW could be it's own page</li>
        <li>Alerts! 3 hours until deadline set your team etc</li>
        <li>Current GW status, live/1hours etc</li>
        <li>Current GW fixtures</li>
        <li>Trends</li>
      </ul>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("table");
  const [sidebarOpen, setsidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setsidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPage = () => {
    switch (page) {
      case "dashboard":
        return <DashbordPage />;
      case "pick-team":
        return <PickTeamPage />;
      case "table":
        return <TablePage />;
      case "transfers":
        return <TransfersPage />;
      default:
        return <DashbordPage />;
    }
  };

  return (
    <div className="flex flex-row min-h-screen text-gray-100 bg-gray-700">
      {!sidebarOpen && (
        <button
          className="mt-2 ml-2 cursor-pointer h-fit w-fit"
          onClick={() => setsidebarOpen(true)}
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
        </button>
      )}
      <Sidebar
        setPage={setPage}
        currentPage={page}
        open={sidebarOpen}
        setIsOpen={setsidebarOpen}
      />

      <main className="flex flex-col w-full text-gray-100">
        <header className="w-full px-4 py-4">
          <div className="flex flex-row items-center header-content">
            <div className="flex ml-auto">
              <a href="" className="flex flex-row items-center">
                <img
                  src={avatarIcon}
                  alt="avatar"
                  className="w-10 h-10 bg-gray-200 border rounded-full"
                />
                <span className="flex flex-col ml-2">
                  <span className="w-20 font-semibold leading-none tracking-wide truncate">
                    Laurie Poulter
                  </span>
                </span>
              </a>
            </div>
          </div>
        </header>
        {getPage()}
      </main>
    </div>
  );
}

function TablePage() {
  return (
    <div className="container pr-4 text-gray-100 pl-2mx-auto md:px-10 lg:px-12">
      <div className="">
        <h2 className="mb-8 text-4xl">Drafty Boys</h2>
      </div>
      <div className="flex flex-col justify-between h-full md:flex-row">
        <div>
          <h3 className="mb-3 text-2xl word-space-tight">
            GW{" "}
            <span className="word-space-tight">
              32 <span className="text-sm text-emerald-400 ">live</span>
            </span>
          </h3>
          <ManagerTable />
        </div>
        <div className="">
          <h3 className="px-4 py-2 mb-3 text-sm bg-violet-600">
            Top GW Scorers
          </h3>
          <TopScoringPlayers />
        </div>
      </div>
    </div>
  );
}

function PickTeamPage() {
  return (
    <div className="container px-6 mx-auto text-gray-100 md:px-10 lg:px-12">
      <div className="flex flex-col justify-between h-full md:flex-row">
        <div>
          <h3 className="mb-3 text-2xl word-space-tight">
            GW <span className="word-space-tight">32</span>
          </h3>
          <TeamPicker />
        </div>
      </div>
    </div>
  );
}

export default App;
