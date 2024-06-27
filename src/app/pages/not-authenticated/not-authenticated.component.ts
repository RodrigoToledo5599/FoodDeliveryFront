import { Component , OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-not-authenticated',
  templateUrl: './not-authenticated.component.html',
  styleUrl: './not-authenticated.component.css'  
})
export class NotAuthenticatedComponent implements OnInit {
  
  
  ngOnInit(): void {
    
  }
}
