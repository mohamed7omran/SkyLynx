import Tabs from "@/components/settings/Tabs";

export default function SettingsLayout({ children }) {
  return (
    <section>
      <h1 className="text-2xl p-5 font-medium">Settings</h1>
      <Tabs />
      {children}
    </section>
  );
}
