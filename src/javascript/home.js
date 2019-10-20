const FEATURED_INVOLVEMENTS = [
  {
    url:
      "https://res.cloudinary.com/djb8sfqk1/image/upload/v1571526021/home-page-slider/place_holder_p5mf11.png",
    link:
      "https://www.facebook.com/involvevatakaraofficial/posts/1182091181978675",
    title: "Rotary School, Kozhikode",
    description:
      "I am a very simple card. I am good at containing small bits of information."
  },
  {
    url:
      "https://res.cloudinary.com/djb8sfqk1/image/upload/v1571526021/home-page-slider/place_holder_p5mf11.png",
    link:
      "https://www.facebook.com/involvevatakaraofficial/posts/968934716627657",
    title: "Aralam, Kannur",
    description:
      "I am a very simple card. I am good at containing small bits of information."
  },
  {
    url:
      "https://res.cloudinary.com/djb8sfqk1/image/upload/v1571526021/home-page-slider/place_holder_p5mf11.png",
    link:
      "https://www.facebook.com/involvevatakaraofficial/posts/1182091181978675",
    title: "Muthanga, Wayanad",
    description:
      "I am a very simple card. I am good at containing small bits of information."
  }
];

class FeaturedInvolvements extends React.Component {
  componentDidMount = () => {
    // init owl carousel
    $(".featured-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      stagePadding: 50,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 7500,
      autoplayHoverPause: true
    });
  };

  getFeatureStructure = item => {
    return (
      <div class="card featured-card">
        <div class="card-image">
          <img src={item.url} alt={item.title} title={item.title} />
          <span class="card-title">{item.title}</span>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>{item.description}</p>
          </div>
          <div class="card-action">
            <a href={item.link}>Read more</a>
          </div>
        </div>
      </div>
    );
  };

  getFeaturedInvolvements = () => {
    let activities = this.props.list.map((item, index) => {
      return (
        <div key={index} className="item">
          {this.getFeatureStructure(item)}
        </div>
      );
    });
    return <React.Fragment>{activities}</React.Fragment>;
  };
  render() {
    return this.getFeaturedInvolvements();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("Page loaded");
  // let containerId = "featured-container";
  // let domContainer = document.getElementById(containerId);
  // ReactDOM.render(
  //   <FeaturedInvolvements list={FEATURED_INVOLVEMENTS} />,
  //   domContainer
  // );
});
