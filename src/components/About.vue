<template>
  <b-container class="my-4">
    <h2>How to Cite</h2>
    <p>
      Matthew Lincoln, Golan Levin, Sarah Reiff Conell, Lingdong Huang, (2019) "National Neighbors: Distant Viewing the National Gallery of Art's Collection of Collections", (November 2019)
      <a
        href="https://dh-web.hss.cmu.edu/nga"
      >https://dh-web.hss.cmu.edu/nga</a>
    </p>
    <h2 id="team">Project Team</h2>
    <ul>
      <li>
        <a href="http://sarahreiffconell.com/">Sarah Reiff Conell</a> (University of Pittsburgh, Department of History of Art and Architecture)
      </li>
      <li>
        <a href="https://lingdong.works/">Lingdong Huang</a> (Carnegie Mellon University, STUDIO for Creative Inquiry)
      </li>
      <li>
        <a href="http://www.flong.com/">Golan Levin</a> (Carnegie Mellon University, STUDIO for Creative Inquiry)
      </li>
      <li>
        <a href="https://matthewlincoln.net">Matthew Lincoln</a> (Carnegie Mellon University Libraries)
      </li>
    </ul>
    <h2 id="about">Narrative</h2>
    <p>On Friday, October 25, 2019 the National Gallery of Art in Washington, D.C.hosted a "data-thon" where multiple teams of art historians and data scientists worked with the museum's open collection data to study questions about the history and composition of the collections.</p>
    <figure>
      <img src="img/team_portrait.jpg" alt="Photograph of the project team at the NGA" />
      <figcaption>Sarah Reiff Conell, Lingdong Huang, Matthew Lincoln, and Golan Levin at the National Gallery of Art, October 25, 2019</figcaption>
    </figure>
    <p>A joint team from Carnegie Mellon and the University of Pittsburgh used image features from a convolutional neural network to index the National Gallery of Art's images by visual similarity. This allowed the team to compare the visual distribution of different collections within the National Gallery, and with related parts of the Samuel H. Kress collection (distributed in museums around the country) as well as a portion of the Lessing Rosenwald collection (split between the National Gallery and the Library of Congress).</p>
    <p>Matthew Lincoln built this website to exhibit some of the visualizations masterminded by Lingdong Huang and Golan Levin, as well as to provide a proof-of-concept tool for displaying near visual neighbors of artworks across a museum. Because of time constraints, the individual-work browsing tool currently only features selected images from the National Gallery of Art. However the concept is applicable to any number of collections.</p>
    <p>
      To see cross-institutional comparisons, see our
      <router-link :to="{name: 'Essay'}">image similarity montages</router-link>&nbsp;where we combine views of both NGA artworks alongside selected images from the Kress Collection and the Library of Congress's Rosenwald Collection.
    </p>
    <b-alert show variant="warning">
      <p>Because of limitations in linkable metadata and image licensing, as well as in time, right now this site only features the metadata and publicly-available IIIF-enabled images from the National Gallery of Art.</p>
      <p>
        For the moment, the best way to see the impact of those collections on our work is to see our
        <router-link :to="{name: 'Essay'}">big-picture interpretation essay</router-link>.
      </p>
    </b-alert>
    <h3 id="pipeline">Computer vision pipeline</h3>
    <p>
      Golan Levin and Lingdong Huang from CMU's STUDIO for Creative Inquiry spearheaded the visual indexing work. USing tools developed for similar projects with the
      <a
        href="https://cmoa.org/art/teenie-harris-archive/"
      >Carnegie Museum of Art's Teenie Harris Archive</a>, Golan and Lingdong took the images that Sarah Reiff Conell and Matthew Lincoln had assembled and began to calculate "features" from them: 2,048-number long lists produced by a convolutional neural network called Inception-v3. This CNN is originally trained to identify objects in photographs; for example, to tag an image as depicting a "bicycle" or a "dog". The 2,048 dimensions it creates from an image are ones that have proven to be pretty good at accomplishing this task.
    </p>
    <p>Artistic similarity is about much more than discriminating which objects are on view in a work of art (if the artwork is even representational, which it often is not!). However, even though Inception-v3 would do a poor job at identifying useful art historical elements in these artworks, the work that it has to do along the way - building up internal models of color, contour, shading, texture, and shape - make it surprisingly good at organizing artworks by a kind of visual similarity.</p>
    <p>
      To visualize these 2,048 dimensions, Golan and Lingdong then used the UMAP algorithm, combined with
      <a
        href="https://github.com/CreativeInquiry/TeenieHarrisProject/blob/master/notebooks/Create%20Grid%20from%20Embedding.ipynb"
      >a rectangularizing assignment process developed by Kyle McDonald</a>, to cast our images into visual grids that attempt to place similar images near to each other. By definition, we remove things in doing this dimensionality reduction. But, like pressing a flower into a book to best illustrate its unique botanical features, this reduction helps us do comparative work at a scale that wouldn't be easy to do otherwise.
    </p>
    <h3 id="metadata">Metadata pipeline</h3>
    <p>
      While Golan and Ligndong were generating these ahistorical features, Sarah Reiff Conell and Matthew Lincoln were applying their art historical and metadata skills to parse the decidedly
      <em>historical</em> data that we had access to from the three collections we were putting in to conversation. This let us colorize the ahistorical visualizations of visual similarity with layers of historical information. We could then compare whether a certain historical traits, such as once belonging to Samuel H. Kress, correlated noticeably with the visual clusters produced by the computer vision pipeline. You can see some of our observations here.
    </p>
    <p>Sarah and Matthew worked in R, Python, Tableau, Open Refine, and Excel, as the formats and data cleaning needs for the three collections were all over the map.</p>
    <h2 id="acknowledgements">Acknowledgements</h2>
    <p>We are grateful to additional partners who supplied data and images for this effort:</p>
    <ul>
      <li>From the Library of Congress: Stephanie Stilo, Jamie Mears, and additional staff from LC Labs, who provided materials on the Rosenwald Collection</li>
      <li>From the Samuel H. Kress Foundation: Max Marmor and Chelsea Cates, who provided images and data from the in-progress catalog of the Kress Collection.</li>
    </ul>
    <h2 id="data-downloads">Data and code downloads</h2>
    <p>
      The data and images produced by this project, as well as the team's original presentation, are available at:
      <a
        href="https://doi.org/10.1184/R1/10061885"
      >https://doi.org/10.1184/R1/10061885</a>
    </p>
    <p>
      Rectangularizing assignment code by Kyle Mcdonald:
      <a
        href="https://github.com/CreativeInquiry/TeenieHarrisProject/blob/master/notebooks/Create%20Grid%20from%20Embedding.ipynb"
      >https://github.com/CreativeInquiry/TeenieHarrisProject/blob/master/notebooks/Create%20Grid%20from%20Embedding.ipynb</a>
    </p>
    <p>
      The image tiling code used to create deep-zoom tiles of the data visualizations:
      <a
        href="https://github.com/cmu-lib/magick_tile/"
      >https://github.com/cmu-lib/magick_tile/</a>
    </p>
    <h2 id="read-more">See more</h2>
    <ol>
      <li>
        NGA Press Release:
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
      <li>
        Further data visualizations:
        <a
          href="https://www.flickr.com/photos/creativeinquiry/albums/72157711499030821"
        >https://www.flickr.com/photos/creativeinquiry/albums/72157711499030821</a>
      </li>
      <li>
        Carnegie Mellon University Libraries press release:
        <a
          href="https://library.cmu.edu/about/publications/news/visualizing-enduring-impact-art-collectors"
        >https://library.cmu.edu/about/publications/news/visualizing-enduring-impact-art-collectors</a>
      </li>
      <li>
        University of Pittsburgh press release:
        <a
          href="https://www.pittwire.pitt.edu/news/phd-student-takes-data-driven-look-art"
        >https://www.pittwire.pitt.edu/news/phd-student-takes-data-driven-look-art</a>
      </li>
    </ol>
  </b-container>
</template>

<script>
export default {
  name: "About"
};
</script>

<style>
figure {
  max-width: 600px;
  margin: 2em auto 2em auto;
}

figure > img {
  width: 100%;
  align-self: center;
}

figcaption {
  margin-top: 1em;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: darkslategray;
}
</style>