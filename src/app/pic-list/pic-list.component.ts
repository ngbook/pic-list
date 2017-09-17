import { Component, OnInit } from '@angular/core';
import { PicData } from '../pic/pic.model';
import { dataList } from '../data';


@Component({
  selector: 'pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.scss']
})
export class PicListComponent implements OnInit {
    list: PicData[];

    constructor() { }

    ngOnInit() {
        this.list = dataList;
    }

}
