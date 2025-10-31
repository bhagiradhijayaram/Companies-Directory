const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full flex flex-col items-center justify-center bg-white border-b border-gray-300 z-50">
        <nav className="flex items-center justify-between w-full max-w-[1350px] p-4">
          <div className="flex items-center gap-1 ">
            <img
              src="https://res.cloudinary.com/dasvdkncm/image/upload/v1761824634/615d613c0cf250694d1fbb83-removebg-preview_hio9gw.png"
              alt="company_logo"
              className="w-15"
            />
            <h2 className="text-lg">FrontlineEduTech</h2>
          </div>
          <h3 className="text-lg">Companies Directory</h3>
        </nav>
      </header>
    </>
  );
};

export default Header;
