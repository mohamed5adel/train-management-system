import  { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; 
// إنشاء Context
const LoginContext = createContext();

// إنشاء Provider لإدارة حالة الـ Login
export const LoginProvider = ({ children }) => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginVisible(prevState => !prevState);
  };

  return (
    <LoginContext.Provider value={{ isLoginVisible, toggleLoginModal }}>
      {children}
    </LoginContext.Provider>
  );
};
LoginProvider.propTypes = {
  children: PropTypes.node.isRequired, // تحديد أن `children` هو عنصر React
};


// هوك للوصول إلى الـ Context بسهولة في أي مكون
export const useLoginContext = () => useContext(LoginContext);
