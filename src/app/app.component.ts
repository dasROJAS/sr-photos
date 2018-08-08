import { Component } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {

    photos: Observable<any[]>;

    constructor(private db: AngularFirestore) {
        this.photos = db.collection('photos').valueChanges();
    }

    addPhoto() {
        const name = <HTMLInputElement>document.getElementById('photoName')
        const path = <HTMLInputElement>document.getElementById('photoPath')
        const now = Date.now()

        this.db.collection('photos').add({
            'name': name.value,
            'path': path.value,
            'createdAt': now
        })
    }
}
