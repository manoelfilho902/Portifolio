import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.scss']
})
export class ErroComponent{
  constructor(
    private dialogRef: MatDialogRef<ErroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      description: string,
      icon: string
    }
  ){
    dialogRef.afterOpened().subscribe(()=>{
      console.log('HERE!', data);      
    })
  }

  close(){
    this.dialogRef.close()
  }

} 
