import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
// import AvatarDropdown from "./AvatarDropdown";

function ProfileAvatar() {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();
  if (session) {
    var userFirstname = session.user.name.split(" ");
    return (
      <div>
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
          {showMenu && (
            <div className="rounded-box absolute top-10 z-10 flex h-fit w-20">
              <div className=" mt-5 flex-auto rounded-md bg-blue-300 text-left">
                <ul className="mx-2 w-[100%]">
                  <li>Corona</li>
                  <li className="">Extra Crazy</li>
                  <li className="" onClick={signOut()}>
                    Sign Out
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileAvatar;
