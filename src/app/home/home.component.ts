import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

import { ApiServiceService } from '../api/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;
  badgeValue = 0;
  totalAmout = 0;
  quantity = 0;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getProducts();
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  }
  

  async getProducts() {
     await this.apiService.getProducts('products')
        .subscribe(res =>{
          this.products = res
          this.products.forEach(element => {
            element.total = 0;
          });
          console.log(this.products);
        });

       
    }

    selectProducts(item, opt){
      this.products.forEach(element => {
        if(element.name == item.name){          
          if(opt == "add"){
            element.Quantity = element.Quantity+1;
            this.quantity += 1;
            element.total = parseInt(element.total) + parseInt(element.price);
          }
          if(opt == "minus"){
            element.Quantity = element.Quantity == 0?0:element.Quantity -1;
            this.quantity = this.quantity == 0?0:this.quantity -1;
            element.total = parseInt(element.total) == 0?0:parseInt(element.total) - parseInt(element.price);
          }
        }
        this.totalAmout += parseInt(element.total);
        
      });
    }
  
}
