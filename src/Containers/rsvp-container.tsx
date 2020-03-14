import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";
import { Formik, Field, Form, FormikHelpers, useFormik } from "formik";
import firebase from "../Components/firebase/firebase";
import * as _ from "lodash";
import StickyHeader from "../Components/desktop/sticky-header";
import { allGuests, searchTerms } from "../Components/rsvp/test-data";
import { withRouter } from "react-router-dom";
import MobileNavMenu from "../Components/mobile/mobile-nav-menu";
import MobileUI from "../Components/rsvp/mobile-ui";
import DesktopUI from "../Components/rsvp/desktop-ui";

import { EnterFirstName } from "../Components/rsvp/enter-first-name";
import AttendanceDetails from "../Components/rsvp/attendance-details";
import { firestore } from "firebase";

type Props = { history: any; isMobile?: boolean; saveSucceeded: any };
type State = {
  firstName: string;
  lastName: string;
  isAttending: boolean | null;
  allowedPlusOne: boolean;
};

type EventType = {
  target: {
    value: string;
    id: string;
  };
};

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  isCheckedYes: boolean;
  isCheckedNo: boolean;
}

export const RSVPContainer: FunctionComponent<Props> = props => {
  const [guestList, setGuestList] = useState<any>([]);

  const getPossibleGuests = async (invitationName: string) => {
    console.log("Here in possible guests, get names?");
    const formattedName = invitationName
      .toLowerCase()
      .replace(/ and /g, " ")
      .replace(/the /g, " ")
      .replace(/\./g, "")
      .replace(/\s+/g, " ")
      .trim();

    const searchTermsRef = firebase
      .firestore()
      .collection("search-terms")
      .where("matchKeys", "array-contains", formattedName);

    // @ts-ignore
    const guestArray = [];
    const searchTermsArray = await searchTermsRef.get();

    searchTermsArray.forEach(searchTerm => {
      guestArray.push(searchTerm.data());
    });

    if (guestArray.length === 1) {
      // @ts-ignore
      const allGuests = [];

      // @ts-ignore
      const results = await guestArray[0].uids.map(async (uid: number) => {
        const docRef = await firebase
          .firestore()
          .collection("guests")
          .doc(`${uid}`);

        const documentSnapshot = await docRef.get();
        await allGuests.push({ ...documentSnapshot.data(), id: uid });
      });

      Promise.all(results).then(completed => {
        // @ts-ignore
        setGuestList(allGuests);
      });
    }
  };

  const onSaveRSVP = (saveDetails: any) => {
    saveDetails.map((guest: any, index: number) => {
      firebase
        .firestore()
        .collection("responses")
        .add({ ...guest })
        .then(function(docRef) {
          if (index === saveDetails.length - 1) {
            props.history.push("/");
            props.saveSucceeded();
          }
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    });
  };

  // const noResultsReturned = (invitationName: string) => {
  //   const resultsArray = invitationName
  //     .toLowerCase()
  //     .replace(/\./g, "")
  //     .split(" ");

  //   const removeWords = ["mrs", "mr", "and", "the"];
  //   let mrsMrsCount = 0;

  //   const filteredArray = resultsArray.filter(textKey => {
  //     if (textKey === "mrs" || textKey === "mr") {
  //       mrsMrsCount++;
  //     }
  //     return !removeWords.includes(textKey);
  //   });

  //   const guestsRef = firebase
  //     .firestore()
  //     .collection("search-terms")
  //     .where("matchKeys", "array-contains-any", ["david", "klein"]);

  //   // guestsRef.where("matchKeys", "array-contains", "David");
  //   // @ts-ignore
  //   const guestArray = [];
  //   guestsRef.get().then(querySnapshot => {
  //     querySnapshot.forEach(doc => {
  //       guestArray.push(doc.data());
  //     });
  //   });
  //   getActualGuest(guestArray, filteredArray);
  // };
  const getActualGuest = (possibleGuests: any, matchTerms: any) => {
    if (possibleGuests.length()) {
    }
  };

  const uploadAllData = () => {
    searchTerms.forEach(obj => {
      const dataToAdd = {
        matchKeys: obj.matchKeys.map(key => key.toLowerCase()),
        uids: obj.uids,
        mrmrsFlag: obj.mrmrsFlag
      };

      // var guestsRef = firebase.firestore().collection("search-terms");

      // guestsRef.doc(`${obj.id}`).set({
      //   ...dataToAdd,
      //   ...optionalData
      // });
      firebase
        .firestore()
        .collection("search-terms")
        .add({ ...dataToAdd })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "'Open Sans Condensed', sans-serif"
      }}
    >
      {!props.isMobile && <StickyHeader visibleSection={"rsvp"} />}
      {props.isMobile && <MobileNavMenu />}

      {!props.isMobile && (
        <DesktopUI
          guestList={guestList}
          getPossibleGuests={getPossibleGuests}
          onSaveRSVP={onSaveRSVP}
        />
      )}

      {props.isMobile && (
        <MobileUI
          guestList={guestList}
          getPossibleGuests={getPossibleGuests}
          onSaveRSVP={onSaveRSVP}
        />
      )}
    </div>
  );
};

export default withRouter(RSVPContainer);
