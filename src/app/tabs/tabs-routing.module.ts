import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'farm',
        loadChildren: () => import('../Pages/farm/farm.module').then(m => m.FarmPageModule)
      },
     /* {
        path: 'notifications',
        loadChildren: () => import('../Pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },*/
      {
        path: 'profile',
        loadChildren: () => import('../Pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'edit-profile',
        loadChildren: () => import('../Pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
      },
      {
        path: 'change-password',
        loadChildren: () => import('../Pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../Pages/about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'farmfinder',
        loadChildren: () => import('../pages/farmfinder/farmfinder.module').then( m => m.FarmfinderPageModule)
      },
      {
        path: 'qrscan',
        loadChildren: () => import('../pages/qrscan/qrscan.module').then( m => m.QrscanPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'help',
        loadChildren: () => import('../pages/help/help.module').then( m => m.HelpPageModule)
      },

      {
        path: 'farmhouse',
        loadChildren: () => import('../pages/farmhouse/farmhouse.module').then( m => m.FarmhousePageModule)
      },
      {
        path: 'add-farm',
        loadChildren: () => import('../pages/add-farm/add-farm.module').then( m => m.AddFarmPageModule)
      },
      {
        path: 'view-farm/:id',
        loadChildren: () => import('../Pages/farm-info/farm-info.module').then( m => m.FarmInfoPageModule)
      },
      {
        path: 'update-farm/:id',
        loadChildren: () => import('../pages/update-farm/update-farm.module').then( m => m.UpdateFarmPageModule)
      },

      {
        path: 'add-cattle',
        loadChildren: () => import('../pages/add-cattle/add-cattle.module').then( m => m.AddCattlePageModule)
      },
      {
        path: 'view-cattle/:id',
        loadChildren: () => import('../Pages/cattle-info/cattle-info.module').then( m => m.CattleInfoPageModule)
      },
      {
        path: 'update-cattle/:id',
        loadChildren: () => import('../pages/update-cattle/update-cattle.module').then( m => m.UpdateCattlePageModule)
      },

      {
        path: 'add-vaccination',
        loadChildren: () => import('../pages/add-vaccination/add-vaccination.module').then( m => m.AddVaccinationPageModule)
      },
      {
        path: 'view-vaccine/:id',
        loadChildren: () => import('../Pages/vaccination-info/vaccination-info.module').then( m => m.VaccinationInfoPageModule)
      },
      {
        path: 'update-vaccine/:id',
        loadChildren: () => import('../pages/update-vaccine/update-vaccine.module').then( m => m.UpdateVaccinePageModule)
      },

      {
        path: 'add-disease',
        loadChildren: () => import('../pages/add-disease/add-disease.module').then( m => m.AddDiseasePageModule)
      },
      {
        path: 'view-disease/:',
        loadChildren: () => import('../Pages/disease-info/disease-info.module').then( m => m.DiseaseInfoPageModule)
      },
      {
        path: 'update-disease/:id',
        loadChildren: () => import('../pages/update-disease/update-disease.module').then( m => m.UpdateDiseasePageModule)
      },

      {
        path: 'add-breeding',
        loadChildren: () => import('../pages/add-breeding/add-breeding.module').then( m => m.AddBreedingPageModule)
      },
      {
        path: 'view-breeding/:id',
        loadChildren: () => import('../Pages/breeding-info/breeding-info.module').then( m => m.BreedingInfoPageModule)
      },
      {
        path: 'update-breeding/:id',
        loadChildren: () => import('../pages/update-breeding/update-breeding.module').then( m => m.UpdateBreedingPageModule)
      },

      {
        path: 'notes',
        loadChildren: () => import('../pages/notes/notes.module').then( m => m.NotesPageModule)
      },
      {
        path: 'addnote',
        loadChildren: () => import('../pages/addnote/addnote.module').then( m => m.AddnotePageModule)
      },
      {
        path: 'viewnotes/:id',
        loadChildren: () => import('../pages/viewnotes/viewnotes.module').then( m => m.ViewnotesPageModule)
      },
      {
        path: 'update-note/:id',
        loadChildren: () => import('../pages/update-note/update-note.module').then( m => m.UpdateNotePageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../pages/notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: 'chatroom',
        loadChildren: () => import('../pages/chatroom/chatroom.module').then( m => m.ChatroomPageModule)
      },
    ]
  }
];

@NgModule({
   imports: [
    RouterModule.forChild(routes)
 //  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
 
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
