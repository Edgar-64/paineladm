import { Header } from "../organisms/Header";
import { Sidebar } from "../organisms/Sidebar";

export const DashboardTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="flex-1 p-4 bg-gray-50">{children}</main>
    </div>
  </div>
);
