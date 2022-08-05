import React from "react";
import { signIn, useSession } from "next-auth/react";

function Profile() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  console.log({ session, status });

  if (status === "loading") {
    return <p>loading..</p>;
  }

  return <div>{session?.user?.name} welcome to todolist app</div>;
}

export default Profile;
