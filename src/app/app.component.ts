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
        const name = document.getElementById('photoName').value
        const path = document.getElementById('photoPath').value
        const now = Date.now()

        this.db.collection('photos').add({
            'name': name,
            'path': path,
            'createdAt': now
        })
        .then(ref => console.log('ref': ref))
        .catch(err => console.log('err': err))
    }
}
