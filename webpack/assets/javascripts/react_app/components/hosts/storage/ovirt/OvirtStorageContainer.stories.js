import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, number, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import OvirtStorageContainer from "./OvirtStorageContainer";

import '../../../../../../../../app/assets/stylesheets/base.scss'

//const mockStore = configureMockStore([thunk]);

storiesOf("Components/OvirtStorageContainer", module)
  .addDecorator(withKnobs)
  .add("Blank", () => <OvirtStorageContainer data={{ volumes: [] }} />)
  .add("With Disks", () => (
    <OvirtStorageContainer
      data={{volumes: [{ size: 4, wipeDisk: true, storageDomain: 'data' },
          { size: 8, wipeDisk: false, storageDomain: 'block' }]}}
    />
  ));
