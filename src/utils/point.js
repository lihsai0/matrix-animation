export default class Point {
  constructor(x = 0, y = 0, originX = 0, originY = 0) {
    this.x = x
    this.y = y
    this.originX = 0
    this.originY = 0
    return this
  }

  get xy() {
    return [this.x, this.y]
  }

  set xy(v) {
    [this.x, this.y] = v
  }

  clone() {
    return new Point(this.x, this.y)
  }

  add(x, y, newpt = false) {
    if (newpt) {
      const npt = this.clone()
      return npt.add(x, y)
    }
    this.x += x
    this.y += y
    return this
  }

  sub(x, y, newpt = false) {
    if (newpt) {
      const npt = this.clone()
      return npt.sub(x, y)
    }
    this.x -= x
    this.y -= y
    return this
  }

  mul(n, m = n, newpt = false) {
    if (newpt) {
      const npt = this.clone()
      return npt.mul(n, m)
    }
    this.x *= n
    this.y *= m
    return this
  }

  div(n, m = n, newpt = false) {
    if (newpt) {
      const npt = this.clone()
      return npt.div(n, m)
    }
    this.x /= n
    this.y /= m
    return this
  }

  get origin() {
    return [this.originX, this.originY]
  }

  set origin(v) {
    [this.originX, this.originY] = v
  }

  setOrigin(originX, originY) {
    this.origin = [originX, originY]
    return this
  }

  matrix(
    a = 1,
    b = 0,
    c = 0,
    d = 1,
    e = 0,
    f = 0,
    newpt = false,
  ) {
    if (newpt) {
      const npt = this.clone()
      return npt.matrix(a, b, c, d)
    }

    const x = this.x - this.originX
    const y = this.y - this.originY

    this.x = a * x - b * y + e + this.originX
    this.y = -c * x + d * y + f + this.originY
    return this
  }

  toString() {
    return this.xy.join(',')
  }
}
