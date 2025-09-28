function SidePanel({ project, blurb, sections }) {
  return (
    <div className="relative flex flex-col justify-between w-full h-full overflow-hidden">
      <div>
        <h1 className="font-DM pb-5 text-">{project}</h1>
        <p className="font-DM">{blurb}</p>
      </div>

      <nav className="">
        {sections.map((item, i) => {
          return (
            <h2
              onClick={() =>
                document
                  .getElementById(item)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className=" font-DM text-sm hover-link hover:translate-x-2 transition-transform duration-700 ease-in-out"
            >
              {item}
              <br></br>
            </h2>
          );
        })}
      </nav>
      <p className="absolute bottom-0 right-[-16px] leading-tight text-[7px] md:text-[9px] lg:text-xs text-grey opacity-30 z-0 pointer-events-none select-none">
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
  );
}

export default SidePanel;
