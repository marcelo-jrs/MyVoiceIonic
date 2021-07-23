import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public screenList = [
    {
      title: 'Home',
      url: '/featured',
      icon: 'flash-outline'
    },
    {
      title: 'Notificações',
      url: '/notifications',
      icon: 'notifications-outline'
    },
    {
      title: 'Perfil',
      url: '/table',
      icon: 'person-outline'
    },
    {
      title: 'Pesquisa',
      url: '/list',
      icon: 'search-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname;
    if (path !== undefined) {
      this.selectedIndex = this.screenList.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
