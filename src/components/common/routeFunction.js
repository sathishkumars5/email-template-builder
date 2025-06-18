import { replace } from "react-router-dom";

export const handleHomepage = (navigate) => {
  navigate('/homePage');
};

export const handleEditorPage = (navigate) => {
  navigate('/editor');
};

export const handleTemplates = (navigate) => {
  navigate('/templates');
};

export const handleShowPreview = (navigate) => {
    navigate('/preview')
}

export const handleLoginpage=(navigate)=>{
    navigate('/login')
}

export const handleSignUppage=(navigate)=>{
    navigate('/signup')
}

