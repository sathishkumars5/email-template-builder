import { useEffect } from 'react';

const useHead = ({ title, description, keywords, author }) => {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }

    // Set meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }

    // Set meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }

    // Set meta author
    if (author) {
      let metaAuthor = document.querySelector('meta[name="author"]');
      if (metaAuthor) {
        metaAuthor.setAttribute('content', author);
      } else {
        metaAuthor = document.createElement('meta');
        metaAuthor.name = 'author';
        metaAuthor.content = author;
        document.head.appendChild(metaAuthor);
      }
    }

    // Add Open Graph tags for better social media sharing
    const setOGTag = (property, content) => {
      if (content) {
        let ogTag = document.querySelector(`meta[property="${property}"]`);
        if (ogTag) {
          ogTag.setAttribute('content', content);
        } else {
          ogTag = document.createElement('meta');
          ogTag.setAttribute('property', property);
          ogTag.setAttribute('content', content);
          document.head.appendChild(ogTag);
        }
      }
    };

    setOGTag('og:title', title);
    setOGTag('og:description', description);
    setOGTag('og:type', 'website');

  }, [title, description, keywords, author]);
};

export default useHead;
