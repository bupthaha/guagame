var levels = [
  [
    [0, 0,],
    [80, 0],
    [160, 0]
  ],
  [
    [0, 0, 1, 'green'],
    [100, 100, 1, 'green'],
  ],
  [
    [0, 0, 2, 'blue'],
    [65, 0, 2, 'blue'],
    [150, 150, 'blue'],
  ],
]

for (var i = 0; i < 9; i++) {
  levels[2][i] = [i * 65 + 7.5, 0, 4, 'red']
  levels[2][i + col] = [i * 65 + 7.5, 25, 3, 'yellow']
  levels[2][i + col * 2] = [i * 65 + 7.5, 50, 2, 'blue']
  levels[2][i + col * 3] = [i * 65 + 7.5, 75, 1, 'green']
  // levels.append([i * 65 + 7.5, 0, 2, 'blue'])
}
console.log(levels);
