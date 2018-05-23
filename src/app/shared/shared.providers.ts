/** Shared Services */
import { ApiRestService } from "./api/api.service";
import { LogService, LOG_SERVICE } from "./log/log.service";

/** Shared Model */
import { Peticio} from "./model/peticio.model";

import { Sollicitud } from "./model/sollicitud.model";
import { SollicitudDetall } from "./model/sollicitud.detall.model";

import { Transaccio } from "./model/transaccio.model";
import { TransaccioDetall } from "./model/transaccio.detall.model";

import { Backoffice } from "./model/backoffice.model";
import { BackofficeDetall } from "./model/backoffice.detall.model";

import { Organisme } from "./model/organisme.model";
import { OrganismeDetall  } from "./model/organisme.detall.model";

import { Rol } from "./model/rol.model";
import { RolDetall } from "./model/rol.detall.model";

import { Usuari } from "./model/usuari.model";
import { UsuariDetall } from "./model/usuari.detall.model";

import { Circuit } from "./model/circuit.model";
import { CircuitDetall } from "./model/circuit.detall.model";

export const PROVIDERS = [

    ApiRestService,
    { provide: LOG_SERVICE, useClass: LogService },
    Peticio,
    Sollicitud,
    SollicitudDetall,
    Transaccio,
    TransaccioDetall,
    Backoffice,
    BackofficeDetall,
    Organisme,
    OrganismeDetall,
    Rol,
    RolDetall,
    Usuari,
    UsuariDetall,
    Circuit,
    CircuitDetall
]