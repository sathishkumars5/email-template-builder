import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faImage} from '@fortawesome/free-solid-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faT} from '@fortawesome/free-solid-svg-icons';
// import {faRectangleWide} from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
{/* <FontAwesomeIcon icon="fa-solid fa-rectangle-wide" /> */}



export const structure = {
  components:[
    {
      id: Math.floor(1000 + Math.random() * 9000),
      type: "button",
      content: 'Button',
      icon:<FontAwesomeIcon icon={faRectangleList}/>,
      style: {
      color: "white",
      width: "87px",
      height: "30px",
      border: "2px solid black",
      backgroundColor: "blue",
      }
    },
    {
      id: Math.floor(1000 + Math.random() * 9000),
      type:'text',
       icon:<FontAwesomeIcon icon={faT}/>,
      content: 'text',
      style: {
        color: 'black'
      }
    },
     {
        id: Math.floor(1000 + Math.random() * 9000),
        type:'img',
        content: 'Upload a image',
        icon:<FontAwesomeIcon icon={faImage}/>,
        style: {
        color: 'black',
        backgroundColor: ' none'
    }
    },
     {
    id: Math.floor(1000 + Math.random() * 9000),
    type: "link",
    content: 'Add your Link',
    href:"",
    icon:<FontAwesomeIcon icon={faLink}/>,
    style: {
    color: 'black',
    backgroundColor: 'none'
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
            src: 'https://www.dckap.com/wp-content/uploads/2023/08/logo-full-color-no-slogan.svg', 
            alt: 'Logo',
            style: {
              height: '50px',
              width: '100px',
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
           backgroundColor: 'green',
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
            content:"You’ve received this message because your email address has been registered with our site. Please click the button below to verify your email address and confirm that you are the owner of this account.",
            style: {
              color: 'black',
              textAlign: 'center'
            }
          },
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: "If you did not register with us, please disregard this email.",
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
            content: "Once confirmed, this email will be uniquely associated with your account.",
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
            content: "Style Casual © 2021 Style Casual, Inc. All Rights Reserved.<br>4562 Hazy Panda Limits, Chair Crossing, Kentucky, US, 607898",
            style: {
              color: 'black',
              fontSize: '12px',
              textAlign: 'center'
            }
          },
          {
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content:" Visit Us | Privacy Policy | Terms of Use",
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