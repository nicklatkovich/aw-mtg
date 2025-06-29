import { Format } from '@dtos';
import { Tournament } from '@server/data/data.types';

export const _2025_commander: Tournament[] = [
  {
    id: 'c250621',
    format: Format.COMMANDER,
    name: 'Summer League 2025 | Commander #2 (cEDH)',
    date: '2025-06-21',
    standings: [
      { player: '5a1a3197-1193-4637-a2ad-01fe86d05a4e' /*Nabeshko Daniil*/, rank: 1, points: 9 },
      { player: 'DraA', rank: 2, points: 6 },
      { player: '2c039725-2aba-44a8-b53a-ce1d84e0fca5' /*Novik Ernest*/, rank: 3, points: 6 },
      { player: '44ea1bf1-d9ce-4664-b0d2-9d02535601df' /*Olegov Yaroslav*/, rank: 4, points: 3 },
      { player: 'e639966a-37b7-424f-8b74-3d82bd133879' /*Levdansky Alexander*/, rank: 5, points: 3 },
      { player: 'b1084213-5f4d-46dc-8d7f-569b3aca266c' /*Prudkevich Vlad*/, rank: 6, points: 0 },
      { player: '1ddbc09f-aa00-45a0-b2f3-aa4f2aed8bed' /*Khvin Alexander*/, rank: 7, points: 0 },
    ],
  },
  {
    id: 'c250620',
    format: Format.COMMANDER,
    name: 'Summer League 2025 | Commander #1 (Planechase)',
    date: '2025-06-20',
    standings: [
      { player: 'fed69699-d5b2-4c4d-b7b7-7defc3ade796' /*Bliznetsov Daniil*/, rank: 1, points: 12 },
      { player: '1ddbc09f-aa00-45a0-b2f3-aa4f2aed8bed' /*Khvin Alexander*/, rank: 2, points: 9 },
      { player: 'McRais', rank: 3, points: 9 },
      { player: 'Sutko', rank: 4, points: 9 },
      { player: '46d4ca5f-1d44-47da-9be8-414af89faf15' /*Bontsevich Gleb*/, rank: 5, points: 6 },
      { player: '44ea1bf1-d9ce-4664-b0d2-9d02535601df' /*Olegov Yaroslav*/, rank: 6, points: 6 },
      { player: 'Prokis', rank: 7, points: 6 },
      { player: '607e01c3-b538-43fa-adc7-5a7581bd5bb4' /*Shantar Vlad*/, rank: 8, points: 3 },
      { player: 'e639966a-37b7-424f-8b74-3d82bd133879' /*Levdansky Alexander*/, rank: 9, points: 3 },
      { player: '6924b43a-3d96-48c4-ba76-d9618bc920ea' /*Gulenkov Egor*/, rank: 10, points: 3 },
      { player: '390a1168-bacc-45b8-9cf5-439a2018c5bf' /*Tkachenko Mikhail*/, rank: 11, points: 0 },
      { player: 'BregoXX', rank: 12, points: 0 },
    ],
  },
];
