import { Button } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/actions/languageAuth";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div>
      <h1><FormattedMessage id="welcome" /></h1>
      <Button variant="outlined" color="secondary" sx={{ mx: 3 }} onClick={() => handleLanguageChange('en')}>English</Button>
      <Button variant="outlined" color="secondary" onClick={() => handleLanguageChange('fr')}>Français</Button>
    </div>
  );
};

export default LanguageSwitcher;