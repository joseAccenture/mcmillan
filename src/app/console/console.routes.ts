import { Routes, RouterModule } from '@angular/router';

import { HomeRootComponent } from "../home/components/root/home.component"
import { homeRoutes } from "../home/home.routes";

import { EstatRootComponent } from "../estat/components/root/estat.component";
import { estatRoutes } from "../estat/estat.routes";

import { PeticioRootComponent  } from "../peticio/components/root/peticio.component";
import { peticioRoutes } from "../peticio/peticio.routes";

import { SollicitudRootComponent } from "../sollicitud/components/root/sollicitud.component";
import { sollicitudRoutes } from "../sollicitud/sollicitud.routes";

import { TransaccioRootComponent } from "../transaccio/components/root/transaccio.component";
import { transaccioRoutes } from "../transaccio/transaccio.routes";

import { TrazabilitatRootComponent } from "../trazabilitat/components/root/trazabilitat.component";
import { trazaRoutes } from "../trazabilitat/trazabilitat.routes";

import { BackofficeRootComponent } from "../administracio/backoffice/components/root/backoffice.component"
import { backofficeRoutes } from "../administracio/backoffice/backoffices.routes";

import { OrganismeRootComponent } from "../administracio/organisme/components/root/organisme.component";
import { organismeRoutes } from "../administracio/organisme/organisme.routes";

import { CircuitRootComponent } from "../administracio/circuit/components/root/circuit.component";
import { circuitRoutes } from "../administracio/circuit/circuit.routes";

import { UsuariRootComponent } from "../administracio/usuari/components/root/usuari.component";
import { usuariRoutes } from "../administracio/usuari/usuari.routes";

import { RolRootComponent } from "../administracio/rol/components/root/rol.component";
import { rolRoutes } from "../administracio/rol/rol.routes";

import { PermisRootComponent } from "../administracio/permis/components/root/permis.component";
import { permisRoutes } from "../administracio/permis/permis.routes";

export const consoleRoutes: Routes = [ 
    {
        path: '',
        children: [{
            path: 'inici', 
            component: HomeRootComponent,
            children: [...homeRoutes] 
        }]
    },
    {
        path: '',
        children: [{
            path: 'estat', 
            component: EstatRootComponent,      
            children: [...estatRoutes]          
        }]
    },
    {
        path: '',
        children: [{
            path: 'peticio', 
            component: PeticioRootComponent,      
            children: [...peticioRoutes]          
        }]
    },
    {
        path: '',
        children: [{
            path: 'sollicitud', 
            component: SollicitudRootComponent,      
            children: [...sollicitudRoutes]          
        }]
    },
    {
        path: '',
        children: [{
            path: 'transaccio', 
            component: TransaccioRootComponent,      
            children: [...transaccioRoutes]          
        }]
    },
    {
        path: '',
        children: [{
            path: 'trazabilitat', 
            component: TrazabilitatRootComponent,      
            children: [...trazaRoutes]          
        }]
    },
    {
        path: '',
        children: [{
            path: 'backoffice', 
            component: BackofficeRootComponent,      
            children: [...backofficeRoutes]          
        }]
    },
    {
        path: '',
        children: [{
            path: 'organisme',
            component: OrganismeRootComponent,     
            children: [...organismeRoutes]         
        }]
    },
    {
        path: '',
        children: [{
            path: 'circuit',
            component: CircuitRootComponent,     
            children: [...circuitRoutes]         
        }]
    },
    {
        path: '',
        children: [{
            path: 'usuari',
            component: UsuariRootComponent,     
            children: [...usuariRoutes]         
        }]
    },
    {
        path: '',
        children: [{
            path: 'rol',
            component: RolRootComponent,     
            children: [...rolRoutes]         
        }]
    },
    {
        path: '',
        children: [{
            path: 'permis',
            component: PermisRootComponent,     
            children: [...permisRoutes]         
        }]
    }
];