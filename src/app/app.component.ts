import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PushPollComponent } from './push-poll/push-poll.component';
import { ComputedComponent } from './computed/computed.component';
import { AllowSignalWritesComponent } from './allow-signal-writes/allow-signal-writes.component';
import { UntrackedComponent } from './untracked/untracked.component';
import { ImmutableComponent } from './immutable/immutable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PushPollComponent, ComputedComponent, AllowSignalWritesComponent,
    UntrackedComponent, ImmutableComponent
  ],
  template: 
  `
    <app-immutable></app-immutable>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
