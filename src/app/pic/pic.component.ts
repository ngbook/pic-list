import { Component, Input } from '@angular/core';
import { PicData } from './pic.model';

@Component({
  selector: 'pic-item',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss']
})
export class PicComponent {
    @Input()
    data: PicData;

    constructor() {}

}
