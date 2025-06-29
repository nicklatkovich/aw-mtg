import assert from 'assert';
import { PlayerDTO } from '@dtos';
import { playersByGuid, playersByUsername } from '@server/data/players';

export function buildPlayersData(): Map<string, PlayerDTO> {
  const usedIds = new Map<string, string>();
  const result = new Map<string, PlayerDTO>();
  for (const [guid, value] of Object.entries(playersByGuid)) {
    if (!value) continue;
    const display_name = typeof value === 'string' ? value : value[0];
    const meleeNames = Object.entries(playersByUsername)
      .filter(([_, _guid]) => guid === _guid)
      .map(([name]) => name);
    const normNames = meleeNames
      .map((name) => (/^[a-z\d-]+$/i.test(name) ? name.toLowerCase() : null))
      .filter((e): e is NonNullable<typeof e> => !!e);
    const id = (typeof value !== 'string' ? value[1].id : null) ?? normNames[0] ?? null;
    assert(id, `Failed to create id for ${display_name} (${guid})`);
    {
      const dupGuid = usedIds.get(id);
      assert(!dupGuid, `User id duplicate: ${id} ${guid} !== ${dupGuid})`);
    }
    usedIds.set(id, guid);
    result.set(guid, { display_name, guid, id });
  }
  return result;
}
