import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { AuthService, UserData } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component( {
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: [ './admin.component.scss' ]
} )
export class AdminComponent implements OnInit {

  userArr: any[];
  displayDialog = false;
  relationshipsList: any[];
  newUser = new UserData();
  displayDelete = false;
  constructor(
    private auth: AuthService,
    private msgs: MessageService,
    private cfnMsg: ConfirmationService
  ) { }

  ngOnInit() {
    console.log( this.newUser );
    this.relationshipsList = [];
    this.auth.getAllUsers().subscribe( ( res ) => {
      this.userArr = res.docs.map( el => {
        const data = el.data();
        console.log( el.id, data );
        this.relationshipsList.push( { label: data.name, value: el.id } );
        return { uid: el.id, ...data };
      } );
      console.log( 'this.relationshipsList: ', this.relationshipsList );
      console.log( 'this.userArr: ', this.userArr );
    } );

  }

  showDialogToAdd() {
    this.displayDialog = true;
    console.log( this.userArr );
  }

  exit() {
    this.displayDialog = false;
  }

  saveNew() {
    this.auth.createUser( this.newUser, '123456' ).subscribe(
      res => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    );
  }
  updateUser( data ) {
    console.log( 'data: ', data );
    this.auth.updateUser( data.data ? data.data : data ).subscribe( res => {
      this.msgs.add( { severity: 'success', summary: 'Confirmado', detail: 'Actualizado correctamente' } );
    },
      err => {
        this.msgs.add( { severity: 'warning', summary: 'Cancelado', detail: 'Capachao?' } );
      } );
  }

  showDelete( selected ) {
    // console.log( 'selected: ', selected );
    this.cfnMsg.confirm( {
      message: '¿Estás seguro de querer borrarlo?',
      header: 'Confirmar borrado',
      icon: 'pi pi-exclamation-circle',
      accept: () => {
        this.auth.deleteUser( selected ).subscribe( () => {
          this.ngOnInit();
          this.msgs.add( { severity: 'info', summary: 'Confirmado', detail: 'Borrado correctamente' } );

        }, err => {
          console.log( 'err: ', err );

        } );
      },
      reject: () => {
        this.msgs.add( { severity: 'info', summary: 'Rechazado', detail: 'Borrar cancelado' } );
      }
    } );
  }

  getPhoto( rowData ) {
    console.log( 'get photo wip' );
    const filUp = document.getElementById( 'fileUpload' );
    filUp.click();
    filUp.onchange = ( ev ) => {
      const file = ev.target;

      const fileReader = new FileReader();
      fileReader.readAsDataURL( file.files[ 0 ] );
      fileReader.onload = () => {
        rowData.photo = fileReader.result;
        this.auth.updateUser( rowData ).subscribe( res => {
          this.msgs.add( { severity: 'success', summary: 'Confirmado', detail: 'Actualizado correctamente' } );
        },
          err => {
            this.msgs.add( { severity: 'warning', summary: 'Cancelado', detail: 'Capachao?' } );
          } );
      }
      // this.auth.updatePhoto( rowData, b64File );
    };
  }

  drawPhoto( rowData ) {
    console.log( 'draw photo wip' );
  }

}
