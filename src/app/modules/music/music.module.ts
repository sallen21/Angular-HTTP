import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMusicComponent } from './display-music/display-music.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [DisplayMusicComponent]
})
export class MusicModule { }
