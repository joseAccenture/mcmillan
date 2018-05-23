import { Component, OnInit, Inject } from '@angular/core';

import { HomeService } from "../../service/home.service";

import { LOG_SERVICE, LogService } from "../../../shared/log/log.service";

@Component({
  selector: 'home-view',
  templateUrl: './home.view.component.html',
  styleUrls: ['./home.view.component.css']
})
// export class HomeViewComponent {
//   title = 'app';
// }

export class HomeViewComponent implements OnInit {

  constructor(private homeService: HomeService, @Inject(LOG_SERVICE) private logger: LogService) { 
      this.logger.logInfoMessage("Home homeview");
  }

  ngOnInit(): void {
  }
}