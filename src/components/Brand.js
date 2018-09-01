import React from 'react';
import axios from 'axios';

class Brand extends React.Component {
  state = {
    brands: null
  };

  componentDidMount() {
    const url =
      'https://elbaite-staging.herokuapp.com/api/v1/main/' +
      this.props.endpoint;
    axios.get(url).then((res) => {
      this.setState({
        brands: res.data[this.props.endpoint]
      });
      console.log(res);
    });
  }

  render() {
    const { brands } = this.state;

    if (brands !== null) {
      const brandInfo = brands.map((brandData) => {
        return (
          <React.Fragment>
            <div className="brand-data">
              <div>
                <p className="brand-name">{brandData.name}</p>
                <p>{brandData.total_volume}</p>
              </div>
              <div>
                <img src={brandData.icon_url} alt={true} />
              </div>
            </div>
          </React.Fragment>
        );
      });
      return (
        <React.Fragment>
          <h1>{this.props.title}</h1>
          <div>{brandInfo}</div>
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <p>Nothing to show</p>
        </div>
      );
    }
  }
}
export default Brand;
