import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public Arrayanios : Array<number> = [];
  public Arraymeses : Array<any> = [];
  public Arraydays : Array<number> = [];
  public indexAnioSelect : number = 0;
  public indexMesSelect : number = 0;
  public indexDiaSelect : number = 0;
  public date = moment(); 
  
  ngOnInit() {
    for(let i = 1950; i <= this.date.year() ; i++ ){
      this.Arrayanios.push(i);
    }
    this.Arraymeses.push({index : 1, mes : "Enero"})
    this.Arraymeses.push({index : 2, mes : "Febrero"})
    this.Arraymeses.push({index : 3, mes : "Marzo"})
    this.Arraymeses.push({index : 4, mes : "Abril"})
    this.Arraymeses.push({index : 5, mes : "Mayo"})
    this.Arraymeses.push({index : 6, mes : "Junio"})
    this.Arraymeses.push({index : 7, mes : "Julio"})
    this.Arraymeses.push({index : 8, mes : "Agosto"})
    this.Arraymeses.push({index : 9, mes : "Septiembre"})
    this.Arraymeses.push({index : 10, mes : "Octubre"})
    this.Arraymeses.push({index : 11, mes : "Noviembre"})
    this.Arraymeses.push({index : 12, mes : "Diciembre"})

    
    var daysInMonth = this.date.daysInMonth()
    for(let i = 1; i <= daysInMonth; i++) {
      this.Arraydays.push(i)
    }

    // this.getDaysInANewDate()
  }


  getDaysArrayByMonth() {
    var daysInMonth = this.date.daysInMonth();
    var arrDays = [];
  
    while(daysInMonth) {
      var current = moment().date(daysInMonth);
      arrDays.push(current);
      daysInMonth--;
    }
  }

  selectAnio(indexSelected){
    this.indexAnioSelect = indexSelected
    this.getDaysInANewDate()
  }

  selectMes(indexSelected){
    this.indexMesSelect = indexSelected
    this.getDaysInANewDate()
  }

  selectDia(indexSelected){
    this.indexDiaSelect = indexSelected
  }

  getDaysInANewDate(){
    //let day = moment("02-01-2001", "MM-DD-YYYY");
    let anio = this.indexAnioSelect;
    let mes = this.Arraymeses[this.indexMesSelect].index < 10 ? "0"+this.Arraymeses[this.indexMesSelect].index : this.Arraymeses[this.indexMesSelect].index;
    let dia = this.indexDiaSelect < 10 ? "0"+this.indexDiaSelect : this.indexDiaSelect;
    
    let fecha = `${mes}-01-${anio}`
    let day = moment(fecha, "MM-DD-YYYY")
    var daysInMonth = day.daysInMonth()
    this.Arraydays = []
    for(let i = 1; i <= daysInMonth; i++) {
      this.Arraydays.push(i)
    }
  }

}
