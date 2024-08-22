import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/actions/languageAuth";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('fr')}>Français</button>
    </div>
  );
};

export default LanguageSwitcher;