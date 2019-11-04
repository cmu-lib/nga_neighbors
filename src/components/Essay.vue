<template>
  <b-container class="my-3">
    <h1>Viewing the National Gallery's “collection of collections” with machines</h1>
    <p>
      At the National Gallery of Art Datathon, our team wanted to use the images of the artworks themselves as data, in concert with the curatorial metadata that the Gallery had provided us. Using our
      <a
        href="/nga/about/#pipeline"
      >computer vision pipeline</a>, we were able to create gridded visualizations of selections of artwork images that arranged similar images closer to one another. It's worth taking a moment to understand how the visual similarity derived by Inception-v3 tracks with the formal qualities we'd usually associate with in art history, and how it operates differently.
    </p>
    <figure>
      <IIIF :info_url="info_url('nga_paintings')" id="nga_paintings" />
      <figcaption>All the paintings in the National Gallery of Art.</figcaption>
    </figure>
    <p>At first glance, the generated image features and the layout algorithm applied to them, does surprisingly well at creating islands of images that do make visual sense together. Abstract paintings, nudes, landscape paintings, portraits with dark backgrounds, still lifes; they all group in their own clusters.</p>
    <p>
      Even the "mistakes" follow a logic that we can translate into words. If you look closely in the portraiture section, you'll glimpse a black and white Robert Motherwell painting amidst the varied portrait heads. Although the Motherwell is an abstract painting, its forms do bear some resemblance to a silhouette, explaining why it ended up in the same visual neighborhood. Inception's fixation on broad geometric qualities can eclipse more important features, though. For examaple, it is quick to cluster together circular paintings, prioritizing the general overall outline shape over the fact that the Holy Family inside one
      <em>tondo</em> might be more appropriately placed next to other images of robed groups of figures. All of
      <a
        href="https://www.nga.gov/collection/artist-info.1113.html#works"
      >George Catlin's paintings</a>, with their repeated vignettes, also cluster together in a sea at the top center of the visualization. Taking time to explore these grids at high zoom offers many surprising visual juxtapositions.
    </p>
    <p>However, visual similarity alone is a very limited axis on which to base art historical research. So much of our work depends on combining visual and formal analysis with historical context. Inception, however, is ahistorical by design - it work only with the information in the pixels of the image.</p>
    <p>But what if we take Inception's strength, and use it to compare and contrast against data dimensions that do carry historical weight: the human-curated collections data that inspired the NGA datathon in the first place? This idea is what led us (at the urging of Sarah Reiff Conell) to pay close attention to the visual composition of some of the key collections that not only comprise the backbone of the NGA, but also extend beyond its walls into other institutions around the country.</p>
    <h2 id="kress">Kress Collection</h2>
    <p>
      Over three decades in the mid-twentieth century, the
      <a
        href="http://www.kressfoundation.org/collection/history/"
      >Samuel H. Kress Collection</a> was spread among regional and university museums across the country in order to introduce the American public to fine European masterworks, particular Italian art. The largest gift went to the National Gallery of Art in D.C., but the full collection now spans over ninety different museums nationwide.
    </p>
    <p>Could we contrast the visual similarity clusters agianst the groups defined by which collections these objects came from?</p>
    <figure>
      <IIIF :info_url="info_url('kress_and_nga')" id="kress_and_nga" />
      <figcaption>All the paintings in the NGA combined with about 1,000 paintings from the Kress Collection.</figcaption>
    </figure>
    <p>Now we've added the Kress paintings to the hopper, and recomputed a visual grid based on similarity. Although the same visual clusters/islands still exist (abstraction, the Catlin paintings, portraiture) you'll notice that the islands have moved around relative to each other. This is mostly an artifact of the rectangularization process and is not indicative of a massive change in the overall visual space.</p>
    <p>The payoff for this comes when we overlay the collections labels onto this visualization:</p>
    <figure>
      <IIIF :info_url="info_url('kress_and_nga_tinted')" id="kress_and_nga_tinted" />
      <figcaption>
        <span style="color:blue;">Blue tiles are non-Kress paintings in the NGA.</span>
        <br />
        <span style="color:red;">
          Red tiles are Kress paintings
          <em>not</em> in the NGA.
        </span>
        <br />
        <span style="color:gray;">White tiles are Kress paintings in the NGA.</span>
        <br />
        <span style="color:orange;">Orange tiles are Rosenwald paintings in the NGA.</span>
      </figcaption>
    </figure>
    <p>The first major observation is that Kress paintings are disporportionately clustered around formal portraits and religious paintings, which confirms what we would expect to see knowing the collection's focus on Renaissance Italian painting. While Kress did collect some landscapes (scattered at the top of our visualization), it was not his priority. Also as we'd expect, modern abstract art sits like an unperturbed ocean in this layout.</p>
    <p>What had no preconceived notion about, though, was whether the National Gallery's Kress paintings (highlighted in white in the visualization) would similarly be clustered in a corner. Was the Kress donation to the Gallery representative of Kress (focused predominantly on Italian devotional and figurative works) or did it attempt to more uniformly cover the visual space of art history available in Kress' larger collection, including landscapes and still lifes?</p>
    <p>
      What we see is that the white tiles are not randomly distributed amongst the Kress collection, which would end up with most of them falling in the lower left corner. Instead, they're
      <em>uniformly</em> distributed across all of Kress' visual scope, ensuring that one of the NGA's founding collections would cover as wide an array of artistic forms as it could - at least within the Italianate bounds that Kress made available.
    </p>
    <h2 id="rosenwald">The Rosenwald Collection</h2>
    <p>The Lessing J. Rosenwald collection forms the backbone of the prints and drawings department at the National Gallery of Art, comprising more than 40,000 items. But the NGA was not the only recipient of Rosenwald's collections; an important set of over 200 rare books was given to the Library of Congress as well. Of these volumes, 99 contain illustrations, ranging from architectural plans to typographic manuals to illustrated gospels. We first went through the digital page images at the Library of Congress and virtually trimmed out their illustrated regions. We then put these images into the hopper with the NGA's prints and drawings collection.</p>
    <figure>
      <IIIF :info_url="info_url('prints_drawings')" id="prints_drawings" />
      <figcaption>
        This visualization contains all of the photographed items from the National Gallery of Art's prints and drawings collections, as well as a selection of book illustrations taken from the Library of Congress' Rosenwald Collection.
        <a
          href="https://www.loc.gov/collections/lessing-j-rosenwald/"
        >Library of Congress' Rosenwald Collection.</a>
      </figcaption>
    </figure>
    <p>As in almost any collection, works on paper are an order of magnitude larger, counting object by object. Inception's performance on graphic works, which do not always have the color cues that paintings can provide, is mixed. Certain kinds of works, like architectural plans or landscape prints, cluster quite well. But Inception fixates more on the texture signals for specific techniques than it did for most paintings, so clustering on higher=order features like represented objects is not as strong. The serial nature of prints is also an important structuring element, so many of the "clusters" seen here are large arrays of works all using the same style, paper, inking, and printing technique, even though their actual content and visual composition aren't related.</p>
    <figure>
      <IIIF :info_url="info_url('prints_drawings_tinted')" id="prints_drawings_tinted" />
      <figcaption>
        <span style="color:blue;">Blue tiles are non-Rosenwald NGA prints & drawings.</span>
        <br />
        <span style="color:orange;">Orange tiles are Rosenwald NGA prints & drawings.</span>
        <br />
        <span
          style="color:#DAC229;"
        >Yellow tiles are illustrations from the Library of Congress Rosenwald Collection.</span>
        <br />
        <span style="color:gray;">White tiles are prints and drawings NGA Kress Collection.</span>
      </figcaption>
    </figure>
    <p>That said, if we read these clusters for what they're worth, the Rosenwald collection overlay is still interesting. The orange tiles, signifying the NGA Rosenwald prints and drawings, cover this visual space. Unlike the Kress paintings, the Rosenwald collection touches virtually all corners of the NGA's graphic universe (although notably thin in the region near the top center that contains abstract and geometric graphic arts.) However the LoC's Rosenwald book illustrations tend to cluster far more tightly, because they have more restricted forms and techniques. The large hemisphere of LoC illustrations in the upper left, for example, comprise narrative scenes set into dense decorative frameworks repeating throughout the book. Even though their content is diverse, the overall form is so standardized that Inception groups them closely together.</p>
    <p>This particular visual clustering approach does underline the sheer breadth of Rosenwald's collecting compared to a more single-minded connoisseur like Kress. But more than that, it helps us better understand the behavior of the neural net we used to project this visual space, both its fixations as well as its oversights.</p>
    <p>
      To see more experimental visualizations from our time at the datathon, visit the
      <a
        href="https://www.flickr.com/photos/creativeinquiry/albums/72157711499030821"
      >STUDIO for Creative Inquiry's Flickr page</a>.
    </p>
    <p>
      If you want to get a closer look at these artworks and their visual neighbors, hit the "I'm feeling lucky" button at the top of the page to pull one up at random. Or, if you know the NGA accession number of a particular artwork,
      <router-link :to="{name: 'Home'}">punch it in on the home page</router-link>.
    </p>
  </b-container>
</template>

<script>
import { base } from "../main";
import IIIF from "./IIIF";
export default {
  name: "Essay",
  components: {
    IIIF
  },
  methods: {
    info_url(x) {
      return base + "/iiif/" + x + "/info.json";
    }
  }
};
</script>

<style scoped>
.osd:not(:fullscreen) {
  width: 99.4vw;
  left: 50%;
  right: 50%;
  position: relative;
  margin-left: -50vw;
  margin-right: -50vw;
}
figure:not(:fullscreen) {
  margin-top: 3em;
  margin-bottom: 3em;
}
</style>