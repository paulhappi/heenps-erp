import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AuthenticationService } from './_services';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = 'nufi erp';
  user: any = null;
  isMobile: boolean;
  mode = "side"
  uiContent = "content"
  progrssBarClass = "progress-bar";
  isloading = true;

  constructor(
    // private loadingBar: SlimLoadingBarService,
    public router: Router,
    public authService: AuthenticationService,
    private breakpointObserver: BreakpointObserver,
    private translateService: TranslateService
  ) {
    console.log(" constructor")

    this.isloading = true;

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      console.log(result)
      if (result.matches) {
        // this.activateHandsetLayout();
        this.isMobile = true;
        this.mode = "over"
        this.uiContent = "mobile-content"
      }
      else {
        this.isMobile = false;
        this.mode = "side"
        this.uiContent = "content"
      }
    });
    // breakpointObserver.ngOnDestroy()

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnChanges() {
    console.log(" ngOnChanges")
  }


  ngOnInit(): void {
    console.log(" ngOnInit")
    this.authService.loadToken();
    this.user = this.authService.getUser();
    this.isloading = false;
  }

  logout(): void {
    // localStorage.removeItem('currentUser');
    this.authService.logout();
    //this.router.navigate(['login']);
    //this.router.navigateByUrl('/login');
    //window.location.reload();
  }

  isAuth(isAuth?: any) {
    if (isAuth) {
      this.user = this.authService.getUser()
      // this.user = JSON.parse(localStorage.getItem(APP_USER_PROFILE)) || <User>{};
    }
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isSuperAdmin() {
    return this.authService.isSuperAdmin();
  }

  isHeadTeacher() {
    return this.authService.isHeadTeacher();
  }

  isTeacher() {
    return this.authService.isTeacher();
  }

  isPurpil() {
    return this.authService.isPurpil();
  }

  isBursar() {
    return this.authService.isBursar();
  }

  isGuardian() {
    return this.authService.isGuardian();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this. progrssBarClass = "progress-bar";
      this.isloading = true;
    }
    if (event instanceof NavigationEnd) {
      this. progrssBarClass = "progress-bar-hidden";
      this.isloading = false;
    }
    if (event instanceof NavigationCancel) {
      this. progrssBarClass = "progress-bar-hidden";
      this.isloading = false;
    }
    if (event instanceof NavigationError) {
      this. progrssBarClass = "progress-bar-hidden";
      this.isloading = false;
    }

  }


  ngOnDestroy() {
    this.breakpointObserver.ngOnDestroy()
    this.authService.logout()
    //   this.router.events
    // this.breakpoint.
  }

}
