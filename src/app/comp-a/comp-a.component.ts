import { TemplatePortal } from '@angular/cdk/portal';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  @ViewChild('secondTempRef', { static: true }) secondTempRef: TemplateRef<any>;
  constructor(
    public sidenavService: PanelService,
    private vcf: ViewContainerRef
  ) {}

  ngOnInit() {}

  openRightPanel(templateRef: TemplateRef<any>) {
    const portal = new TemplatePortal(templateRef, this.vcf);
    // this.sidenavService.setPanelPortal(portal);
    this.sidenavService.open(portal);
  }

  openRightPanelTwo() {
    this.openRightPanel(this.secondTempRef);
  }
}
