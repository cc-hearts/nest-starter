export function filterDataFalsy(
  data: Record<string, unknown>
): Record<string, unknown> {
  return Object.keys(data).reduce((acc, pre) => {
    if (data[pre]) {
      acc[pre] = data[pre]
    }
    return acc
  }, {})
}

export function deleteAttribute(
  data: Record<string, unknown>,
  keys: Array<keyof typeof data>
) {
  keys.forEach((val) => {
    delete data[val]
  })
}
