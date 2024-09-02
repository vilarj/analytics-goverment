import GovTable from "@/Components/GovTable";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="main-header">US Government Site Visits</h1>
      <GovTable />
    </div>
  );
}
