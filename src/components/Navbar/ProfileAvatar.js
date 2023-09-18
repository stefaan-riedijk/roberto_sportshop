import React, { useState } from "react";
import { useSession } from "next-auth/react";
// import AvatarDropdown from "./AvatarDropdown";

function ProfileAvatar() {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();
  if (session) {
    var userFirstname = session.user.name.split(" ");
    return (
      <>
        <p className="hidden w-fit md:inline-block">{`Welcome Back, ${userFirstname[0]}!`}</p>
        <div className="relative h-full">
          <button
            className="mx-0 object-fill"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              src={session.user.image}
              width={50}
              height={50}
              className="rounded-full"
            />
          </button>
          <div className="rounded-box absolute top-10  z-10 mr-auto">
            {showMenu && (
              <>
                <div className=" mt-5 rounded-md bg-blue-300 text-center align-top ">
                  <ul className="mx-4">
                    <li>Corona</li>
                    <li>Borreloi</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default ProfileAvatar;
