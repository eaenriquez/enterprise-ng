import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SohoBusyIndicatorDirective, SohoDataGridComponent} from 'ids-enterprise-ng';
import {DataGridDemoService} from './datagrid-demo.service';
@Component({
  selector: 'app-datagrid-dynamic-demo',
  templateUrl: './datagrid-dynamic.demo.html',
  providers: [DataGridDemoService]
})
export class DataGridDynamicDemoComponent implements AfterViewInit {
  get data() {
    return this._data;
  }
  set data(value) {
    this._data = value;
  }
  @ViewChild(SohoDataGridComponent, {static: true}) dataGrid: SohoDataGridComponent;
  @ViewChild(SohoBusyIndicatorDirective, {static: true}) busyIndicator: SohoBusyIndicatorDirective;

  private _data;
  constructor(
    private service: DataGridDemoService
  ) {
  }
  ngAfterViewInit() {
    setTimeout(() => this.addRows(), 1000);
    this.service.init();
  }
  public get columns(): SohoDataGridColumn[] {
    console.log('getting columns');
    return [...this.service.getColumns()];
  }
  addRows() {
    this.service.getData(null).subscribe((d: any[]) => {
      this.busyIndicator.open();
      const newData = new Array<any>(...d);
      newData.forEach((r) => r.orderDate = new Date());
      this._data = newData;
      this.busyIndicator.close(true);
    });
  }
  busy() {
    if (this.busyIndicator) {
      this.busyIndicator.activated = true;
      setTimeout(() => this.busyIndicator.activated = false, 2000);
    }
  }
}
