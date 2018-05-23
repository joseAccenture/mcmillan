import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from "../home/home.module";
import { EstatModule } from "../estat/estat.module";
import { MainContentModule } from "../maincontent/mainContent.module";

import { PeticioModule } from "../peticio/peticio.module";
import { SollicitudModule } from "../sollicitud/sollicitud.module";
import { TransaccioModule } from "../transaccio/transaccio.module";
import { TrazabilitatModule } from "../trazabilitat/trazabilitat.module";

import { BackofficeModule } from "../administracio/backoffice/backoffice.module";
import { OrganismeModule} from "../administracio/organisme/organisme.module";
import { CircuitModule} from "../administracio/circuit/circuit.module";
import { UsuariModule } from "../administracio/usuari/usuari.module";
import { RolModule } from "../administracio/rol/rol.module";
import { PermisModule } from "../administracio/permis/permis.module";

import { HomeRootComponent } from "../home/components/root/home.component";
import { ConsoleRootComponent  } from "./components/console-root/console.component";
import { ConsoleNavbarComponent } from "./components/console-navbar/console.navbar.component";

import { consoleRoutes } from "./console.routes";

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    EstatModule,
    MainContentModule,
    PeticioModule,
    SollicitudModule,
    TransaccioModule,
    TrazabilitatModule,
    BackofficeModule,
    OrganismeModule,
    CircuitModule,
    UsuariModule,
    RolModule,
    PermisModule,
    RouterModule.forRoot(consoleRoutes)
  ],
  declarations: [
    ConsoleRootComponent,
    ConsoleNavbarComponent,
    HomeRootComponent
  ],
  exports: [
    ConsoleRootComponent,
    HomeRootComponent
  ]
})
export class ConsoleModule { }
