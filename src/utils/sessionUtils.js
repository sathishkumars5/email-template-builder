// src/utils/sessionUtils.js

export const checkSessionAndLog = () => {
  const uid = sessionStorage.getItem('uid');

  if (uid) {
    console.log(`User is logged in with UID: ${uid}`);
    if (username) {
      console.log(`Username: ${username}`);
    }
    return { uid, username };
  } else {
    console.log('No user session found.');
    return null;
  }
};
