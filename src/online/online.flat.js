export default function online (...userIntervals) {
  const ranges = userIntervals
    /*
     * Because a user can't have overlapping presence periods,
     * all we care about is the number of "online" intervals
     * at a certain point of time
     */
    .flat()
    /*
     * This is just a fancy way of marking hours at which
     * an interval ends; we'll need this information further.
     */
    .map(([start, end]) => ([start, -1 * end]))
    /*
     * At this point we put all hour marks onto the same timeline
     * and sort them ascending no matter what they are
     */
    .flat()
    .sort((a, b) => Math.abs(a) - Math.abs(b))

  const ints = [] // We'll put resulting intervals here
  let int // A next tuple representing starting and ending hours

  const numberOfUsers = arguments.length
  let count = 0; let prev; let next

  /*
   * Here we count number of "online" intervals after each next
   * hour, i.e. change of user presence. Once they reach the total
   * number of users, it means we have all of them online.
   */
  for (const t of ranges) {
    prev = count >= numberOfUsers
    if (t >= 0) { count++ } else { count-- }
    next = count >= numberOfUsers

    const online = !prev && next
    const offline = prev && !next

    if (online || offline) {
      // Formatting the output
      if (!int || int.length === 2) {
        int = []
        ints.push(int)
      }
      int.push(Math.abs(t))
    }
  }

  return ints
}
