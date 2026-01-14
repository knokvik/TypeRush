import { redirect } from "next/navigation";

/**
 * Game page - redirects to home as base /game path is not valid
 * Users should navigate to /game/[gameId] instead
 */
export default function Game() {
  return redirect("/");
}
