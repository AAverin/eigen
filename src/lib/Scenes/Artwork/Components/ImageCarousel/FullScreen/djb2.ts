export class DJB2 {
  hash = 5381
  include(n: number) {
    this.hash = 33 * this.hash + n
  }
}
