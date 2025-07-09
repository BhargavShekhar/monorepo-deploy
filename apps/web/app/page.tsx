import prismaClinet from "@repo/db";

export default async function Home() {
  const users = await prismaClinet.user.findMany();
  return (
    <div className="bg-black h-screen w-full text-white flex flex-col justify-center items-center">
      <div className="bg-white/90 text-cyan-950 rounded-2xl p-4">
        {users.map((user, index) => (
          <div key={index} className="flex flex-col m-2">
            <h1>Username: {user.username}</h1>
            <h1>Password: {user.password}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

// export const dynamic = "force-dynamic";

export const revalidate = 60; // incremental site generation