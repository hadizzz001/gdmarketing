import Image from "next/image";

const Logo = () => {
  return (
    <div style={{zIndex: 99999999}} className="fixed  bg-[#044877]  w-full h-30 flex items-center  ">
      <img
        src="https://res.cloudinary.com/dgkipuarc/image/upload/v1741181949/it6kszf5yydjw2jqsmki.jpg"
        alt="Logo"
        width={100}
        height={100}
        
        className="m-5 object-cover"
      />
    </div>
  );
};

export default Logo;
