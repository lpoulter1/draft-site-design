import "./App.css";
import avatarIcon from "./assets/avatarIcon.svg";

function App() {
  return (
    <div className="flex flex-row min-h-screen text-gray-100 bg-gray-700">
      <aside className="w-64 transition-transform duration-150 ease-in transform -translate-x-full bg-gray-900 sidebar md:shadow md:translate-x-0">
        <div className="flex items-center justify-center py-4 sidebar-header">
          <div className="inline-flex">
            <a href="#" className="inline-flex flex-row items-center">
              <svg
                className="w-10 h-10 text-red-400"
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
          <ul className="flex flex-col w-full gap-2">
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
      <main className="flex flex-col flex-grow -ml-64 text-gray-100 transition-all duration-150 ease-in main md:ml-0">
        <header className="px-4 py-4 shadow header">
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
        <div className="flex flex-col flex-grow p-4 main-content">
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <div className="flex flex-col flex-grow mt-4 bg-white border-4 border-gray-400 border-dashed rounded"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
