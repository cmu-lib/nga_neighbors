<template>
  <b-container class="my-4">
    <h1>About this project</h1>
    <p>On Friday, October 25, 2019 the National Gallery of Art in Washington, D.C.hosted a "data-thon" where multiple teams of art historians and data scientists worked with the museum's open collection data to study questions about the history and composition of the collections.</p>
    <p>A joint team from Carnegie Mellon and the University of Pittsburgh used image features from a convolutional neural network to index the National Gallery of Art's images by visual similarity. This allowed the team to compare the visual distribution of different collections within the National Gallery, and with related parts of the Samuel H. Kress collection (distributed in museums around the country) as well as a portion of the Lessig Rosenwald collection (split between the National Gallery and the Library of Congress).</p>
    <p>
      Matthew Lincoln built this resulting website to exhibit some of the visualizations masterminded by Lingdon Huang and Golan Levin, as well as to provide a proof-of-concept tool for dispalying near visual neighbors of artworks across a museum. Because of time constraints, this tool currently only features selected images from teh National Gallery of Art, however th cocnept is applicable to wide arrays of collections, as we dmonstrate in our
      <router-link
        :to="{name: 'GridView', params: {id: 'kress_and_nga'}}"
      >cross-institutional expllorations.</router-link>
    </p>
    <h2>Project Team</h2>
    <ul>
      <li>Sarah Reiff Conell (University of Pittsburgh, Department of History of Art and Architecture)</li>
      <li>Lingdong Huang (Carnegie Mellon University, STUDIO for Creative Inquiry)</li>
      <li>Golan Levin (Carnegie Mellon University, STUDIO for Creative Inquiry)</li>
      <li>Matthew Lincoln (Carnegie Mellon University Libraries)</li>
    </ul>
    <h2>Acknowledgements</h2>
    <p>We are grateful to additional partners who supplied data and images for this effort:</p>
    <ul>
      <li>From the Library of Congress: Stephanie Stilo, Jamie Mears, and additional staff from LC Labs, who provided materials on the Rosenwald Collection</li>
      <li>From the Samuel H. Kress Foundation: Max Marmor and Chelsea Cates, who provided images and data from the in-progress catalog of the Kress Collection.</li>
    </ul>
    <h2>Data downloads</h2>
    <p>
      The data and images produced by this project, as well as the team's original presentation, are available at:
      <a
        href="https://doi.org/10.1184/R1/10061885"
      >https://doi.org/10.1184/R1/10061885</a>
    </p>
    <h2>Read more</h2>
    <ol>
      <li>
        NGA Paess Release:
        <a
          href="https://www.nga.gov/press/2019/datathon.html"
        >https://www.nga.gov/press/2019/datathon.html</a>
      </li>
      <li>
        Event livestream:
        <a
          href="https://www.youtube.com/watch?v=ewm4cL3vn6k"
        >https://www.youtube.com/watch?v=ewm4cL3vn6k</a>
      </li>
    </ol>
  </b-container>
</template>

<script>
export default {
  name: "About"
};
</script>