-- CreateTable
CREATE TABLE "Matches" (
    "id" SERIAL NOT NULL,
    "media_video" TEXT NOT NULL,
    "team1_name" VARCHAR(155) NOT NULL,
    "team2_name" VARCHAR(155) NOT NULL,
    "team1_score" INTEGER NOT NULL,
    "team2_score" INTEGER NOT NULL,
    "match_average" DOUBLE PRECISION NOT NULL,
    "encounter" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(155) NOT NULL,
    "media" VARCHAR(255) NOT NULL,
    "team" VARCHAR(155) NOT NULL,
    "comment_team" TEXT,
    "comment_player" TEXT,
    "player_average" DOUBLE PRECISION NOT NULL,
    "golden" INTEGER NOT NULL,
    "golden_old" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayersMatches" (
    "id" SERIAL NOT NULL,
    "goals" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "shoots" INTEGER NOT NULL,
    "average" DOUBLE PRECISION NOT NULL,
    "playerId" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayersMatches_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlayersMatches_playerId_key" ON "PlayersMatches"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayersMatches_matchId_key" ON "PlayersMatches"("matchId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayersMatches_playerId_matchId_key" ON "PlayersMatches"("playerId", "matchId");

-- AddForeignKey
ALTER TABLE "PlayersMatches" ADD CONSTRAINT "PlayersMatches_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayersMatches" ADD CONSTRAINT "PlayersMatches_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
