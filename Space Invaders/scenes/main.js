const MOVE_SPEED = 200
const INVADER_SPEED = 100
const LEVEL_DOWN = 200
const TIME_LEFT = 30
const BULLET_SPEED = 400
let CURRENT_SPEED = INVADER_SPEED

layer(['obj', 'ui'], 'obj')

addLevel([
  '!^^^^^^^^^^    &',
  '!^^^^^^^^^^    &',
  '!^^^^^^^^^^    &',
  '!              &',
  '!              &',
  '!              &',
  '!              &',
  '!              &',
  '!              &',
  '!              &',
], {
  width: 30,
  height: 22,
  '^' : [ sprite('space-invader'), scale(0.7), 'space-invader'],
  '!' : [ sprite('wall'), 'left-wall'],
  '&' : [ sprite('wall'), 'right-wall'],
})

const player = add([
  sprite('space-ship'),
  pos(width() / 2, height() / 2),
  origin('center')
])

keyDown('left', () => {
  player.move(-MOVE_SPEED, 0)
})

keyDown('right', () => {
  player.move(MOVE_SPEED, 0)
})

function spawnBullet(p) {
  add([
    rect(6, 18),
    pos(p),
    origin('center'),
    color(0.5, 0.5, 1),
    'bullet'
  ])
}

keyPress('space', () => {
  spawnBullet(player.pos.add(0, -25))
})

action('bullet', (b) => {
  b.move(0, -BULLET_SPEED)
  if (b.pos.y < 0) {
    destroy(b)
  }
})

collides('bullet', 'space-invader', (b, s) => {
  camShake(4)
  destroy(b)
  destroy(s)
  score.value++
  score.text = score.value
})

const score = add([
  text('0'),
  pos(50, 50),
  layer('ui'),
  scale(3),
  {
    value: 6
  }
])

const timer = add([
  text('0'),
  pos(100, 50),
  scale(2),
  layer('ui'),
  {
    time: TIME_LEFT,
  }
])

timer.action(() => {
  timer.time -= dt()
  timer.text = timer.time.toFixed(2)
  if (timer.time <= 0) {
    go('lose', { score: score.value })
  }
})

action('space-invader', (s) => {
  s.move(CURRENT_SPEED, 0)
})

collides('space-invader', 'right-wall', () => {
  CURRENT_SPEED = -INVADER_SPEED
  every('space-invader', (s) => {
    s.move(0, LEVEL_DOWN)
  })
})

collides('space-invader', 'left-wall', () => {
  CURRENT_SPEED = INVADER_SPEED
  every('space-invader', (s) => {
    s.move(0, LEVEL_DOWN)
  })
})

player.overlaps('space-invader', () => {
  go('lose', { score: score.value })
})

action('space-invader', (s) => {
  if (s.pos.y >= (12 * 22)) {
    go('lose', { score: score.value })
  }
})