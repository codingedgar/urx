import { handleNext, statefulStream, connect, pipe, map, publish, subscribe, stream } from '../src'

describe('connect', () => {
  it('subscribes a publisher to the emitter', () => {
    const a = stream<number>()
    const b = stream<number>()

    connect(a, b)
    const sub = jest.fn()
    subscribe(b, sub)
    publish(a, 4)

    expect(sub).toHaveBeenCalledWith(4)
  })

  it('subscribes a publisher to the emitter (map)', () => {
    const a = statefulStream(0)
    const b = statefulStream(0)
    const sub = jest.fn()
    subscribe(b, sub)

    connect(
      pipe(
        a,
        map(val => val * 2)
      ),
      b
    )

    publish(a, 2)
    expect(sub).toHaveBeenCalledWith(4)
  })

  it('handleNext unsub is indempotent', () => {
    const a = stream()

    const sub = jest.fn()

    const unsub = handleNext(a, value => {
      expect(value).toEqual('foo')
    })

    subscribe(a, sub)

    publish(a, 'foo')

    unsub()
    publish(a, 'bar')
    expect(sub).toHaveBeenCalledWith('bar')
  })
})
