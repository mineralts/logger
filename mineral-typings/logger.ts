/*
 * @mineralts/logger
 *
 * (c) Baptiste Parmantier
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Mineral/Core/Logger' {
  export interface LoggerContract {
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