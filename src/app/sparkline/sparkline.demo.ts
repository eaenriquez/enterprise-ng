import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  SohoRadarComponent
} from 'ids-enterprise-ng';

@Component({
  selector: 'app-sparkline-demo',
  templateUrl: './sparkline.demo.html',
})
export class SparklineDemoComponent implements OnInit {

  public sparklineData1 = [{
    data: [25, 20, 55, 28, 41, 30, 50, 27, 24, 27],
    name: 'Inventory'
  }];

  public sparklineData2 = [{
    data: [25, 20, 55, 28, 41, 30, 50, 27, 24, 27],
    name: 'Inventory'
  }];

  public sparklineData3 = [{
    data: [40, 30, 40, 16, 50, 17, 15, 39, 15, 18],
    name: 'Demand'
  }];

  public sparklineData4 = [{
    data: [25, 20, 61, 28, 10, 30, 50, 35, 13, 27],
    name: 'Inventory'
  }];

  public sparklineData5 = [{
    data: [25, 20, 55, 28, 41, 30, 50, 22, 16, 27],
    name: 'Inventory'
  }];

  public sparklineType1: SohoSparklineType = 'sparkline-dots-n-peak';
  public sparklineType2: SohoSparklineType = 'sparkline-peak';
  public sparklineType3: SohoSparklineType = 'sparkline-medianrange-n-peak';
  public sparklineType4: SohoSparklineType = 'sparkline-minmax';
  public sparklineType5: SohoSparklineType = 'sparkline';

  constructor() { }
  ngOnInit() { }

  onRendered(event: Event) {
    console.log('Soho Sparkline: onRender', event);
  }
}
