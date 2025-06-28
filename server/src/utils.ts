export function _assertType<V>(_v: V): asserts _v is V {
  //
}

/** @author ChatGPT */
export function toValidPropertyKey(key: string): string {
  const identifierRegex = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
  // Case 1: Valid unquoted identifier
  if (identifierRegex.test(key)) return key;
  const escapeString = (s: string, quote: '"' | "'") => {
    const escapeMap: Record<string, string> = {
      '\\': '\\\\',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\b': '\\b',
      '\f': '\\f',
      '\v': '\\v',
      // Escape the quote itself
      [quote]: `\\${quote}`,
    };
    return s.replace(/[\\"'\n\r\t\b\f\v]/g, (char) => escapeMap[char] || char);
  };
  // Case 2: Prefer double quotes if single quote is present and double quote is not
  if (key.includes(`'`) && !key.includes(`"`)) return `"${escapeString(key, '"')}"`;
  // Case 3: Default to single quotes
  return `'${escapeString(key, "'")}'`;
}
