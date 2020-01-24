import { db } from "./firebase";

// User API

export const createUser = (
  uid,
  username,
  email_address,
  created_at,
  photoURL
) =>
  db
    .ref("users")
    .child(uid)
    .once("value", function(snapshot) {
      var exists = snapshot.val() !== null;
      userExistsCallback(
        exists,
        uid,
        username,
        email_address,
        created_at,
        photoURL
      );
    });
function userExistsCallback(
  exists,
  uid,
  username,
  email_address,
  created_at,
  photoURL
) {
  if (exists) {
    db.ref(`users/${uid}`).update({
      photoURL
    });
    console.log("User already registered and now is logged in.");
  } else {
    // update user count
    db.ref("user-count")
      .once("value")
      .then(snapshot => {
        let count = snapshot.val().count + 1;
        db.ref("user-count").set({
          count
        });

        // id followed by user number
        let id = username.replace(/ .*/, "");
        id = id.toLowerCase() + count;

        // add user to users ref
        db.ref(`users/${uid}`).set({
          username,
          email_address,
          created_at,
          id,
          photoURL
        });
      });
  }
}

export const onceGetUsers = () => db.ref("users").once("value");

export const fetchUserDataByUid = uid => db.ref("users").child(uid);

///////
// Add rest of db functions here! You can import them in any file. //
//////