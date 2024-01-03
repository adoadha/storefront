import Dashboard from "@/components/layout/Dashboard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Dashboard>{children}</Dashboard>
    </>
  );
}
