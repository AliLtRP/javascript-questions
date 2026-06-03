/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @returns {Array<{user: number, duration: number, equipment: Array<string>}>}
 */
export default function mergeData(sessions) {
  let temp = [];
  let result = [];
  const map = new Map();

  for (let i = 0; i < sessions.length; i++) {
    const userId = sessions[i].user;
    if (!temp.includes(userId)) {
      const userActivities = sessions.filter((v) => v.user === userId);
      map.set(userId, userActivities);
    }
  }

  map.forEach((value, key) => {
    let userTemp = {
      user: key,
      duration: value
        .map((v) => v.duration)
        .reduce((acc, curr) => acc + curr, 0),
      equipment: Array.from(new Set(value.map((v) => v.equipment).flat())).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      ),
    };

    result.push(userTemp);
  });
  return result;
}
