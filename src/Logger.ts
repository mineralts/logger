/*
 * @mineral/logger
 *
 * (c) Baptiste Parmantier
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Pino from 'pino'

export default class Logger {
  public pino: Pino.Logger = Pino({
    transport: {
      target: 'pino-pretty',
    },
  })

  public log (level: string, message: string, ...values: any[]): void
  public log (level: string, mergingObject: any, message: string, ...values: any[]): void
  public log(level: string, mergingObject: any, message: string, ...values: any[]): void {
    if (values.length) {
      this.pino[level](mergingObject, message, ...values)
    } else if (message) {
      this.pino[level](mergingObject, message)
    } else {
      this.pino[level](mergingObject)
    }
  }

  public trace(message: string, ...values: any[]): void
  public trace(mergingObject: any, message: string, ...values: any[]): void
  public trace(mergingObject: any, message: string, ...values: any[]): void {
    this.log('trace', mergingObject, message, ...values)
  }

  /**
   * Log message at debug level
   */
  public debug(message: string, ...values: any[]): void
  public debug(mergingObject: any, message: string, ...values: any[]): void
  public debug(mergingObject: any, message: string, ...values: any[]): void {
    this.log('debug', mergingObject, message, ...values)
  }

  /**
   * Log message at info level
   */
  public info(message: string, ...values: any[]): void
  public info(mergingObject: any, message: string, ...values: any[]): void
  public info(mergingObject: any, message: string, ...values: any[]): void {
    this.log('info', mergingObject, message, ...values)
  }

  /**
   * Log message at warn level
   */
  public warn(message: string, ...values: any[]): void
  public warn(mergingObject: any, message: string, ...values: any[]): void
  public warn(mergingObject: any, message: string, ...values: any[]): void {
    this.log('warn', mergingObject, message, ...values)
  }

  /**
   * Log message at error level
   */
  public error(message: string, ...values: any[]): void
  public error(mergingObject: any, message: string, ...values: any[]): void
  public error(mergingObject: any, message: string, ...values: any[]): void {
    this.log('error', mergingObject, message, ...values)
  }

  /**
   * Log message at fatal level
   */
  public fatal(message: string, ...values: any[]): void
  public fatal(mergingObject: any, message: string, ...values: any[]): void
  public fatal(mergingObject: any, message: string, ...values: any[]): void {
    this.log('fatal', mergingObject, message, ...values)
  }
}