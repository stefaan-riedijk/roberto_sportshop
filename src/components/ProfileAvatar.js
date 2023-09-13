import React from "react";
import { useSession } from "next-auth/react";

function ProfileAvatar() {
  const { data: session } = useSession();
  if (session) {
    var userFirstname = session.user.name.split(" ");
    return (
      <>
        <p className="w-fit">{`Welcome Back, ${userFirstname[0]}!`}</p>
        <img
          src={session.user.image}
          width={50}
          height={50}
          className="rounded-full"
        />
      </>
    );
  }
}

export default ProfileAvatar;
