// https://github.com/d3/d3-selection-multi/issues/11
// https://github.com/d3/d3-selection-multi/issues/15
// https://github.com/d3/d3-selection-multi/issues/8
// https://github.com/d3/d3/issues/2733#issuecomment-183685535
import injectSelection from "./inject-selection"
import injectTransition from "./inject-transition"

export default function inject(d3) {
  injectSelection(d3)
  injectTransition(d3)
}
