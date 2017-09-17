import {
  Component, OnInit,
  Input, Output,
  EventEmitter
} from '@angular/core';
import { PicData } from '../pic/pic.model';

@Component({
  selector: 'pic-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
    @Input()
    data: PicData;
    @Input()
    show: boolean;

    @Output()
    onPrev: EventEmitter<PicData> = new EventEmitter();
    @Output()
    onNext: EventEmitter<PicData> = new EventEmitter();
    @Output()
    showChange: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    killPreview() {
        this.show = false;
        this.showChange.emit(false);
    }

    prev() {
        this.onPrev.emit(this.data);
    }

    next() {
        this.onNext.emit(this.data);
    }
}
