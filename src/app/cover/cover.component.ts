import {Component, OnInit} from '@angular/core';
import {CoverService} from "../services/cover.service";

@Component({
    selector: 'app-cover',
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
    cover: {};
    test: {};

    private coversIDs: object = {
        start: 0,
        finish: 1
    };

    constructor(private coverService: CoverService) {
    }

    getCover(): void {
        let path = this.getPath();
        this.coverService.getCover(this.coversIDs[path]).subscribe(cover => this.cover = cover[path]);
    }

    private getPath(): string {
        let path = window.location.pathname.slice(1).toLowerCase();
        if (!path) path = 'start';
        return path;
    }

    ngOnInit() {
        this.getCover();
    }

}
