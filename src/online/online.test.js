import online from './online.flat'

describe('Online', () => {
  [
    {
      users: [
        [[8, 12], [17, 22]],
        [[5, 11], [14, 18], [20, 23]]
      ],
      answer: [[8, 11], [17, 18], [20, 22]]
    },
    {
      users: [
        [[9, 15], [18, 21]],
        [[10, 14], [21, 22]]
      ],
      answer: [[10, 14]]
    },
    {
      users: [
        [[8, 12], [17, 22]],
        [[5, 11], [14, 18], [20, 23]],
        [[7, 9], [15, 16], [18, 22]]
      ],
      answer: [[8, 9], [20, 22]]
    }
  ]
    .forEach(({ users, answer }, i) => {
      test(`Test #${i + 1}`, () => expect(online.apply(null, users)).toEqual(answer))
    })
})
