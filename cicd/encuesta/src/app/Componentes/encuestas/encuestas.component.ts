import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Encuesta } from 'src/app/Model/encuesta';
import { EncuestaEventService } from './encuesta-event.services';
import { error } from 'protractor';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'tipo', 'accion'];
  encuestas: Encuesta[] = [];

  
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  dsEncuestas: MatTableDataSource<Encuesta>;
  constructor(private service: EncuestaService,private encuestaEventService: EncuestaEventService) { 
    this.dsEncuestas = new MatTableDataSource<Encuesta>();
    this.listarEncuestas()
  }
  ngAfterViewInit() {
    this.dsEncuestas.paginator = this.paginator;
  }
  ngOnInit() {
    this.encuestaEventService.change.subscribe(isAdd => {
      if(isAdd){
        this.listarEncuestas()
      }
    });

  }
  listarEncuestas(){
  this.service.listarEncuestas().subscribe((result) =>{
    this.dsEncuestas.data=result;
    console.log(result);
  },(error)=>{

  },()=>{
    
  })
 }
  eliminarEncuesta(id){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Seguro desea eliminar la encuesta?',
      text: "Los cambios no podran ser revertidos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminando!',
          'Usted a eliminado la encuesta correctamente.',
          'success'
        ).then((result)=>{
          this.service.deleteEncuesta(id).subscribe((res)=>{
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            
            Toast.fire({
              icon: 'success',
              title: 'Usted a eliminado la encuesta deseada'
            })
          },(err)=>{

          },()=>{
             this.encuestaEventService.toggle();
          })
        }
      )
       
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

    this.service.listarEncuestas().subscribe((result) =>{
      this.dsEncuestas.data=result;
      console.log(result);
    },(error)=>{
  
    },()=>{
      
    })
  }
}
