import { Header } from "../organisms/Header";

export const HomeTemplate = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen">
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="flex-1 p-4 bg-gray-50">{children}</main>
    </div>
  </div>
);
