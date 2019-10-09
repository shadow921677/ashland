import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { OnInit } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss']
})
export class SpeakerListPage implements OnInit {
  speakers: any[] = [];
  speakersCenter: any[] = [];
  centerLength = 0;
  speakersLittoral: any[] = [];
  littoralLength = 0;
  speakersWest: any[] = [];
  westLength = 0;
  speakersSouth: any[] = [];
  southLength = 0;
  speakersAdamaoua: any[] = [];
  adamaouaLength = 0;
  speakersNorth: any[] = [];
  northLength = 0;
  speakersFarNorth: any[] = [];
  farNorthLength = 0;
  speakersEast: any[] = [];
  eastLength = 0;
  speakersNorthWest: any[] = [];
  northWestLength = 0;
  speakersSouthWest: any[] = [];
  southWestLength = 0;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });

    let tableau = [];
    let tableau2 = [];
    let tableau3 = [];
    let tableau4 = [];
    let tableau5 = [];
    let tableau6 = [];
    let tableau7 = [];
    let tableau8 = [];
    let tableau9 = [];
    let tableau10 = [];
    this.speakers.forEach(function(element) {
      if (element.region === 'center') {
        tableau.push(element);
      }
      if (element.region === 'littoral') {
        tableau2.push(element);
      }
      if (element.region === 'west') {
        tableau3.push(element);
      }
      if (element.region === 'south') {
        tableau4.push(element);
      }
      if (element.region === 'adamaoua') {
        tableau5.push(element);
      }
      if (element.region === 'north') {
        tableau6.push(element);
      }
      if (element.region === 'far north') {
        tableau7.push(element);
      }
      if (element.region === 'east') {
        tableau8.push(element);
      }
      if (element.region === 'north west') {
        tableau9.push(element);
      }
      if (element.region === 'south west') {
        tableau10.push(element);
      }
    });
    this.speakersCenter = tableau;
    this.centerLength = tableau.length;
    this.speakersLittoral = tableau2;
    this.littoralLength = tableau2.length;
    this.speakersWest = tableau3;
    this.westLength = tableau3.length;
    this.speakersSouth = tableau4;
    this.southLength = tableau4.length;
    this.speakersAdamaoua = tableau5;
    this.adamaouaLength = tableau5.length;
    this.speakersNorth = tableau6;
    this.northLength = tableau6.length;
    this.speakersFarNorth = tableau7;
    this.farNorthLength = tableau7.length;
    this.speakersEast = tableau8;
    this.eastLength = tableau8.length;
    this.speakersNorthWest = tableau9;
    this.northWestLength = tableau9.length;
    this.speakersSouthWest = tableau10;
    this.southWestLength = tableau10.length;
  }

  ngOnInit() {}

  onDetail(speaker: any) {
    this.router.navigateByUrl('/speaker/' + speaker.id);
  }

  goToSpeakerTwitter(speaker: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitter}`,
      '_blank'
    );
  }

  async openSpeakerShare(speaker: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + speaker.twitter
            );
            if (
              (window as any)['cordova'] &&
              (window as any)['cordova'].plugins.clipboard
            ) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' + speaker.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(speaker: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + speaker.name,
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        },
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        }
      ]
    });

    await actionSheet.present();
  }
}
