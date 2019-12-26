import * as React from "react";
import styled from "@emotion/styled";
import MenuHeader from "../Components/desktop/menu-header";
import PhotoHeader from "../Components/mobile/photo-header-mobile";
import ReceptionContainer from "./reception-container";
import RegistryContainer from "./registry-container";
import RSVPContainer from "./rsvp-container";
import CeremonyContainer from "./ceremony-container";
import Sticky from "react-sticky-el";

type Props = {};

const HomeContainerDiv = styled("div")``;

const HomeContainer = () => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-device-width: 1224px)"
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: "(max-device-width: 1224px)"
  // });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <HomeContainerDiv>
      <PhotoHeader />
      <Sticky topOffset={80}>
        <MenuHeader />
      </Sticky>

      <CeremonyContainer></CeremonyContainer>
      <ReceptionContainer></ReceptionContainer>
      <RegistryContainer></RegistryContainer>
      {/* <RSVPContainer></RSVPContainer> */}
    </HomeContainerDiv>
  );
};

export default HomeContainer;
