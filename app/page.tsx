"use client";

import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data } = useSession();
  return (
    <main>
      <button
        type="button"
        onClick={() => {
          signIn("google");
        }}
      >
        LOGIN
      </button>
      {data?.user?.name}
    </main>
  );
};

export default Home;
