const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();


  const matchesData = [
    {
      media_video: "/assets/videos/1.mp4",
      team1_name: "Team A",
      team2_name: "Team B",
      team1_score: 15,
      team2_score: 12,
      match_average: 3.5,
      encounter_date: "01-01-2024 13:30",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      media_video: "/assets/videos/2.mp4",
      team1_name: "Team A",
      team2_name: "Team B",
      team1_score: 8,
      team2_score: 12,
      match_average: 3.5,
      encounter_date: "05-01-2024 12:30",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  const playersData = [
    {
      name: "Steph",
      media: "/medias/steph.jpg",
      team: "equipe_a",
      comment_team: '["comment 1","comment 2"]',
      comment_player: '["mon comment 1","mon comment 2"]',
      player_average: 3.5,
      golden: 1,
      golden_old: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Tom",
      media: "/medias/tom.jpg",
      team: "equipe_a",
      comment_team: '["comment 1","comment 2"]',
      comment_player: '["mon comment 1","mon comment 2"]',
      player_average: 3.5,
      golden: 0,
      golden_old: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Pedro",
      media: "/medias/pedro.jpg",
      team: "equipe_a",
      comment_team: '["comment 1","comment 2"]',
      comment_player: '["mon comment 1","mon comment 2"]',
      player_average: 3.5,
      golden: 0,
      golden_old: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Quentin",
      media: "/medias/quentin.jpg",
      team: "equipe_a",
      comment_team: '["comment 1","comment 2"]',
      comment_player: '["mon comment 1","mon comment 2"]',
      player_average: 3.5,
      golden: 0,
      golden_old: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Ben",
      media: "/medias/ben.jpg",
      team: "equipe_a",
      comment_team: '["comment 1","comment 2"]',
      comment_player: '["mon comment 1","mon comment 2"]',
      player_average: 3.5,
      golden: 0,
      golden_old: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  const playersMatchesData = [
    {
      player_id: 1,
      match_id: 1,
      goals: 6,
      assists: 8,
      shoots: 10,
      average: 4.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 2,
      match_id: 1,
      goals: 9,
      assists: 3,
      shoots: 12,
      average: 8.0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 3,
      match_id: 1,
      goals: 7,
      assists: 12,
      shoots: 15,
      average: 6.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 4,
      match_id: 1,
      goals: 0,
      assists: 12,
      shoots: 22,
      average: 3.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 5,
      match_id: 1,
      goals: 4,
      assists: 2,
      shoots: 11,
      average: 2.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },


    {
      player_id: 1,
      match_id: 2,
      goals: 6,
      assists: 8,
      shoots: 10,
      average: 4.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 2,
      match_id: 2,
      goals: 9,
      assists: 3,
      shoots: 12,
      average: 8.0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 3,
      match_id: 2,
      goals: 7,
      assists: 12,
      shoots: 15,
      average: 6.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 4,
      match_id: 2,
      goals: 0,
      assists: 12,
      shoots: 22,
      average: 3.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 5,
      match_id: 2,
      goals: 4,
      assists: 2,
      shoots: 11,
      average: 2.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];


  async function seedData() {
    await prisma.matches.createMany({ data: matchesData });
    await prisma.players.createMany({ data: playersData });
  
    for (let playerMatch of playersMatchesData) {
      try {
        await prisma.playersMatches.create({
          data: {
            player: { connect: { id: playerMatch.player_id } },
            match: { connect: { id: playerMatch.match_id } },
            goals: playerMatch.goals,
            assists: playerMatch.assists,
            shoots: playerMatch.shoots,
            average: playerMatch.average,
            createdAt: playerMatch.createdAt,
            updatedAt: playerMatch.updatedAt,
          },
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
  
  seedData()
    .catch((error) => {
      console.error(error);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });