/* eslint-disable react/prop-types */
import "./App.css";
import { useState } from "react";
import { TeamPicker } from "./TeamPicker";
import { Sidebar } from "./Sidebar";
import { Toast } from "./Toast";

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

function TransfersPage() {
  return (
    <div className="container px-4 mx-auto text-gray-100 md:px-10 lg:px-12">
      <h3 className="mb-3 text-2xl word-space-tight">Transfers</h3>
    </div>
  );
}

function DashbordPage() {
  return (
    <div className="container px-4 mx-auto text-gray-100 md:px-10 lg:px-12">
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
  const [page, setPage] = useState("pick-team");

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
      <Toast message="team saved" />
      <Sidebar setPage={setPage} currentPage={page} />

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
    <div className="container pl-2 pr-4 mx-auto text-gray-100 md:px-10 lg:px-12">
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
    <div className="container px-4 pb-8 mx-auto text-gray-100 md:px-10 lg:px-12">
      <div className="flex flex-col justify-between h-full md:flex-row">
        <div className="w-full">
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
