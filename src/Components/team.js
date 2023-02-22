import ProfileCard from "./TeamProfileCard";
import Pic from "../Images/mbappe.jpeg";
import Nurudeen from "../Images/Nurudeen Olokode.JPG"
import Muhideen from "../Images/Muihdeen Ashiru.JPG"
import Funke from "../Images/Adefunke Adekomaiya.JPG"
import Hammed from "../Images/Hammed Adigun.JPG"

const Team = () => {
  return (
    <div className="px-4 md:px-16">
      <p className="text-center mb-4">Meet The Team</p>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5">
        <ProfileCard
          profile={Pic}
          firstName="Olabode"
          lastName="Orolu"
          role="CEO"
        />
        <ProfileCard
          profile={Muhideen}
          firstName="Muhideen"
          lastName="Ashiru"
          role="Operations Manager"
        />
        <ProfileCard
          profile={Hammed}
          firstName="Hammed"
          lastName="Adigun"
          role="System and Integration Officer"
        />
        <ProfileCard
          profile={Funke}
          firstName="Adekomaiya"
          lastName="Adefunke"
          role="Finance/Admin Manager"
        />
        <ProfileCard
          profile={Nurudeen}
          firstName="Nurudeen"
          lastName="Olokode"
          role="Finance Manager"
        />
      </div>
    </div>
  );
};

export default Team;
