import MainSidePanel from "./Home/Components/MainSidePanel";
import Projects from "./Home/Components/Projects";
import { useState, useEffect } from "react";

function Main() {
  const [height, setHeight] = useState(window.innerHeight - 60);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight - 60);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        className={`max-[460px]:hidden p-5 grid grid-cols-4 gap-x-10 w-full `}
        style={{ height: `${height}px` }}
      >
        <section className="">
          <MainSidePanel></MainSidePanel>
        </section>
        <section className="col-span-3 h-auto overflow-y-auto">
          <Projects></Projects>
        </section>
      </div>
      <div
        className="min-[461px]:hidden font-DM p-5 relative w-screen"
        style={{ height: `${height}px` }}
      >
        <p className="pb-4 text-base">oops!</p>
        <p className="text-base">
          portfolio only available on desktop at this time
        </p>

        <p className="absolute bottom-5 right-0 leading-tight text-xs text-grey opacity-30 z-0 pointer-events-none select-none ">
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⢀⣠⠤⣶⣶⣤⣀⡀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⠟⢦⣤⡄⠒⠋⠁⠀⠀⢻⡝⢧⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⢿⡏⠀⢀⡀⠀⠀⠀⠀⠀⢷⢸⡇<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠘⠃⠀⠀⠀⠀⠀⣸⣸⠃<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠃⠁⠉⢳⣴⢻⣽⣟⢦⠘⠃⠀⠀⠀⠀⠀⠀⠀⢀⡿⠃⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀⠋⠐⠉⠙⣿⢿⡇⠀⠀⣀⡀⠀⠀⢀⡴⣿⠃⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢾⣄⠀⠀⠀⠀⠀⣰⠟⣽⠁⠀⣀⠓⠃⠀⢠⡞⣱⠃⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣾⣿⣧⣦⣤⣤⡔⢋⠈⠁⠀⠀⠀⠀⠀⠀⠏⡼⠃⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⠀⠀⠀⢸⣻⣿⣿⣯⠟⠋⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⣞⣳⠀⠀⠀⠀⠀⠙⠛⠉⠀⠀⠀⢠⡀⢠⡄⠀⢀⡾⡯⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⢀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣡⡾⢋⡼⠃⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠄⠉⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣄⣸⢸⢠⡆⠀⠀⠀⠀⠀⠰⠞⠁⠰⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⡽⠛⠘⢿⣥⣤⣤⣤⣀⠀⠤⠠⢤⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⣠⠶⣿⡛⠁⠀⠉⠉⠉⠙⣿⣦⢠⣰⠚⣋⣉⣁⣀⣤⠤⣶⣫⡤⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠈⠓⠚⠿⠯⠭⠭⠭⠤⠼⠏⢹⢾⠿⠿⠟⠓⠒⠚⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⢸⣼⠀⠀⠀⠸⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⢀⡄⢠⡏⠀⠘⣿⠀⠀⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⢀⡞⣤⠏⠀⠀⠀⡿⠀⠀⠀⢴⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⣾⡾⠃⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⣸⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡤⡶⡦⢤⣀⡴⠋⣥⣍⡻⡄⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⢠⢿⠀⠠⣶⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⣥⣾⣷⣷⣶⡝⠂⠈⠀⠘⠓⢻⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⢸⠘⣆⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⢸⣸⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⣔⢸⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠘⣆⠹⣆⠀⢠⡆⠀⢀⡀⠈⠁⠀⢸⠐⣿⣿⡀⠀⠀⠀⠀⢀⢠⣶⣟⠟⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠘⠫⢘⢧⣼⣷⣂⡈⠉⠀⢀⣀⡌⢧⠻⣿⣷⡀⠀⠀⠀⠨⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠉⢉⣿⡟⠿⠥⣶⣟⣉⣁⣠⡤⠴⠖⠙⠟⣴⣀⠀⣽⡿⣳⠇⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⡴⠃⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠓⠦⢤⣈⣨⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
          ⠀⠀⠀⠀⠀⠀⠀⠀⢈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br></br>
        </p>
      </div>
    </div>
  );
}

export default Main;
