var registerPromiseWorker = require('promise-worker/register');
console.log(registerPromiseWorker)

// const jsonDatabase = new Store({
//   configName: 'site-data',
//   defaults: {
//     site: {
//       "pages": [
//         {
//           "id": "index",
//           "title": "primo Page",
//           "content": [
//             {
//               "id": "0qodx",
//               "width": "contained",
//               "columns": [
//                 {
//                   "id": "00000",
//                   "size": "w-full",
//                   "rows": [
//                     {
//                       "id": "00000",
//                       "type": "content",
//                       "value": {
//                         "html": ""
//                       }
//                     }
//                   ]
//                 }
//               ]
//             }
//           ],
//           "dependencies": {
//             "headEmbed": "",
//             "libraries": []
//           },
//           "styles": {
//             "raw": "",
//             "final": "",
//             "tailwind": "{  theme: {    container: {      center: true    }  },  variants: {}}"
//           },
//           "wrapper": {
//             "raw": {
//               "head": "",
//               "above": "",
//               "below": ""
//             },
//             "final": {
//               "head": "",
//               "above": "",
//               "below": ""
//             }
//           },
//           "fields": [],
//           "settings": {
//             "javascript": "",
//             "identity": {
//               "title": "",
//               "url": "",
//               "description": ""
//             }
//           }
//         }
//       ],
//       "fields": [],
//       "styles": {
//         "raw": "/* Default content styles */\n.primo-content {\n  @apply text-lg;\n  h1 {\n    @apply text-3xl font-medium;\n  }\n  h2 {\n    @apply text-2xl font-medium;\n  }\n  ul {\n    @apply list-disc list-inside;\n    p {\n        @apply inline;\n    }\n  } \n  ol {\n    @apply list-decimal list-inside;\n  } \n  a {\n    @apply text-blue-600 underline;\n  }\n  blockquote {\n      @apply shadow-md p-6;\n  }\n  mark {\n    @apply text-gray-900 bg-yellow-200;\n  }\n  \n  @screen lg {\n    h1 {\n      @apply text-5xl;\n    }\n    h2 {\n      @apply text-4xl;\n    }\n  }\n}",
//         "final": "",
//         "tailwind": "{\n  theme: {\n    container: {\n      center: true\n    }\n  },\n  variants: {}\n}"
//       },
//       "wrapper": {
//         "raw": {
//           "head": "",
//           "above": "",
//           "below": ""
//         },
//         "final": {
//           "head": "",
//           "above": "",
//           "below": ""
//         }
//       },
//       "symbols": [
//       ]
//     }
//   }
// });

// const siteData = jsonDatabase.get('site')

registerPromiseWorker(async function(data) {
  // return jsonDatabase.get('site');
  return 'ok'
});