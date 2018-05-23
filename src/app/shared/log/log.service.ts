import { Injectable, InjectionToken } from "@angular/core";

export enum LogLevel {
    DEBUG, INFO, ERROR
}

export const LOG_SERVICE = new InjectionToken("logger");

@Injectable()
export class LogService {

    minimumLevel: LogLevel = LogLevel.DEBUG;

    logInfoMessage(message: any) {
        this.logMessage(LogLevel.INFO, message);
    }

    logDebugMessage(message: any) {
        this.logMessage(LogLevel.DEBUG, message);
    }

    logErrorMessage(message: any) {
        this.logMessage(LogLevel.ERROR, message);
    }

    logMessage(level: LogLevel, message: any) {
        if (level >= this.minimumLevel) {
            console.log(`Message (${LogLevel[level]}): ${message}`);
        }
    }
}