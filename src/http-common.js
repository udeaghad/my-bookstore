const CreateRecords = async () => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

  })
    .then((response) => response.text())
    .then((likeData) => likeData);
};

export default CreateRecords;

// export const app_id = 'iOTHVRccMaEI4ZIBQJFj'
