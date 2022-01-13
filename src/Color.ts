/*
 * @mineralts/Logger.ts
 *
 * (c) Parmantier Baptiste
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

export default class Color {
  public bright (value: string) {
    return `\x1B[1m${value}\x1B[0m`
  }

  public dim (value: string) {
    return `\x1B[2m${value}\x1B[0m`
  }

  public underscore (value: string) {
    return `\x1B[4m${value}\x1B[0m`
  }

  public blink (value: string) {
    return `\x1B[5m${value}\x1B[0m`
  }

  public reverse (value: string) {
    return `\x1B[5m${value}\x1B[0m`
  }

  public black (value: string) {
    return `\x1B[30m${value}\x1B[0m`
  }

  public red (value: string) {
    return `\x1B[31m${value}\x1B[0m`
  }

  public green (value: string) {
    return `\x1B[32m${value}\x1B[0m`
  }

  public yellow (value: string) {
    return `\x1B[33${value}\x1B[0m`
  }

  public blue (value: string) {
    return `\x1B[34m${value}\x1B[0m`
  }

  public magenta (value: string) {
    return `\x1B[35m${value}\x1B[0m`
  }

  public cyan (value: string) {
    return `\x1B[36m${value}\x1B[0m`
  }

  public white (value: string) {
    return `\x1B[37m${value}\x1B[0m`
  }
}