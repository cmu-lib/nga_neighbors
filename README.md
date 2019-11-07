# nga_neighbors

On Friday, October 25, 2019 the National Gallery of Art in Washington, D.C.hosted a "data-thon" where multiple teams of art historians and data scientists worked with the museum's open collection data to study questions about the history and composition of the collections.

A joint team from Carnegie Mellon and the University of Pittsburgh used image features from a convolutional neural network to index the National Gallery of Art's images by visual similarity. This allowed the team to compare the visual distribution of different collections within the National Gallery, and with related parts of the Samuel H. Kress collection (distributed in museums around the country) as well as a portion of the Lessing Rosenwald collection (split between the National Gallery and the Library of Congress).

Matthew Lincoln built this website to exhibit some of the visualizations masterminded by Lingdong Huang and Golan Levin, as well as to provide a proof-of-concept tool for displaying near visual neighbors of artworks across a museum.

## Project Team

- Sarah Reiff Conell (University of Pittsburgh, Department of History of Art and Architecture)
- Lingdong Huang (Carnegie Mellon University, STUDIO for Creative Inquiry)
- Golan Levin (Carnegie Mellon University, STUDIO for Creative Inquiry)
- Matthew Lincoln (Carnegie Mellon University Libraries) 

## Colophon

This site is built with Vue. The source data JSON files are hosted on dh-web.hss.cmu.edu, as are the image tiles for deep zoom. Image displays on individual object pages, however, are IIIF links directly to the National Gallery of Art IIIF service.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
