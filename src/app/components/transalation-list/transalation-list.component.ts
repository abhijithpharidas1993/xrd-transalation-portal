import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from 'src/app/constants/lang';
import { Country } from 'src/app/models/translation-item';
import { SUPPORTED_LANGUAGE, TRNSLATION_LIST } from 'src/app/constants/constants';

@Component({
  selector: 'app-transalation-list',
  templateUrl: './transalation-list.component.html',
  styleUrls: ['./transalation-list.component.scss']
})
export class TransalationListComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = 1000//TRNSLATION_LIST.length;
  countries: Country[] = [];
  languages = SUPPORTED_LANGUAGE;
  transalations: any = [];
  columns: { code: string; text: string; checked: boolean; }[]=[];
  size = 2;
  

  constructor() {
  }

  ngOnInit() {
    this.showColumns()
    this.refreshCountries();
  }

  columnSelected(value,i){
    console.log("event",value,i)
    this.languages[i].checked = !this.languages[i].checked
    console.log("lan",this.languages)
    this.showColumns()

  }

  showColumns() {
    this.columns = this.languages.filter( item => item.checked)
    this.size = this.columns.length <= 4 ? Math.floor(10/this.columns.length): 2
    console.log(this.size);
  }

  refreshCountries() {
    this.transalations = TRNSLATION_LIST
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
