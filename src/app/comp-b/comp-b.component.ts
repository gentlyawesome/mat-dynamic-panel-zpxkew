import { Component, TemplateRef, ViewContainerRef } from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {
  constructor(
    public sidenavService: PanelService,
    private vcr: ViewContainerRef
  ) {}

  openRightPanel(tempRef: TemplateRef<any>) {
    this.sidenavService.setViewContainerRef(this.vcr);
    this.sidenavService.setPanelContent(tempRef);
    this.sidenavService.open();
  }
}
