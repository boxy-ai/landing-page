import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ApproachPage } from "./pages/ApproachPage";
import { PrivacySecurityPage } from "./pages/PrivacySecurityPage";
import { UnixPhilosophyPage } from "./pages/UnixPhilosophyPage";
import { AboutPage } from "./pages/AboutPage";
import { HiringPage } from "./pages/HiringPage";
import { JoinBetaPage } from "./pages/JoinBetaPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "approach", Component: ApproachPage },
      { path: "privacy-security", Component: PrivacySecurityPage },
      { path: "unix-philosophy", Component: UnixPhilosophyPage },
      { path: "about", Component: AboutPage },
      { path: "hiring", Component: HiringPage },
      { path: "join-beta", Component: JoinBetaPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
