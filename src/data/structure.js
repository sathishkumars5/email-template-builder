// export const structure = {
//   components:[
//  {
//     id: Math.floor(1000 + Math.random() * 9000),
//     type: "button",
//     content: 'Button',
//     style: {
//     color: 'white',
//     backgroundColor: 'blue'
//     }
//   },
//   {
//     id: Math.floor(1000 + Math.random() * 9000),
//     type:'text',
//     content: 'text',
//     style: {
//         color: 'black'
//     }
//   }
//   ],


// templetes:[
//   {
//     1: {
//       header: [
//         {
//             id: Math.floor(1000 + Math.random() * 9000),
//             type: 'img',
//             src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1TI5SEdhXCfEOOdKeuqohbW_EFUHEOqTiA&s', 
//             alt: 'Logo',
//             style: {
//               height: '70px', 
//               width: '70px'
//             }
//         },
//         {
        
//             id: Math.floor(1000 + Math.random() * 9000),
//             type:'text',
//             content: 'Email Template',
//             style: {
//               color: 'black',
//               textAlign:'center'
//             },

//             parentStyle:{

//             }
          
//         }
//       ],
//       headerStyle:{

//       },
//       Container: [
//         {
          
//             id: Math.floor(1000 + Math.random() * 9000),
//             type:'text',
//             content: 'Type your text',
//             style: {
//               color: 'black',
//               textAlign:'center'
//             }
          
//         },
//         {
          
//             id: Math.floor(1000 + Math.random() * 9000),
//             type: 'img',
//             src: 'https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_1280.png', 
//             alt: 'Any Image',
//             style: {
//               height: '100px',
//               width: '100px'
//             }
          
//         },
//         {
          
//             id: Math.floor(1000 + Math.random() * 9000),
//             type:'text',
//             content: 'Type your text',
//             style: {
//               color: 'black',
//               textAlign:'center'
//             }
          
//         },
//         {
//           id: Math.floor(1000 + Math.random() * 9000),
//           type: "button",
//           content: 'Button',
//           style: {
//           color: 'white',
//           backgroundColor: 'blue'
//           }
//         },
//       ],
//       footer: [
//         {
//             id: Math.floor(1000 + Math.random() * 9000),
//             type: 'text',
//             content: 'add Address or other details',
//             style: {
//               color: 'black'
//             }
//         },
//         {
//           id: Math.floor(1000 + Math.random() * 9000),
//           type: "button",
//           content: 'Button',
//           style: {
//           color: 'white',
//           backgroundColor: 'blue'
//           }
//         },
//       ]
//     }
//   }
// ] 
// };


export const structure = {
  components:[
    {
      id: Math.floor(1000 + Math.random() * 9000),
      type: "button",
      content: 'Button',
      style: {
        color: 'white',
        backgroundColor: 'blue'
      }
    },
    {
      id: Math.floor(1000 + Math.random() * 9000),
      type:'text',
      content: 'text',
      style: {
        color: 'black'
      }
    }
  ],

  templetes:[
    {
      1: {
        header: [
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type: 'img',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Leaf_icon.svg/2048px-Leaf_icon.svg.png', 
            alt: 'Logo',
            style: {
              height: '50px',
              width: '50px',
              margin:'auto'
            }
          },
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: 'Style Casual',
            style: {
              color: 'black',
              fontSize: '24px',
              textAlign: 'center'
              
            }
          }
        ],
        headerStyle:{
          //  backgroundColor: 'green',
          // width:"100%",
          // display:"flex",
          // alignItems:"center",
        },

        Container: [
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type: 'img',
            src: 'https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_1280.png', 
            alt: 'Email Icon',
            style: {
              height: '100px',
              width: '100px',
              margin: 'auto'
            }
          },
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: 'Confirm Your Email',
            style: {
              color: 'black',
              fontSize: '32px',
              fontWeight: 'bold',
              textAlign: 'center'
            }
          },
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: `You’ve received this message because your email address has been registered with our site. Please click the button below to verify your email address and confirm that you are the owner of this account.`,
            style: {
              color: 'black',
              textAlign: 'center'
            }
          },
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: `If you did not register with us, please disregard this email.`,
            style: {
              color: 'black',
              textAlign: 'center',
              marginTop: '10px'
            }
          },
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type: "button",
            content: 'CONFIRM YOUR EMAIL',
            style: {
              color: 'white',
              backgroundColor: '#3B82F6',
              padding: '10px 20px',
              borderRadius: '4px',
              textAlign: 'center',
              display: 'block',
              margin: '20px auto'
            }
          },
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: `Once confirmed, this email will be uniquely associated with your account.`,
            style: {
              color: 'black',
              textAlign: 'center'
            }
          }
        ],

        footer: [
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: `Style Casual © 2021 Style Casual, Inc. All Rights Reserved.<br>4562 Hazy Panda Limits, Chair Crossing, Kentucky, US, 607898`,
            style: {
              color: 'black',
              fontSize: '12px',
              textAlign: 'center'
            }
          },
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: `Visit Us | Privacy Policy | Terms of Use`,
            style: {
              color: 'black',
              fontSize: '12px',
              textAlign: 'center',
              marginTop: '10px'
            }
          }
        ]
      }
    }
  ]
};
