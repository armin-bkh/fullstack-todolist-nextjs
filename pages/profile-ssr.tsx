import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/profile-ssr",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

function ProfileSsr() {
  const { data: session, status } = useSession();

  return <div>{session?.user?.name} welcome to todo list app ssr</div>;
}

export default ProfileSsr;
