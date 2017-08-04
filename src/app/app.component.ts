import { Component, OnInit } from '@angular/core';

import { Slide } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    headers: Slide[] = [];
    images: Slide[] = [];
    text: Slide[] = [];

  ngOnInit() {
    this.headers = [{
      type: 'HEADER',
      value: 'Ferrets'
    }, {
      type: 'HEADER',
      value: 'Dogs'
    }, {
      type: 'HEADER',
      value: 'Cats'
    }, {
      type: 'HEADER',
      value: 'Parrots'
    }];

    this.text = [{
      type: 'TEXT',
      value: `
        The ferret (Mustela putorius furo) is the domesticated form of the European polecat, a mammal belonging to the same 
        genus as the weasel, Mustela of the family Mustelidae.[1] They typically have brown, black, white, or mixed fur. They 
        have an average length of 51 cm (20 in) including a 13 cm (5.1 in) tail, weigh about 1.5–4 pounds (0.7–2 kg), and have a 
        natural lifespan of 7 to 10 years.[2] Ferrets are sexually dimorphic predators with males being substantially larger than 
        females.`
    }, {
      type: 'TEXT',
      value: `
      The domestic dog (Canis lupus familiaris or Canis familiaris)[4] is a member of genus Canis (canines) that forms part of 
      the wolf-like canids,[5] and is the most widely abundant carnivore. The dog and the extant gray wolf are sister 
      taxa,with modern wolves not closely related to the wolves that were first domesticated, which implies that the direct 
      ancestor of the dog is extinct.[12] The dog was the first domesticated species and has been selectively bred over millennia 
      for various behaviors, sensory capabilities, and physical attributes.`
    }, {
      type: 'TEXT',
      value: `
      The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when 
      kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. Cats are often 
      valued by humans for companionship and for their ability to hunt vermin. There are more than 70 cat breeds, though different 
      associations proclaim different numbers according to their standards`
    }, {
      type: 'TEXT',
      value: `
      Parrots, also known as psittacines /ˈsɪtəsaɪnz/, are birds of the roughly 393 species in 92 genera that make up the order 
      Psittaciformes, found in most tropical and subtropical regions. The order is subdivided into three superfamilies: the 
      Psittacoidea ("true" parrots), the Cacatuoidea (cockatoos), and the Strigopoidea (New Zealand parrots). Parrots have a 
      generally pantropical distribution with several species inhabiting temperate regions in the Southern Hemisphere, as well. 
      The greatest diversity of parrots is in South America and Australasia.`
    }];

    this.images = [{
      type: 'IMAGE',
      value: '/assets/ferrets.jpg'
    }, {
      type: 'IMAGE',
      value: '/assets/dogs.jpg'
    }, {
      type: 'IMAGE',
      value: '/assets/cats.jpg'
    }, {
      type: 'IMAGE',
      value: '/assets/parrots.jpeg'
    }];
  }
}
