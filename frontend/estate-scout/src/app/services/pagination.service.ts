import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {PageEvent} from "@angular/material/paginator";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private pageOptionsSubject: Subject<PageEvent> = new Subject<PageEvent>()

  event$ = this.pageOptionsSubject.asObservable();

  updatePageOptions(pageEvent: PageEvent) {
    this.pageOptionsSubject.next(pageEvent);
  }
}
