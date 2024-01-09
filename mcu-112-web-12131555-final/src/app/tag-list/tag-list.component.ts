import { CommonModule } from '@angular/common';

import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css'
})
export class TagListComponent {
  @HostBinding('class') class = 'tag-list';
}
