import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { ErroComponent } from "./erro/erro.component";
import { MatDialog } from "@angular/material/dialog";
import { HttpError } from "./error";
import { isValid } from "../service/request.service";

/**
 * @description handle any erros throws by aplication, so create new Erros and throws I can handler it
 */
@Injectable({
    providedIn: 'root'
})
export class CustomErrorHandler implements ErrorHandler {
    constructor(
        private dialog: MatDialog,
        private zone: NgZone
    ) { }

    /**
     * @description Recive and select a handle function
     * @param error any or ? implements Error
     */
    handleError(error: any): void {
        if (error instanceof HttpError) {
            this.handleHttpError(error);
        } else {
            this.handleUnknowError(error);
        }
    }

    private handleUnknowError(error: Error) {
        if (isValid(error)) {
            this.zone.run(() => {
                this.dialog.open(ErroComponent, {
                    width: '40%',
                    data: {
                        title: `${error.name}`,
                        description: `${error.message}`,
                        icon: 'cancel'
                    }
                })
            })
        } else {
            console.error('Error object is null or undefined', error);

        }
    }

    private handleHttpError(error: HttpError) {
        if (isValid(error)) {
            this.zone.run(() => {
                this.dialog.open(ErroComponent, {
                    width: '40%',
                    data: {
                        title: `${error.name} status code: ${error.status}`,
                        description: `${error.message}`,
                        icon: (error.status >= 400 && error.status < 500) ? 'warning' : 'cancel'
                    }
                })
            })
        } else {
            console.error('Error object is null or undefined', error);

        }

    }

}