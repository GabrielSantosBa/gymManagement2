import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TelaProfessoresComponent } from './tela-professores.component';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/app/views/menu/menu.module';
import { ProfCardModule } from '../prof-card/prof-card.module';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TelaProfessoresComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CardModule,
    TieredMenuModule,
    DividerModule,
    TableModule,
    ButtonModule,
    CommonModule, 
    MenuModule,  
    ProfCardModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    ReactiveFormsModule
  ]

})
export class TelaProfessoresModule { }
