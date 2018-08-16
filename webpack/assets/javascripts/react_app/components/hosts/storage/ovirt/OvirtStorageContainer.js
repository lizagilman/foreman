import React from "react";
import PropTypes from "prop-types";
import { Button } from "patternfly-react";
import OvirtStorageDisk from "./components/OvirtStorageDisk";
import helpers from "../../../../common/helpers";
import uuidV1 from "uuid/v1";
import "../../../../../../../../app/assets/stylesheets/base.scss";
import { noop } from '../../../../common/helpers';
// /assets/stylesheets/base.scss

class OvirtStorageContainer extends React.Component {
  constructor(props) {
    super(props);
   // helpers.bindMethods(this, ["addVolume", "gilad"]);
    this.gilad = this.gilad.bind(this);
  }

  addVolume(e) {
    e.preventDefault();
    debugger
    console.log("click");
    const { addDisk } = this.props;
    addDisk();
  }

  gilad(){
    console.log("yeled");
  }

  render() {
    const { volumes } = this.props.data;

    console.log("volumes", volumes);

    const disks = volumes.length ? (
      volumes.map(disk => {
        return <OvirtStorageDisk key={uuidV1()} {...disk} />;
      })
    ) : (
      <OvirtStorageDisk />
    );

    //const disks = <OvirtStorageDisk />;

    // const addVolumeButton = (
    //   <Button bsStyle="primary" onClick={e => this.addVolume(e)}>{`+ ${__(
    //     "Add Disk"
    //   )}`}</Button>
    // );
debugger

    const yeled = () => {
      console.log("yeled");
    };


    const addVolumeButton = (
      <div onClick={yeled}>{`+ ${__(
        "Add Yeled"
      )}`}</div>
    );

    const addVolumeButton2 = (
      <div onClick={() => yeled}>{`+ ${__(
        "Add Yeled 2"
      )}`}</div>
    );

    const addVolumeButton3 = (
      <div  onClick={() => this.gilad}>{`+ ${__(
        "Add Yeled 3"
      )}`}</div>
    );

    const addVolumeButton4 = (
      <div  onClick={this.gilad}>{`+ ${__(
        "Add Yeled 4"
      )}`}</div>
    );

    return (
      <div className={"children_fields"}>
        <div className={"fields removable-item"}>
          {disks}
          {addVolumeButton}
          {addVolumeButton2}
          {addVolumeButton3}
          {addVolumeButton4}
        </div>
      </div>
    );
  }
}

OvirtStorageContainer.propTypes = {
  addDisk: PropTypes.func,
};

OvirtStorageContainer.defaultProps = {
  volumes: [],
  addDisk: noop,
};

export default OvirtStorageContainer;
