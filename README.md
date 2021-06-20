# Matirx-Animation

This a animation tool to show how a matrix transform the space.

Inspired by the book:

- 《程序员的数学3 线性代数》（ISBN: 9787115417749）
- 《プログラミングのための線形代数》（ISBN: 9784274065781）

Programs the book provide is not easy to run(too more dependences).

So this repo is here.

## Why Not?

Why not use transform of CSS or SVG?

It will be aslo transform the `stroke-width` and more in this way. What wanted is observe the transform of coordinates, not the transform of the whole graphic.

## Usage

Download [matrix-animation.zip](https://github.com/lihsai0/matrix-animation/releases).

Open `index.html` in your browser(best is latest Chrome) by a http(s) server.

For example:

``` shell
unzip matrix-animation.zip -d matrix-animation
cd matrix-animation
python3 -m http.server
# open http://localhost:8000/
```

## TODOs

- [ ] Able to set arrow vector
- [x] Demos of 《程序员的数学3 线性代数》（ISBN: 9787115417749）
- [ ] Show cursor coordinate of SVG
- [ ] Control animation process with input\[type="range"\]
- [ ] Refactoring JS Files(33%)
  - [x] Add packaging tools
  - [ ] Split index.js to modules
  - [ ] Add TypeScript
- [ ] Deploy to a free serverless platform
- [ ] Optimize webpack config
