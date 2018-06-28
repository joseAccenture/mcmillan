import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { ConsoleService } from '../../../console/service/console.service';


@Component({
  selector: 'users-Masive-create-component',
  templateUrl: './users.MasiveCreate.component.html',
  styleUrls: ['./users.MasiveCreate.component.css'],
  providers: [ConsoleService]
})
export class MasiveCreateComponent {
  myFile: any;
  data: any;
  public viewTable: boolean = false;
//   _http: any;
//   _formData: any;
//   Name:string; 
// myFile:File; /* property of File type */
// fileChange(files: any){
//     console.log(files);

//     this.myFile = files[0].nativeElement;
// }
  constructor(private UsersService: UsersService, private router: Router) { }


  uploadExcel() {
if(this.myFile){
    this.UsersService.submitExcelUser(this.myFile) 
    .subscribe(resp => { 
      console.log(resp, "res"); 
      this.data = resp 
      this.viewTable = true;
      // this.router.navigateByUrl('/MasCreatUser') 
      console.log(this.data)
    }, 
      error => { 
        console.log(error, "error"); 
      })
    }else{
      
    }
  }

  handleUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.myFile = event.target.files[0];
        }
        
      }

      changeColor(duplicado){
        console.log(duplicado)
        return duplicado == true ? '#f5c6cb' : '';
    }

//   uploadExcel(): void {
//     let _formData = new FormData();
//     _formData.append("Name", this.Name);
//     _formData.append("files", this.myFile);
//     let body = this._formData;
    
// }

}