import React from "react";
import {
  Row,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Checkbox
} from "patternfly-react";
// import Select from '../../../../../common/forms/Select';
// import Checkbox from '../../../../../common/forms/Checkbox';
// import NumericInput from '../../../../../common/forms/NumericInput';
//

import "../../vmware/controller/disk/disk.scss";

const OvirtStorageDisk = ({ size, wipeDisk, storageDomain }) => {

  return (
    <div>
      <Row className="clearfix">
        <FormGroup>
          <ControlLabel className={"col-md-2"}>Size (GB)</ControlLabel>
          <div className={"col-md-4"}>
            <FormControl type="number" defaultValue={size}/>
          </div>

          <div className="col-md-2">
            <Button className={"close"}>
              <span aria-hidden="true">×</span>
            </Button>
          </div>
        </FormGroup>
      </Row>

      <Row className="clearfix">
        <FormGroup>
          <ControlLabel className={"col-md-2"}>Storage domain</ControlLabel>
          <div className={"col-md-4"}>
            <FormControl componentClass="select" placeholder="select" defaultValue={storageDomain}>
              <option value="block">block</option>
              <option value="data">data</option>
            </FormControl>
          </div>
        </FormGroup>
      </Row>

      <Row className="clearfix">
        <FormGroup>
          <ControlLabel className={"col-md-2"}>Preallocate disk</ControlLabel>
          <Checkbox className={"col-md-4"} readOnly>
            Use thin provision if unchecked
          </Checkbox>
        </FormGroup>
      </Row>

      <Row className="clearfix">
        <FormGroup>
          <ControlLabel className={"col-md-2"}>
            Wipe disk after delete
          </ControlLabel>
          <Checkbox className={"col-md-4"} readOnly checked={wipeDisk}/>
        </FormGroup>
      </Row>

      <Row className="clearfix">
        <FormGroup>
          <ControlLabel className={"col-md-2"}>Disk interface</ControlLabel>
          <div className={"col-md-4"}>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">VirtIO</option>
              <option value="select">VirtIO SCSI</option>
              <option value="select">IDE</option>
            </FormControl>
          </div>
        </FormGroup>
      </Row>
    </div>
  );
}

export default OvirtStorageDisk;
