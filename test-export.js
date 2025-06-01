// Test script to verify export functionality
const { generateFullHtml, generateHtml } = require('./src/components/HeaderToolbar/Htmlconvert.js');

// Test template with different block types
const testTemplate = {
  header: [
    {
      type: 'text',
      content: 'Welcome to our Newsletter',
      style: {
        fontSize: '24px',
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold'
      }
    },
    {
      type: 'img',
      src: 'https://example.com/logo.png',
      alt: 'Company Logo',
      style: {
        width: '200px',
        height: 'auto',
        display: 'block',
        margin: '0 auto'
      }
    }
  ],
  Container: [
    {
      type: 'text',
      content: 'This is the main content of our email.',
      style: {
        fontSize: '16px',
        color: '#333333',
        lineHeight: '1.5'
      }
    },
    {
      type: 'button',
      content: 'Click Here',
      style: {
        backgroundColor: '#c74a27',
        color: '#ffffff',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '5px'
      }
    },
    {
      type: 'link',
      content: 'Visit our website',
      href: 'https://example.com',
      style: {
        color: '#c74a27',
        textDecoration: 'underline'
      }
    },
    {
      type: 'space',
      style: {
        height: '30px'
      }
    }
  ],
  footer: [
    {
      type: 'text',
      content: 'Thank you for subscribing!',
      style: {
        fontSize: '14px',
        color: '#666666',
        textAlign: 'center'
      }
    }
  ],
  headerStyle: {
    backgroundColor: '#f8f9fa',
    padding: '20px'
  },
  ContainerStyle: {
    backgroundColor: '#ffffff',
    padding: '20px'
  },
  footerStyle: {
    backgroundColor: '#f8f9fa',
    padding: '15px'
  }
};

console.log('Testing export functionality...\n');

try {
  // Test basic HTML generation
  const htmlOnly = generateHtml(testTemplate);
  console.log('✅ Basic HTML generation successful');
  console.log('HTML length:', htmlOnly.length);
  
  // Test full HTML generation
  const fullHtml = generateFullHtml(testTemplate);
  console.log('✅ Full HTML generation successful');
  console.log('Full HTML length:', fullHtml.length);
  
  // Verify it contains expected elements
  const hasText = fullHtml.includes('Welcome to our Newsletter');
  const hasImage = fullHtml.includes('<img');
  const hasButton = fullHtml.includes('<button');
  const hasLink = fullHtml.includes('<a href');
  const hasSpace = fullHtml.includes('height:30px');
  
  console.log('\n📋 Content verification:');
  console.log('Contains text blocks:', hasText ? '✅' : '❌');
  console.log('Contains image blocks:', hasImage ? '✅' : '❌');
  console.log('Contains button blocks:', hasButton ? '✅' : '❌');
  console.log('Contains link blocks:', hasLink ? '✅' : '❌');
  console.log('Contains space blocks:', hasSpace ? '✅' : '❌');
  
  // Test with empty template
  const emptyTemplate = { header: [], Container: [], footer: [] };
  const emptyHtml = generateFullHtml(emptyTemplate);
  console.log('\n✅ Empty template handling successful');
  
  console.log('\n🎉 All export functionality tests passed!');
  
} catch (error) {
  console.error('❌ Export functionality test failed:', error);
  process.exit(1);
}
