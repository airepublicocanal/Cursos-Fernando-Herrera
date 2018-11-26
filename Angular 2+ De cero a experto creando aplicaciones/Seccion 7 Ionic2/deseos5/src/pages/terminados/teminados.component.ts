import { Component } from '@angular/core';
import { DeseosService } from '../../providers/deseos.service';
import { Lista } from '../../models';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosPage {
    
    constructor(public deseosService: DeseosService) {
    }
}

