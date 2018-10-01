import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from '../_services';

@Component({
  selector: 'app-portfolio',
  templateUrl: '../modal/modal.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Input() id: string;
  private element: any;

  projects = [
    {
      name: 'Feel to Reel',
      img: 'feeltoreel',
      about: 'N/A',
      links: ['https://feel-to-reel.firebaseapp.com/', 'https://github.com/hcandelaria/Movie-Feels"'],
    },
    {
      name: 'Barber Scheduler',
      img: 'barberscheduler',
      about: 'N/A',
      links: ['https://mighty-crag-92193.herokuapp.com/', 'https://github.com/hcandelaria/Barber-Shop']
    },
    {
      name: 'Clicky Game',
      img: 'clickygame',
      about: 'N/A',
      links: ['https://fast-ridge-44681.herokuapp.com/', 'https://github.com/hcandelaria/clicky-game.git']
    },
    {
      name: 'Scraper News',
      img: 'scrapenews',
      about: 'N/A',
      links: ['https://afternoon-anchorage-79574.herokuapp.com/', 'https://github.com/hcandelaria/reading-list.git']
    },
    {
      name: 'Inventory Assistant',
      img: 'inventoryassistant',
      about: 'N/A',
      links: ['https://damp-sea-65164.herokuapp.com/', 'https://github.com/hcandelaria/Finalproject']
    }
  ];

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    let modal = this;
    console.log('this->');
    console.log(this);
    // ensure id attribute exists
    if (!this.id) {
        console.log('hello')
        console.error('modal must have an id');
        return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
        if (e.target.className === 'modal') {
            // modal.close();
        }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  openModal(id: string) {
    console.log(id)
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }


}
