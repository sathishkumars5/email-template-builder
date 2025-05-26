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
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1TI5SEdhXCfEOOdKeuqohbW_EFUHEOqTiA&s', 
            alt: 'Logo',
            style: {
              height: '100px', 
              width: '100px'
            }
        },
        {
        
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: 'Email Template',
            style: {
              color: 'black' 
            }
          
        }
      ],
      Container: [
        {
          
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: 'Type your text',
            style: {
              color: 'black'
            }
          
        },
        {
          
            id: Math.floor(1000 + Math.random() * 9000),
            type: 'img',
            src: 'https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_1280.png', 
            alt: 'Any Image',
            style: {
              height: '100px',
              width: '100px'
            }
          
        },
        {
          
            id: Math.floor(1000 + Math.random() * 9000),
            type:'text',
            content: 'Type your text',
            style: {
              color: 'black'
            }
          
        },
        {
          id: Math.floor(1000 + Math.random() * 9000),
          type: "button",
          content: 'Button',
          style: {
          color: 'white',
          backgroundColor: 'blue'
          }
        },
      ],
      footer: [
        {
            id: Math.floor(1000 + Math.random() * 9000),
            type: 'text',
            content: 'add Address or other details',
            style: {
              color: 'black'
            }
        },
        {
          id: Math.floor(1000 + Math.random() * 9000),
          type: "button",
          content: 'Button',
          style: {
          color: 'white',
          backgroundColor: 'blue'
          }
        },
      ]
    }
  }
] 
};

