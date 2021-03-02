import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'Angular-Week05 Assignment';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log('Router', this.router);
    // console.log('ActivatedRoute', this.route);
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
        // console.log('!(event instanceof NavigationEnd)', event);
      } else {
        // console.log('Router', this.router);
        // console.log('ActivatedRoute', this.route);
        console.log('(event instanceof NavigationEnd)', event);
      }
      // window.scrollTo(0, 0);
    });
  }
}
