import { Telegram, Twitter } from "@mui/icons-material";
import SectionIntro from "../../../Components/SectionIntro";
import team1 from "/src/assets/Images/About/team1.jpg";
import team2 from "/src/assets/Images/About/team2.jpg";
import team3 from "/src/assets/Images/About/team3.jpg";
import team4 from "/src/assets/Images/About/team4.jpg";

const Team = () => {
  return (
    <div className="w-full h-full section">
      <SectionIntro
        title="meet the estantien team"
        description="At estantien, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        hideButton={true}
      />

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 justify-between gap-10 items-center">
        <div className="w-full border-2 border-white/5 rounded-xl p-7">
          <div className="w-full h-full relative">
            <img
              src={team1}
              alt="founder image"
              className="w-full h-full rounded-xl object-cover"
            />
            <div className=" w-fit py-2 px-6 rounded-full absolute -bottom-5 m-auto left-0 right-0 bg-purple-600">
              <Twitter sx={{ fontSize: "2rem" }} />
            </div>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold">michael turner</h2>
            <p className="text-xl text-white/70">founder</p>
            <div className="w-full relative mt-5">
              <input
                type="text"
                placeholder="say hello"
                className="w-full text-xl md:h-[4.5rem] h-[5rem] focus:border-purple-600 rounded-full placeholder:text-white font-medium pl-5 border-2 border-white/5 bg-white/10"
              />
              <div className="w-fit p-3 rounded-full absolute md:top-2 top-3 right-3 md:right-2 bg-purple-600">
                <Telegram sx={{ fontSize: "2rem" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-2 border-white/5 rounded-xl p-7">
          <div className="w-full h-full relative">
            <img
              src={team2}
              alt="Chief Real Estate Officer image"
              className="w-full h-full rounded-xl object-cover"
            />
            <div className=" w-fit py-2 px-6 rounded-full absolute -bottom-5 m-auto left-0 right-0 bg-purple-600">
              <Twitter sx={{ fontSize: "2rem" }} />
            </div>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold">Sarah Johnson</h2>
            <p className="text-xl text-white/70">Chief Real Estate Officer</p>
            <div className="w-full relative mt-5">
              <input
                type="text"
                placeholder="say hello"
                className="w-full text-xl md:h-[4.5rem] h-[5rem] focus:border-purple-600 rounded-full placeholder:text-white font-medium pl-5 border-2 border-white/5 bg-white/10"
              />
              <div className="w-fit p-3 rounded-full absolute md:top-2 top-3 right-3 md:right-2 bg-purple-600">
                <Telegram sx={{ fontSize: "2rem" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-2 border-white/5 rounded-xl p-7">
          <div className="w-full h-full relative">
            <img
              src={team3}
              alt="Head of Property Management image"
              className="w-full h-full rounded-xl object-cover"
            />
            <div className=" w-fit py-2 px-6 rounded-full absolute -bottom-5 m-auto left-0 right-0 bg-purple-600">
              <Twitter sx={{ fontSize: "2rem" }} />
            </div>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold">david brown</h2>
            <p className="text-xl text-white/70">Head of Property Management</p>
            <div className="w-full relative mt-5">
              <input
                type="text"
                placeholder="say hello"
                className="w-full text-xl md:h-[4.5rem] h-[5rem] focus:border-purple-600 rounded-full placeholder:text-white font-medium pl-5 border-2 border-white/5 bg-white/10"
              />
              <div className="w-fit p-3 rounded-full absolute md:top-2 top-3 right-3 md:right-2 bg-purple-600">
                <Telegram sx={{ fontSize: "2rem" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-2 border-white/5 rounded-xl p-7">
          <div className="w-full h-full relative">
            <img
              src={team4}
              alt="Legal Counsel image"
              className="w-full h-full rounded-xl object-cover"
            />
            <div className=" w-fit py-2 px-6 rounded-full absolute -bottom-5 m-auto left-0 right-0 bg-purple-600">
              <Twitter sx={{ fontSize: "2rem" }} />
            </div>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold">max mitchell</h2>
            <p className="text-xl text-white/70">Legal Counsel</p>
            <div className="w-full relative mt-5">
              <input
                type="text"
                placeholder="say hello"
                className="w-full text-xl md:h-[4.5rem] h-[5rem] focus:border-purple-600 rounded-full placeholder:text-white font-medium pl-5 border-2 border-white/5 bg-white/10"
              />
              <div className="w-fit p-3 rounded-full absolute md:top-2 top-3 right-3 md:right-2 bg-purple-600">
                <Telegram sx={{ fontSize: "2rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
