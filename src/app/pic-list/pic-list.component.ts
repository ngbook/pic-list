import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PicData } from '../pic/pic.model';
import { dataList } from '../data';

@Component({
  selector: 'pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.scss']
//   encapsulation: ViewEncapsulation.None
})
export class PicListComponent implements OnInit {
    list: PicData[];
    curItem: PicData; // 当前查看的图片
    showPreview: boolean;

    winHeight = window.innerHeight;

    constructor() { }

    ngOnInit() {
        this.list = dataList.map((item: PicData, index) => {
            item.index = index;
            return item;
        });
    }

    previewPic(item: PicData) {
        this.curItem = item;
        this.showPreview = true;
    }

    goPrev(cur: PicData) {
        if (cur.index <= 0) {
            return;
        }
        this.curItem = this.list[cur.index - 1];
    }

    goNext(cur: PicData) {
        if (cur.index >= this.list.length - 1) {
            return;
        }
        this.curItem = this.list[cur.index + 1];
    }
}
