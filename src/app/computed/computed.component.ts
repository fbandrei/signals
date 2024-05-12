import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.css'
})
export class ComputedComponent {
  number = signal(100);
  double = computed(() => {
    return this.number() * 2;
  });

  someFunction() {
    // computes the value for the first time
    this.double(); 
    // uses the cached value, no second computation done
    this.double(); 
    // new value for signal, double does not recompute yet
    this.number.set(200); 
    // recomputes again (only when requested)
    this.double(); 
  }
}
