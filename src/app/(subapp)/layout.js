import HeaderPhone from "@/components/settings/headerPhone";
import Sidebar from "@/components/settings/Sidebar";

export default function SubAppLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className=" sm:ml-64">
      <HeaderPhone />
      <Sidebar />
      {children}
    </section>
  );
}
