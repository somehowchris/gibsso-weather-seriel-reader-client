import { LoggerFactory, LoggerFactoryOptions, LFService, LogGroupRule, LogLevel } from "typescript-logging";

// Create options instance and specify 2 LogGroupRules:
// * One for any logger with a name starting with model, to log on debug
// * The second one for anything else to log on info
const options = new LoggerFactoryOptions()
  .addLogGroupRule(new LogGroupRule(new RegExp(".+"), LogLevel.Info));

export const factory = LFService.createNamedLoggerFactory("LoggerFactory", options);
export const serialLogger = factory.getLogger('SerialMonitor');
export const weatherService = factory.getLogger('Weather');
export const apiService = factory.getLogger('API');