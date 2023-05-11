import { motion } from "framer-motion";
import MUN from "./kits/mun.png";
import Kit2 from "./kits/2.png";
import ARS from "./kits/ars.png";
import NEW from "./kits/new.png";
import TOT from "./kits/tot.png";

import CHE from "./kits/che.png";
import Kit11 from "./kits/11.png";
import Kit12 from "./kits/12.png";
import LEI from "./kits/lei.png";
import Kit14 from "./kits/14.png";
import NFO from "./kits/nfo.png";
import Kit20 from "./kits/20.png";
import WHU from "./kits/whu.png";
import Kit25 from "./kits/25.png";
import BHA from "./kits/bha.png";
import CRY from "./kits/cry.png";

const kits = {
  BHA,
  ARS,
  CHE,
  WHU,
  LEI,
  MUN,
  NEW,
  TOT,
  CRY,
  NFO,
};

function Formation({ legal = true }) {
  return (
    <h4
      className={`transition-all  font-semibold mr-auto duration-500 ${
        legal ? "text-gray-100 text-sm" : "text-red-400 text-2xl"
      }`}
    >
      4-4-2
    </h4>
  );
}

export function TeamPicker() {
  return (
    <div className="flex-col items-center justify-center sm:flex">
      <div className="grid green-gradient relative grid-cols-[1fr] max-w-[900px] max-h-screen min-h-[75vh] md:justify-center md:px-14 md:py-6 grid-rows-auto ">
        <div className="absolute right-2 top-2">
          <Formation />
        </div>

        {/* {playerData.map((player) => (
        <Player key={player.id} {...player} />
      ))} */}
        <div className="flex items-center justify-around w-full px-1 border border-gray-200 min-h-40">
          <Player {...playerData[5]} />
        </div>
        <div className="flex items-center justify-around w-full px-1 border border-t-0 border-gray-200 overflow-clip min-h-40">
          <Player {...playerData[3]} />
          <Player {...playerData[6]} />
          <Player {...playerData[10]} />
          <Player {...playerData[11]} />
        </div>
        <div className="flex items-center justify-around w-full px-1 border border-t-0 border-gray-200 min-h-40">
          <Player {...playerData[0]} />
          <Player {...playerData[1]} />
          <Player {...playerData[4]} />
          <Player {...playerData[0]} />
        </div>
        <div className="flex items-center justify-around w-full px-1 border border-t-0 border-gray-200 min-h-40">
          <Player {...playerData[2]} />
          <Player {...playerData[8]} />
        </div>
        <div className="flex items-center justify-around w-full px-1 border border-t-0 border-gray-200 min-h-40">
          <Player {...playerData[8]} order={1} />
          <Player {...playerData[9]} order={2} />
          <Player {...playerData[10]} order={3} />
          <Player {...playerData[11]} order={4} />
          <Player {...playerData[12]} order={5} />
        </div>
      </div>
      <button className="flex items-center justify-center w-full h-10 px-1 py-3 mt-4 border border-gray-200 sm:w-80 bg-violet-600 hover:bg-violet-500">
        Save Team
      </button>
    </div>
  );
}

function Player({
  id,
  position,
  firstName,
  secondName,
  teamShortName,
  webName,
  order,
}) {
  const kit = kits[teamShortName];
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="flex flex-col items-center gap-1 px-[1px] py-1 rounded cursor-pointer sm:px-4 sm:py-6 sm:w-32 no-wrap whitespace-nowrap hover:bg-emerald-800 "
    >
      <img src={kit} alt="" className="w-12 h-auto sm:w-16" />
      <div className="text-xs">{webName}</div>
      <div className="hidden text-xs uppercase md:block">{position}</div>
      <div className="text-xs">{order}</div>
    </motion.div>
  );
}

const playerData = [
  {
    primaryId: 11,
    firstName: "Bukayo",
    secondName: "Saka",
    webName: "Saka",
    position: "mid",
    teamName: "Arsenal",
    teamShortName: "ARS",
    id: 11,
  },
  {
    primaryId: 16,
    firstName: "Gabriel",
    secondName: "Martinelli Silva",
    webName: "Martinelli",
    position: "mid",
    teamName: "Arsenal",
    teamShortName: "ARS",
    id: 16,
  },
  {
    primaryId: 159,
    firstName: "Danny",
    secondName: "Welbeck",
    webName: "Welbeck",
    position: "fwd",
    teamName: "Brighton",
    teamShortName: "BHA",
    id: 159,
  },
  {
    primaryId: 161,
    firstName: "Lewis",
    secondName: "Dunk",
    webName: "Dunk",
    position: "def",
    teamName: "Brighton",
    teamShortName: "BHA",
    id: 161,
  },
  {
    primaryId: 162,
    firstName: "Solly",
    secondName: "March",
    webName: "March",
    position: "mid",
    teamName: "Brighton",
    teamShortName: "BHA",
    id: 162,
  },
  {
    primaryId: 201,
    firstName: "Kepa",
    secondName: "Arrizabalaga",
    webName: "Arrizabalaga",
    position: "gk",
    teamName: "Chelsea",
    teamShortName: "CHE",
    id: 201,
  },
  {
    primaryId: 207,
    firstName: "Ben",
    secondName: "Chilwell",
    webName: "Chilwell",
    position: "def",
    teamName: "Chelsea",
    teamShortName: "CHE",
    id: 207,
  },
  {
    primaryId: 214,
    firstName: "Reece",
    secondName: "James",
    webName: "James",
    position: "def",
    teamName: "Chelsea",
    teamShortName: "CHE",
    id: 214,
  },
  {
    primaryId: 250,
    firstName: "Odsonne",
    secondName: "Edouard",
    webName: "Edouard",
    position: "fwd",
    teamName: "Crystal Palace",
    teamShortName: "CRY",
    id: 250,
  },
  {
    primaryId: 367,
    firstName: "James",
    secondName: "Maddison",
    webName: "Maddison",
    position: "mid",
    teamName: "Leicester",
    teamShortName: "LEI",
    id: 367,
  },
  {
    primaryId: 500,
    firstName: "Raphaël",
    secondName: "Varane",
    webName: "Varane",
    position: "def",
    teamName: "Man Utd",
    teamShortName: "MUN",
    id: 500,
  },
  {
    primaryId: 542,
    firstName: "Kieran",
    secondName: "Trippier",
    webName: "Trippier",
    position: "def",
    teamName: "Newcastle",
    teamShortName: "NEW",
    id: 542,
  },
  {
    primaryId: 588,
    firstName: "Brennan",
    secondName: "Johnson",
    webName: "Johnson",
    position: "fwd",
    teamName: "Nott'm Forest",
    teamShortName: "NFO",
    id: 588,
  },
  {
    primaryId: 660,
    firstName: "Son",
    secondName: "Heung-min",
    webName: "Son",
    position: "mid",
    teamName: "Spurs",
    teamShortName: "TOT",
    id: 660,
  },
  {
    primaryId: 695,
    firstName: "Lukasz",
    secondName: "Fabianski",
    webName: "Fabianski",
    position: "gk",
    teamName: "West Ham",
    teamShortName: "WHU",
    id: 695,
  },
];
