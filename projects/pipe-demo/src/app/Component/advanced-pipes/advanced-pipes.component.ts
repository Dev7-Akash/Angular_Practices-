import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced-pipes',
  templateUrl: './advanced-pipes.component.html',
  styleUrls: ['./advanced-pipes.component.css']
})
export class AdvancedPipesComponent {
  public products:{Name:string,ShippedTo:string}[]= [
    {Name:'Iphone',ShippedTo:'Delhi'},
    {Name:'Samsung',ShippedTo:'Delhi'},
    {Name:'Oppo',ShippedTo:'Mumbai'},
    {Name:'Vivo',ShippedTo:'Goa'},
    {Name:'RedMi',ShippedTo:'Hyd'},
    {Name:'Nokia',ShippedTo:'Mumbai'}
   ];
   public status:any={
    'Delhi':'Delivery in 2 days',
    'Hyd':'Same day delivery',
    'Goa':'Delivery in 3 days',
    'other':'Usally dispactched in 4 working days'
   }
}
