/*
 * @mineralts/logger
 *
 * (c) Baptiste Parmantier
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Mineral/Core/Logger' {
  interface Color {
    bright (value: string): string
    dim (value: string): string
    underscore (value: string): string
    blink (value: string): string
    reverse (value: string): string
    black (value: string): string
    red (value: string): string
    green (value: string): string
    yellow (value: string): string
    blue (value: string): string
    magenta (value: string): string
    cyan (value: string): string
    white (value: string): string
  }

  export interface LoggerContract {
    colors: Color
    log(level: string, message: string, ...values: any[]): void
    log(level: string, mergingObject: any, message: string, ...values: any[]): void

    trace(message: string, ...values: any[]): void
    trace(mergingObject: any, message: string, ...values: any[]): void

    debug(message: string, ...values: any[]): void
    debug(mergingObject: any, message: string, ...values: any[]): void

    info(message: string, ...values: any[]): void
    info(mergingObject: any, message: string, ...values: any[]): void

    warn(message: string, ...values: any[]): void
    warn(mergingObject: any, message: string, ...values: any[]): void

    error(message: string, ...values: any[]): void
    error(mergingObject: any, message: string, ...values: any[]): void

    fatal(message: string, ...values: any[]): void
    fatal(mergingObject: any, message: string, ...values: any[]): void
  }
  const Logger: LoggerContract
  export default Logger
}