import Sidebar from "@/components/settings/Sidebar";

export default function SubAppLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className=" sm:ml-64">
      <Sidebar />
      {children}
    </section>
  );
}
