import { Format } from '@dtos';
import { Tournament } from '@server/data/data.types';

const LEVDANSKY = 'e639966a-37b7-424f-8b74-3d82bd133879';
const DARKOWLAI = 'e65cad71-3b22-44d7-8017-0e553f8c7231'; // BrOwl* Artem
const OLEGOV = '44ea1bf1-d9ce-4664-b0d2-9d02535601df';
const PASTUSHIK = '906038db-c395-4c01-886b-92e9e1bfcfab'; // Pastushik Pavel
const VITVITSKY = '996c0dec-fdc1-4774-86c6-413a1a708c4f'; // Vitvitsky Martin
const PICHUSHKIN = 'e6d28df5-a35e-434f-87f0-4be11c9b9079';
const TKACHENKO = '390a1168-bacc-45b8-9cf5-439a2018c5bf';
const KHVIN = '1ddbc09f-aa00-45a0-b2f3-aa4f2aed8bed';
const POLEVIKOV = 'abbff07f-ef92-498f-8cc8-ca3b61169ad9';
const MALKOLMKEDISS = '0a1ef3df-d4af-494f-a300-a656a61574d7'; // Malcolm/Kediss* Roman
const GULENKOV = '6924b43a-3d96-48c4-ba76-d9618bc920ea';
const SEROV = 'bf7899ef-b66d-41f0-a257-6949f19dff34'; // Serov Daniil
const SIXSLAVA = 'eed2e7f4-3153-4500-8094-7673082d1c4a';
const NOVIK = '2c039725-2aba-44a8-b53a-ce1d84e0fca5';
const VERGEICHIK = '631fd7bc-fd14-4de3-ade2-984bd64352b6';

/*
Pod 1 (Кирилл -  Рован, Ярик - Koll, Саша - TnK, Мартин - Терра)
G1, G2, G3- победа TnK
Pod 2 (Даня -  Кесс, Егор - TnK, Артем - Марниус, Рома - Пираты)
G1- победа Марниус
Pod 3 (Даня -  Кесс, Вяч - Кинан, Влад - Юрико, Женя - Тасигур)
G1 - победа Кинан
Pod 4 (Даня -  Кесс, Даня - RogTras, Влад - Юрико, Рома - Пираты)
G1 - победа RogTras (вне зачета Лиги)
*/

export const _2025_commander: Tournament[] = [
  {
    id: 'c251029',
    format: Format.COMMANDER,
    name: 'Fall League 2025 | Commander (29.10)',
    date: '2025-10-29',
    standings: [
      { rank: 1, points: 12, player: KHVIN, deck: 'Tymna & Kraum' },
      { rank: 2, points: 12, player: DARKOWLAI, deck: 'Marneus Calgar' },
      { rank: 3, points: 12, player: 'Prudya', deck: 'Kinnan, Bonder Prodigy' },
      { rank: 4, points: 12, player: 'DanilaNabeshko', deck: 'Rograkh & Thrasios' },
      { rank: 5, points: 0, player: VERGEICHIK, deck: 'Rowan, Scion of War' },
      { rank: 6, points: 0, player: OLEGOV, deck: 'Koll, the Forgemaster' },
      { rank: 7, points: 0, player: VITVITSKY, deck: 'Terra, Magical Adept' },
      { rank: 8, points: 0, player: SEROV, deck: 'Kess, Dissident Mage' },
      { rank: 9, points: 0, player: 'VlaS2', deck: "Yuriko, the Tiger's Shadow" },
      { rank: 10, points: 0, player: MALKOLMKEDISS, deck: 'Malcolm & Kediss' },
      { rank: 11, points: 0, player: 'McRais', deck: 'Tasigur, the Golden Fang' },
      { rank: 12, points: 0, player: 'EggsLicker', deck: 'Tymna & Kraum' },
    ],
    rounds: [
      [
        { pod: 1, players: [VERGEICHIK, OLEGOV, KHVIN, VITVITSKY], winner: 3 },
        { pod: 2, players: [SEROV, 'EggsLicker', DARKOWLAI, MALKOLMKEDISS], winner: 3 },
      ],
      [
        { pod: 1, players: [VERGEICHIK, OLEGOV, KHVIN, VITVITSKY], winner: 3 },
        { pod: 2, players: [SEROV, 'Prudya', 'VlaS2', 'McRais'], winner: 2 },
      ],
      [
        { pod: 1, players: [VERGEICHIK, OLEGOV, KHVIN, VITVITSKY], winner: 3 },
        { pod: 2, players: [SEROV, 'DanilaNabeshko', 'VlaS2', MALKOLMKEDISS], winner: 2 },
      ],
    ],
  },
  {
    id: 'c251024',
    format: Format.COMMANDER,
    name: 'Fall League 2025 | Commander (24.10)',
    date: '2025-10-24',
    standings: [
      { rank: 1, points: 9, player: TKACHENKO, deck: "Y'shtola, Night's Blessed", match_record: '2-1-0' }, // Tkachenko Mikhail
      { rank: 2, points: 6, player: KHVIN, deck: 'Kefka, Court Mage', match_record: '2-1-0' }, // Khvin Alexander
      { rank: 3, points: 6, player: 'EggsLicker', deck: 'Tymna & Kraum', match_record: '2-1-0' }, // Moroz Egor
      { rank: 4, points: 3, player: 'DanB69', deck: 'The Wandering Minstrel', match_record: '0-2-0' }, // Bliznetsov Daniil
      { rank: 5, points: 3, player: 'DraA', deck: 'Krark & Sakashima', match_record: '0-1-0' }, // Draghin Alexander
      { rank: 6, points: 3, player: PASTUSHIK, deck: "Yuriko, the Tiger's Shadow", match_record: '0-1-0' }, // Pastushik Pavel
      { rank: 7, points: 3, player: LEVDANSKY, deck: 'Tymna & Kraum', match_record: '0-2-0' }, // Levdansky Alexander
      { rank: 8, points: 3, player: POLEVIKOV, deck: 'Marwyn, the Nurturer', match_record: '1-1-0' }, // Polevikov Alexander

      { rank: 9, points: 0, player: 'McRais', deck: "Glarb, Calamity's Augur", match_record: '0-1-0' }, // Ihnatsik Yauheni
      { rank: 10, points: 0, player: MALKOLMKEDISS, deck: 'Malcolm & Kediss', match_record: '0-2-0' }, // Malcolm/Kediss* Roman
      { rank: 11, points: 0, player: VITVITSKY, deck: 'Tivit, Seller of Secrets', match_record: '0-2-0' }, // Vitvitsky Martin
      { rank: 12, points: 0, player: GULENKOV, deck: 'Edgar Markov', match_record: '0-1-0' }, // Gulenkov Egor
      { rank: 13, points: 0, player: SEROV, deck: 'Kess, Dissident Mage', match_record: '0-1-0' }, // Serov Daniil
      { rank: 14, points: 0, player: SIXSLAVA, deck: 'Six', match_record: '0-1-0' }, // Six* Slava
      { rank: 15, points: 0, player: VERGEICHIK, deck: 'Urza, Lord High Artificer', match_record: '0-2-0' }, // Urza* Kirill
      { rank: 16, points: 0, player: NOVIK, deck: "Glarb, Calamity's Augur", match_record: '0-1-0' }, // Novik Ernest
    ],
    rounds: [
      [
        { pod: 1, players: ['McRais', PASTUSHIK, POLEVIKOV, MALKOLMKEDISS], winner: 3 },
        { pod: 2, players: [VITVITSKY, GULENKOV, KHVIN, SEROV], winner: 3 },
        { pod: 3, players: [TKACHENKO, SIXSLAVA, 'DraA', VERGEICHIK], winner: 1 },
      ],
      [{ pod: 1, players: ['EggsLicker', MALKOLMKEDISS, VERGEICHIK, TKACHENKO], winner: 1 }],
      [{ pod: 1, players: ['EggsLicker', LEVDANSKY, 'DanB69', KHVIN], winner: 4 }],
      [
        { pod: 1, players: ['EggsLicker', POLEVIKOV, NOVIK, VITVITSKY], winner: 1 },
        { pod: 2, players: [TKACHENKO, LEVDANSKY, KHVIN, 'DanB69'], winner: 1 },
      ],
    ],
  },
  {
    id: 'c251015',
    format: Format.COMMANDER,
    name: 'Fall League 2025 | Commander (15.10)',
    date: '2025-10-15',
    standings: [
      { rank: 1, points: 12, player: 'DanilaNabeshko', deck: 'Rograkh & Thrasios', match_record: '2-1-0' }, // omw: 40.74%
      { rank: 2, points: 12, player: VITVITSKY, deck: 'Tivit, Seller of Secrets', match_record: '2-0-0' }, // omw: 33.33%
      { rank: 3, points: 6, player: LEVDANSKY, deck: 'Tymna & Kraum', match_record: '1-0-0' },
      { rank: 4, points: 6, player: 'EggsLicker', deck: 'Tymna & Kraum', match_record: '1-2-0' },
      { rank: 5, points: 6, player: OLEGOV, deck: 'Koll, the Forgemaster', match_record: '1-3-0' },
      { rank: 6, points: 0, player: 'Prudya', deck: 'Kinnan, Bonder Prodigy', match_record: '0-4-0' },
      { rank: 7, points: 0, player: DARKOWLAI, deck: 'Marneus Calgar', match_record: '0-3-0' },
      { rank: 8, points: 0, player: PASTUSHIK, deck: 'Magda, Brazen Outlaw', match_record: '0-2-0' },
      { rank: 9, points: 0, player: PICHUSHKIN, deck: 'Grist, the Hunger Tide', match_record: '0-3-0' },
      { rank: 10, points: 0, player: 'VlaS2', deck: "Yuriko, the Tiger's Shadow", match_record: '0-2-0' },
      { rank: 11, points: 0, player: 'McRais', deck: 'Korvold, Fae-Cursed King', match_record: '0-1-0' },
    ],
    rounds: [
      [
        { pod: 1, players: ['Prudya', 'DanilaNabeshko', LEVDANSKY, DARKOWLAI], winner: 3 },
        { pod: 2, players: [OLEGOV, VITVITSKY, PICHUSHKIN, 'VlaS2'], winner: 2 },
      ],
      [
        { pod: 1, players: ['Prudya', 'DanilaNabeshko', 'EggsLicker', DARKOWLAI], winner: 2 },
        { pod: 2, players: [OLEGOV, VITVITSKY, PICHUSHKIN, 'VlaS2'], winner: 2 },
      ],
      [
        { pod: 1, players: ['Prudya', OLEGOV, 'EggsLicker', PASTUSHIK], winner: 3 },
        { pod: 2, players: [PICHUSHKIN, DARKOWLAI, 'DanilaNabeshko', 'McRais'], winner: 3 },
      ],
      [{ pod: 1, players: ['Prudya', OLEGOV, 'EggsLicker', PASTUSHIK], winner: 2 }],
    ],
  },
  {
    id: 'c250704',
    format: Format.COMMANDER,
    name: 'Summer League 2025 | Commander #4 (Precons)',
    date: '2025-07-04',
    standings: [
      { rank: 1, points: 12, player: '46d4ca5f-1d44-47da-9be8-414af89faf15' /* Bontsevich Gleb */, deck: { name: 'Graveyard Overdrive', colors: 'BRG' } },
      { rank: 2, points: 9, player: '44ea1bf1-d9ce-4664-b0d2-9d02535601df' /* Olegov Yaroslav */, deck: { name: 'Ahoy Mateys', colors: 'UBR' } },
      { rank: 3, points: 6, player: 'Eugheni', deck: { name: 'Scions & Spellcraft', colors: 'WUB' } },
      { rank: 4, points: 6, player: 'DmiB', deck: { name: 'Tyranid Swarm', colors: 'URG' } },
      { rank: 5, points: 3, player: 'Prokis' },
      { rank: 6, points: 3, player: 'e6d28df5-a35e-434f-87f0-4be11c9b9079' /* Pichushkin Andrey */ },
      { rank: 7, points: 3, player: 'f8aaf1aa-1e14-4663-b8dd-c78ac5361f14' /* Pikulev Daniil */ },
      { rank: 8, points: 3, player: '631fd7bc-fd14-4de3-ade2-984bd64352b6' /* Vergeichik Kirill */ },
      { rank: 9, points: 3, player: '1ddbc09f-aa00-45a0-b2f3-aa4f2aed8bed' /* Khvin Alexander */ },
      { rank: 10, points: 3, player: 'DraA' },
      { rank: 11, points: 0, player: '906038db-c395-4c01-886b-92e9e1bfcfab' /* Pastushik Pavel */ },
      { rank: 12, points: 0, player: 'c6b54f23-d2ed-440a-9f0f-57408f0f820b' /* Simakov Dmitriy */ },
    ],
  },
  {
    id: 'c250627',
    format: Format.COMMANDER,
    name: 'Summer League 2025 | Commander #3 (Tribal)',
    date: '2025-06-27',
    standings: [
      { rank: 1, player: '46d4ca5f-1d44-47da-9be8-414af89faf15' /* Bontsevich Gleb */, deck: { name: 'Dinosaur Tribal' }, points: 12 },
      { rank: 2, player: 'Prokis', deck: { name: 'Beast Tribal' }, points: 9 },
      { rank: 3, player: '6924b43a-3d96-48c4-ba76-d9618bc920ea' /* Gulenkov Egor */, deck: { name: 'Vampire Tribal' }, points: 9 },
      { rank: 4, player: 'e639966a-37b7-424f-8b74-3d82bd133879' /* Levdansky Alexander */, deck: { name: 'Dragon Tribal' }, points: 9 },
      { rank: 5, player: '1ddbc09f-aa00-45a0-b2f3-aa4f2aed8bed' /* Khvin Alexander */, deck: { name: 'Merfolk Tribal' }, points: 6 },
      { rank: 6, player: '390a1168-bacc-45b8-9cf5-439a2018c5bf' /* Tkachenko Mikhail */, deck: { name: 'Rogue Tribal' }, points: 6 },
      { rank: 7, player: 'Eugheni', deck: { name: 'Vampire Tribal' }, points: 6 },
      { rank: 8, player: 'McRais', deck: { name: 'Soldier Tribal' }, points: 6 },
      { rank: 9, player: 'Sutko', deck: { name: 'Elf Tribal' }, points: 3 },
      { rank: 10, player: 'abbff07f-ef92-498f-8cc8-ca3b61169ad9' /* Polevikov Aleksandr */, deck: { name: 'Elf Tribal' }, points: 3 },
      { rank: 11, player: '607e01c3-b538-43fa-adc7-5a7581bd5bb4' /* Shantar Vlad */, deck: { name: 'Vampire Tribal' }, points: 3 },
      { rank: 12, player: 'e6d28df5-a35e-434f-87f0-4be11c9b9079' /* Andrey Pichushkin */, deck: { name: 'Shaman Tribal' }, points: 3 },
      { rank: 13, player: 'DraA', deck: { name: 'Goblin Tribal' }, points: 0 },
      { rank: 14, player: '44ea1bf1-d9ce-4664-b0d2-9d02535601df' /* Olegov Yaroslav */, deck: { name: 'Goblin Tribal' }, points: 0 },
      { rank: 15, player: '53a0b738-a093-484e-8905-e9b5e7f98a3d' /* Trukhanovich Makar */, deck: { name: 'Eldrazi Tribal' }, points: 0 },
      { rank: 16, player: '12393604-d4e2-43a6-90ba-d7a61d229b3c' /* Askerko Andrey */, deck: { name: 'Rogue Tribal' }, points: 0 },
    ],
  },
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
