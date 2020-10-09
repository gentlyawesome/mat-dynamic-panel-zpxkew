import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PanelService } from './panel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('rightPanel', { static: true }) private rightPanel: MatSidenav;

  constructor(public panelService: PanelService) {}

  ngOnInit() {
    this.panelService.panel = this.rightPanel;
  }
}
