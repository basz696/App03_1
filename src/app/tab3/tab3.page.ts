import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonChip, IonLabel, IonIcon, IonAvatar, IonDatetime, IonInput, IonList, IonButton, IonImg, IonModal, IonButtons ,IonSearchbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonChip, IonLabel, IonIcon, IonAvatar, IonDatetime, IonInput, IonList, IonList, IonButton, IonImg, IonModal, IonButtons,IonSearchbar],
})
export class Tab3Page {
  presentingElement = undefined;
  constructor(private actionSheetCtrl: ActionSheetController) {

  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
}
