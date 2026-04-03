import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, SquareCheck } from 'lucide-angular';


@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.html',
})
export class HeaderComponent {
  icons = { SquareCheck }
}
