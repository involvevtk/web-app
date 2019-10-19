const FEATURED_INVOLVEMENTS = [
  {
    url:
      "https://res.cloudinary.com/djb8sfqk1/image/upload/v1571526021/home-page-slider/place_holder_p5mf11.png",
    link:
      "https://www.facebook.com/involvevatakaraofficial/posts/1182091181978675",
    title: "Rotary School, Kozhikode"
  },
  {
    url:
      "https://res.cloudinary.com/djb8sfqk1/image/upload/v1571526021/home-page-slider/place_holder_p5mf11.png",
    link:
      "https://www.facebook.com/involvevatakaraofficial/posts/968934716627657",
    title: "Aralam, Kannur"
  },
  {
    url:
      "https://res.cloudinary.com/djb8sfqk1/image/upload/v1571526021/home-page-slider/place_holder_p5mf11.png",
    link:
      "https://www.facebook.com/involvevatakaraofficial/posts/1182091181978675",
    title: "Muthanga, Wayanad"
  }
];

class FeaturedInvolvements extends React.Component {
  componentDidMount = () => {
    // init owl carousel
    $(".featured-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1
    });
  };
  getFeaturedInvolvements = () => {
    let activities = this.props.list.map((item, index) => {
      return (
        <div key={index} className="item">
          <img src={item.url} />
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
  let containerId = "featured-container";
  let domContainer = document.getElementById(containerId);
  ReactDOM.render(
    <FeaturedInvolvements list={FEATURED_INVOLVEMENTS} />,
    domContainer
  );
});
