import { Format } from '@dtos';
import { _2026_modern } from '@server/data/tournaments/_2026_modern';
import { _2026_pauper } from '@server/data/tournaments/_2026_pauper';
import { _2026_pioneer } from '@server/data/tournaments/_2026_pioneer';
import { _2026_standard } from '@server/data/tournaments/_2026_standard';
import { LeagueInfo } from './league.types';

export const spring2026League: LeagueInfo[] = [
  {
    format: Format.STANDARD,
    display_name: 'Standard',
    table_id: 'standard',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: _2026_standard
      .filter((t) => new Date(t.date).getTime() >= new Date('2026-02-17').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
    is_finished: true,
    rank_override: [
      'cd3375a9-b0bc-4bb1-bff4-7e50504b68d9', // 1) Shagoiko Maxim
      'e32c68c8-9493-4892-b490-952746e51445', // 2) Brozhat Rostislav
      '584bf7f8-7b31-4575-b43e-e636daac85ab', // 3) Bondarchik Andrei
      'd80a6551-671b-4303-89d1-3c361e2eca86', // 4) Ihnatsik Yauheni
      '8d9259b5-6373-4dc7-8282-d1847d935e42', // 5) Moiseenko Pavel
      '809ddd36-48d8-4c9a-9229-0bb8afe5376c', // 6) Bogdan Ilya
    ],
  },
  {
    format: Format.PAUPER,
    display_name: 'Pauper',
    table_id: 'pauper',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: _2026_pauper
      .filter((t) => new Date(t.date).getTime() >= new Date('2026-02-18').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
    is_finished: true,
    rank_override: [
      'aad9350f-6810-4e07-8e70-86669d0936fa', // 1) Duzhev Ivan
      'ba897ea4-1d49-44ff-8cd7-c7b21e27205f', // 2) Raptunovich Aleksei
      'ba66e5e2-1e4b-4cd3-9ce9-24b4d222f2a7', // 3) Martseniuk Maksim
      '1cac0dfc-55ad-42dd-9d8a-f7812cf73013', // 4) Smoktunovich Kirill
      '037e76b0-88c8-4458-94a8-d63c2f9a8155', // 5) Kolyshko Alexander
      '2c52b58c-ecae-40a7-b4d8-77f1a9d0cc2f', // 6) Novikov Valentine
    ],
  },
  {
    format: Format.PIONEER,
    display_name: 'Pioneer',
    table_id: 'pioneer',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: _2026_pioneer
      .filter((t) => new Date(t.date).getTime() >= new Date('2026-02-19').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
    is_finished: true,
    rank_override: [
      '08306c56-4ad8-4dbc-84ba-9d8ac0586ff2', // 1) Trofimov Valera
      '26c66354-a32a-4ad1-928e-8322f4724e56', // 2) Chuyanau Dzianis
      '824039fa-f433-42e7-845c-7c0fd61a21c2', // 3) Vorotinsky Vitaliy
      '1340ff1d-fb31-41dc-9827-d6bde941be4a', // 4) Latkovich Nikita
      'e32c68c8-9493-4892-b490-952746e51445', // 5) Brozhat Rostislav
      '49786616-ed05-4c94-932f-f8d26e8f4360', // 6) Krapivnitsky Gleb
    ],
  },
  {
    format: Format.MODERN,
    display_name: 'Modern',
    table_id: 'modern',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: _2026_modern
      .filter((t) => new Date(t.date).getTime() >= new Date('2026-02-22').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
    is_finished: true,
    rank_override: [
      'e32c68c8-9493-4892-b490-952746e51445', // 1) Brozhat Rostislav
      'a52d83e2-0c2f-4fe0-bc03-1d03a54a4170', // 2) Charniauski Mikita
      'ba66e5e2-1e4b-4cd3-9ce9-24b4d222f2a7', // 3) Martseniuk Maksim
      '037e76b0-88c8-4458-94a8-d63c2f9a8155', // 4) Kolyshko Alexander
      '71dad143-e677-4917-b96b-0f0e86ed30e1', // 5) Paulouski Tsimafei
      'ff13634f-2035-4dc4-ae7d-31ad9a01e658', // 6) Voiteh Stas
    ],
  },
];
