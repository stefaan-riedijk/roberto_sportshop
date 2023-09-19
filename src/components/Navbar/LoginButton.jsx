import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button
          className=" hidden w-fit min-w-fit rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 lg:inline-flex"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="w-fit min-w-fit rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
