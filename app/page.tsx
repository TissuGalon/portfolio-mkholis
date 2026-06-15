import HomeClient from "./home-client";
import { getPortfolioProjects } from "@/lib/portfolio";

export default function Home() {
  const projects = getPortfolioProjects();

  return <HomeClient projects={projects} />;
}
