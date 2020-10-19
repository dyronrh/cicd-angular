import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { EncuestaEventService } from '../encuestas/encuesta-event.services';
interface Encuesta {
  email: string;
  tipoCocacola: string;

}
interface TipoCocacola {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-encuesta-form',
  templateUrl: './encuesta-form.component.html',
  styleUrls: ['./encuesta-form.component.css']
})
export class EncuestaFormComponent implements OnInit {
  encuesta: FormGroup;
  bebidas: TipoCocacola[] = [
    {value: 'Light', viewValue: 'Light'},
    {value: 'Sin azúcar', viewValue: 'Sin azúcar'},
    {value: 'normal', viewValue: 'normal'},
    {value: 'no tomo', viewValue: 'no tomo'}
  ];
  ngOnInit() {
    this.encuesta = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      tipoCocacola: new FormControl('',Validators.required)
    });
  }

  constructor(private service: EncuestaService,private encuestaEventService: EncuestaEventService) { }


  onSubmit(form: FormGroup) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Seguro desea adicionar la respuesta?',
      text: "Los cambios no podran ser revertidos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, adicionar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Adicionando!',
          'Usted a enviado la respuesta correctamente.',
          'success'
        ).then((result)=>{
          this.service.addEncuestas(form.value).subscribe((res)=>{
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
              title: `Usuario ${form.value.email} prefiere coca cola: ${form.value.tipoCocacola}`
            })
          },(err)=>{

          },()=>{
             this.encuestaEventService.toggle();
             this.encuesta.reset();
          })
        }
      )
       
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Usted a cancelado el ingreso de la encuesta:)',
          'error'
        )
      }
    })
   
  }
}
