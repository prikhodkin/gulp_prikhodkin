import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "name" ]

  greet() {
    console.log(`Hello, folder controller`)
  }

  get name() {
    return this.nameTarget.value
  }
}
