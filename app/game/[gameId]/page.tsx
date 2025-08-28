import GamePlayer from "@/app/components/game";
import { Button } from "@/app/components/ui/button";
import { redirect } from "next/navigation";

export default function GameJoin({
  searchParams,
  params,
}: {
  searchParams: { name?: string };
  params: { gameId: string };
}) {
  async function appendName(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;

    if (!name) return;

    redirect(`/game/${params.gameId}?name=${name}`);
  }

  if (!searchParams.name)
    return (
        <form action={appendName} className="fixed top-[20%] xl:top-[28%] lg:top-[28%] px-10">
          <div className="bg-[#1d1c20] flex flex-col gap-3 border border-white/[0.08] max-w-[40rem] rounded-lg p-8 relative overflow-hidden">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Enter your name</h1>
            <p className="text-md font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Before you join the game, we require you to provide a
              nickname/username. This nickname/username will be shown in the
              leaderboard and in the participants section.
            </p>

            <input
              type="text"
              className="bg-[#1d1c20] border border-gray-600 mt-4 p-2 rounded-lg "
              placeholder="Name"
              name="name"
            />
            <Button type="submit" className="mt-3 w-full ">
              Join Game
            </Button>
          </div>
        </form>
    );

  return <GamePlayer gameId={params.gameId} name={searchParams.name} />;
}