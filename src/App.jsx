import "./App.css";
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
      rank: 2,
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
    <table className="text-right border border-gray-500 table-auto w-[600px] h-2/4 text-gray-500">
      <thead className="text-gray-100 bg-violet-600">
        <tr>
          <th className="px-4 py-3 ">Rank</th>
          <th className="px-4 py-3 text-left">Team</th>
          <th className="px-4 py-3 ">Manager</th>
          <th className="px-4 py-3 ">GW</th>
          <th className="px-4 py-3 ">Total</th>
        </tr>
      </thead>
      <tbody>
        {managerData.data.map((manager) => (
          <tr className="odd:bg-white even:bg-gray-100" key={manager.rank}>
            <td className="px-4 py-3 ">{manager.rank}</td>
            <td className="px-4 py-3 text-left">{manager.team}</td>
            <td className="px-4 py-3 ">{manager.manager}</td>
            <td className="px-4 py-3 ">{manager.gw}</td>
            <td className="px-4 py-3 ">{manager.tot}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  return (
    <div className="flex flex-row min-h-screen text-gray-100 bg-gray-700">
      <aside className="w-64 transition-transform duration-150 ease-in transform -translate-x-full bg-gray-900 md:shadow md:translate-x-0">
        <div className="flex items-center justify-center py-4 sidebar-header">
          <div className="inline-flex">
            <a href="#" className="inline-flex flex-row items-center">
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
                className="flex flex-row items-center h-10 px-3 text-gray-700 bg-gray-100 rounded-lg"
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
                className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-gray-100"
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
                <span className="ml-3">Pick Team</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-gray-100"
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
                <span className="ml-3">Table</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-gray-100"
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
                <span className="ml-3">Transfers</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex flex-col flex-grow -ml-64 overflow-y-scroll text-gray-100 transition-all duration-150 ease-in main md:ml-0">
        <header className="px-4 py-4 header">
          <div className="flex flex-row items-center header-content">
            <div className="flex ml-auto">
              <a href className="flex flex-row items-center">
                <img
                  src={avatarIcon}
                  alt
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

        <div className="container px-6 mx-auto text-gray-100 md:px-10 lg:px-12">
          <div className="">
            <h2 className="mb-8 text-4xl">League Name</h2>
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
            <div className="overflow-scroll">
              <h3 className="px-4 py-2 mb-3 text-sm bg-violet-600">
                Top GW Scorers
              </h3>
              <TopScoringPlayers />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
