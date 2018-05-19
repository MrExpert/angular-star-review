// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
   apiKey: "AIzaSyBL9MH0IzNuiICZaxUpYEs30J5UbwaLbJ0",
   authDomain: "star-review.firebaseapp.com",
   databaseURL: "https://star-review.firebaseio.com",
   projectId: "star-review",
   storageBucket: "star-review.appspot.com",
   messagingSenderId: "146251809777"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
