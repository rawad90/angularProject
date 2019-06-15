// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  constructor() { }
incrementActiveToInactive(){
  this.inactiveToActiveCounter++;
  console.log('Active to Inactive'+this.activeToInactiveCounter);
}

incrementInactiveToActive(){
  this.activeToInactiveCounter++;
  console.log('inactive to Active'+this.inactiveToActiveCounter);
}
}
