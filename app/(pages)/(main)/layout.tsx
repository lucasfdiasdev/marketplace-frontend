import Header from "@/components/includes/header";

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayoutMain;
