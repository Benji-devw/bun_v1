import db from "../../db";

export async function getMatches() {
  try {
    return await db.matches.findMany({ orderBy: { createdAt: 'asc' } });
  } catch (e: unknown) {
    console.error(`Error getting posts: ${e}`);
  }
}

// export async function getMatch(id: number) {
//   try {
//     const match = await db.matches.findUnique({ where: { id } });

//     if (!match) {
//       throw new Error("Match not found");
//     }

//     return match;
//   } catch (err) {
//     console.error("Error getting Match by Id", err);
//   }
// }
