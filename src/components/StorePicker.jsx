import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

export default class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from sumbitting
    event.preventDefault();
    // 2. Get the text from the input
    const storeId = this.myInput.value.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeId}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}
