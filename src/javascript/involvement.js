function getAlbumById() {
  FB.api("/626581674196298", function(response) {
    if (response && !response.error) {
      console.log(response);
    }
    console.log(response.error);
  });
}

function getFbPostById() {
  FB.api("/481395608714906_1163013243886469/", function(response) {
    if (response && !response.error) {
      console.log(response);
    }
    console.log(response.error);
  });
}

const INVOLVMENT_DATA = [
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.625115984342867%2F1180701355450991%2F%3Ftype%3D3&width=500" width="500" height="241" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.625115984342867%2F1180701175451009%2F%3Ftype%3D3&width=500" width="500" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.625115984342867%2F1180701142117679%2F%3Ftype%3D3&width=500" width="500" height="241" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F1163013230553137%2F%3Ftype%3D3&width=500" width="500" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F1163013120553148%2F%3Ftype%3D3&width=500" width="500" height="244" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F1163013017219825%2F%3Ftype%3D3&width=500" width="500" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F1162312897289837%2F%3Ftype%3D3&width=500" width="500" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F1154253571429103%2F%3Ftype%3D3&width=500" width="500" height="498" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F1131515910369536%2F%3Ftype%3D3&width=500" width="500" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F1107621549425639%2F%3Ftype%3D3&width=500" width="500" height="285" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F1107621492758978%2F%3Ftype%3D3&width=500" width="500" height="241" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F1107621439425650%2F%3Ftype%3D3&width=500" width="500" height="241" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F968929839961478%2F%3Ftype%3D3&width=500" width="500" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.626581674196298%2F837886543065809%2F%3Ftype%3D3&width=500" width="500" height="289" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.625115984342867%2F688149404706191%2F%3Ftype%3D3&width=500" width="500" height="285" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finvolvevatakaraofficial%2Fphotos%2Fa.625115984342867%2F1180701402117653%2F%3Ftype%3D3&width=500" width="500" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`
];

class InvolvementActivity extends React.Component {
  componentDidMount = () => {
    $(".involvement-container").masonry({
      itemSelector: ".involvement",
      columnWidth: 200
    });
  };
  getActivityListing = () => {
    let activities = this.props.list.map((item, index) => {
      return (
        <div
          key={index}
          className="involvement"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      );
    });
    return <React.Fragment>{activities}</React.Fragment>;
  };
  render() {
    return this.getActivityListing();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let containerId = "involvement-container";
  let domContainer = document.getElementById(containerId);
  ReactDOM.render(<InvolvementActivity list={INVOLVMENT_DATA} />, domContainer);
});
