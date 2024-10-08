
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/AppRoutes';

import { Box } from '@mui/material';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import messages_en from './locales/en.json';
import messages_fr from './locales/fr.json';

const messages = {
  en: messages_en,
  fr: messages_fr,
};

function App() {

  // <h1><FormattedMessage id="welcome" /></h1>
  const locale = useSelector((state) => state.language.locale) || 'en';
  return (
    <div>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router>
          <Box sx={{ display: 'flex' }}>
            <Navbar />


            <AppRoutes />
          </Box>

        </Router>
      </IntlProvider>
    </div>
  )
}

export default App
