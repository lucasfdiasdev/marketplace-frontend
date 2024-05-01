import Logo from "@/components/global/logo";
import Container from "@/components/layout/container";
import Search from "@/components/includes/header/search";
import UserMenu from "@/components/includes/header/user-menu";

const Header = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
