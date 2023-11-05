// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  colors: [
    {name: 'Everything', color: '#402020'},
    {name: 'License Plate', color: '#ff0000'},
    {name: 'NY License Plate', color: '#808060' },
    {name: 'NY License Plate', color: '#00ff66' },
    {name: 'TLC License Plate', color: '#cc00ff'}
  ],
  // colors: [
  //   { name: 'Blocked Bike Lane', color: '#402020' },
  //   { name: 'Blocked Crosswalk', color: '#ff0000' },
  //   { name: 'Blocked Sidewalk', color: '#808060' }
  // ],
//      { name: 'Road', color: '#402020' },
// { name: 'Lane Markings', color: '#ff0000' },
// { name: 'Undrivable', color: '#808060' },
// { name: 'Movable', color: '#00ff66' },
// { name: 'My Car', color: '#cc00ff' },
// { name: 'Interior Movable', color: '#00ccff' }
  defaultImage: 'https://raw.githubusercontent.com/snooplsm/reported10k/master/imgs/0001_2023_11_03_14_07_53_501.jpg',
  defaultImageNumber: '0003',
  imageDirectory: 'https://raw.githubusercontent.com/snooplsm/reported10k/master/imgs/',
  image2Directory: 'https://raw.githubusercontent.com/snooplsm/reported10k/master/imgs2/',
  imagedDirectory: 'https://raw.githubusercontent.com/snooplsm/reported10k/master/imgsd/',
  imageDirectoryName: 'imgs',
  maskDirectoryName: 'masks'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
