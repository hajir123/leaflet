import { Component } from '@angular/core';
import * as L from 'leaflet';
import { marker } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() { }
  //ngOnInit() {
  //}

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.775189307342071, 110.37036026052238], 12);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map);

    const markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    })

    const marker = L.marker([-7.774621408831542, 110.37449133772941], { icon: markerIcon }).addTo(this.map);

    L.marker([-7.774621408831542, 110.37449133772941]).addTo(this.map)
      .bindPopup('Sekolah Vokasi UGM')
      .openPopup();
    const basemap2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		});

		const basemap4 = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
			maxZoom: 20,
			attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		});

		basemap2.addTo(this.map);

    /* Control Layer */
		var baseMaps = {
      "OpenStreetMap": basemap2,
      "CyclOSM": basemap4,
      
    };
  
    L.control.layers(baseMaps, ).addTo(this.map);
  

    L.marker([-7.775189307342071, 110.37036026052238]).addTo(this.map)
    .bindPopup('Republik Terban')
    .openPopup()

 var customIcon = L.icon({
  iconUrl: 'C:/Users/ACER/Downloads/marker.png', // Ganti dengan path menuju gambar ikon Anda
  iconSize: [32, 32], // Sesuaikan ukuran ikon sesuai kebutuhan Anda
  iconAnchor: [16, 32], // Sesuaikan titik anchor ikon sesuai kebutuhan Anda
  popupAnchor: [0, -32] // Sesuaikan titik popup anchor sesuai kebutuhan Anda
});


  }
}