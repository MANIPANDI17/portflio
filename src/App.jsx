// import React, { useState } from 'react';
// import './App.css'

// const LoginForm = () => {
//   // State variables to store input values
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const[age,setAge]=useState('');
//   const [error, setError] = useState('');

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation (you can expand this based on your needs)
//     if (username === '' || password === '') {
//       setError('Please fill in both fields');
//       return;
//     }

//     // Reset error and proceed with form submission (e.g., API call)
//     setError('');
//     alert(`Loging in with ${username}`);
//     // You can add further logic like API calls to authenticate the user here
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="age">Enter a age</label>
//           <input
//             type="date"
//             id="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             required
//           />
//         </div>
      
       
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit">Login</button>

//         <h2>Rigister Form !Login</h2>
//       </form>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <LoginForm />
//     </div>
//   );
// }

// export default App;


//////////////////mui code////////////////

// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';

// export default function Playground() {
//   const defaultProps = {
//     options: top100Films,
//     getOptionLabel: (option) => option.title,
//   };
//   const flatProps = {
//     options: top100Films.map((option) => option.title),
//   };
//   const [value, setValue] = React.useState(null);

//   return (
//     <Stack spacing={1} sx={{ width: 300 }}>
//       <Autocomplete
//         {...defaultProps}
//         id="disable-close-on-select"
//         disableCloseOnSelect
//         renderInput={(params) => (
//           <TextField {...params} label="disableCloseOnSelect" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="clear-on-escape"
//         clearOnEscape
//         renderInput={(params) => (
//           <TextField {...params} label="clearOnEscape" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="disable-clearable"
//         disableClearable
//         renderInput={(params) => (
//           <TextField {...params} label="disableClearable" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="include-input-in-list"
//         includeInputInList
//         renderInput={(params) => (
//           <TextField {...params} label="includeInputInList" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...flatProps}
//         id="flat-demo"
//         renderInput={(params) => (
//           <TextField {...params} label="flat" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="controlled-demo"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => (
//           <TextField {...params} label="controlled" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="auto-complete"
//         autoComplete
//         includeInputInList
//         renderInput={(params) => (
//           <TextField {...params} label="autoComplete" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="disable-list-wrap"
//         disableListWrap
//         renderInput={(params) => (
//           <TextField {...params} label="disableListWrap" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="open-on-focus"
//         openOnFocus
//         renderInput={(params) => (
//           <TextField {...params} label="openOnFocus" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="auto-highlight"
//         autoHighlight
//         renderInput={(params) => (
//           <TextField {...params} label="autoHighlight" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="auto-select"
//         autoSelect
//         renderInput={(params) => (
//           <TextField {...params} label="autoSelect" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="disabled"
//         disabled
//         renderInput={(params) => (
//           <TextField {...params} label="disabled" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="disable-portal"
//         disablePortal
//         renderInput={(params) => (
//           <TextField {...params} label="disablePortal" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="blur-on-select"
//         blurOnSelect
//         renderInput={(params) => (
//           <TextField {...params} label="blurOnSelect" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="clear-on-blur"
//         clearOnBlur
//         renderInput={(params) => (
//           <TextField {...params} label="clearOnBlur" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="select-on-focus"
//         selectOnFocus
//         renderInput={(params) => (
//           <TextField {...params} label="selectOnFocus" variant="standard" />
//         )}
//       />
//       <Autocomplete
//         {...flatProps}
//         id="readOnly"
//         readOnly
//         defaultValue={flatProps.options[13]}
//         renderInput={(params) => (
//           <TextField {...params} label="readOnly" variant="standard" />
//         )}
//       />
//     </Stack>
//   );
// }

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//   },
//   { title: 'The Good, the Bad and the Ugly', year: 1966 },
//   { title: 'Fight Club', year: 1999 },
//   {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001,
//   },
//   {
//     title: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980,
//   },
//   { title: 'Forrest Gump', year: 1994 },
//   { title: 'Inception', year: 2010 },
//   {
//     title: 'The Lord of the Rings: The Two Towers',
//     year: 2002,
//   },
//   { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { title: 'Goodfellas', year: 1990 },
//   { title: 'The Matrix', year: 1999 },
//   { title: 'Seven Samurai', year: 1954 },
//   {
//     title: 'Star Wars: Episode IV - A New Hope',
//     year: 1977,
//   },
//   { title: 'City of God', year: 2002 },
//   { title: 'Se7en', year: 1995 },
//   { title: 'The Silence of the Lambs', year: 1991 },
//   { title: "It's a Wonderful Life", year: 1946 },
//   { title: 'Life Is Beautiful', year: 1997 },
//   { title: 'The Usual Suspects', year: 1995 },
//   { title: 'Léon: The Professional', year: 1994 },
//   { title: 'Spirited Away', year: 2001 },
//   { title: 'Saving Private Ryan', year: 1998 },
//   { title: 'Once Upon a Time in the West', year: 1968 },
//   { title: 'American History X', year: 1998 },
//   { title: 'Interstellar', year: 2014 },
//   { title: 'Casablanca', year: 1942 },
//   { title: 'City Lights', year: 1931 },
//   { title: 'Psycho', year: 1960 },
//   { title: 'The Green Mile', year: 1999 },
//   { title: 'The Intouchables', year: 2011 },
//   { title: 'Modern Times', year: 1936 },
//   { title: 'Raiders of the Lost Ark', year: 1981 },
//   { title: 'Rear Window', year: 1954 },
//   { title: 'The Pianist', year: 2002 },
//   { title: 'The Departed', year: 2006 },
//   { title: 'Terminator 2: Judgment Day', year: 1991 },
//   { title: 'Back to the Future', year: 1985 },
//   { title: 'Whiplash', year: 2014 },
//   { title: 'Gladiator', year: 2000 },
//   { title: 'Memento', year: 2000 },
//   { title: 'The Prestige', year: 2006 },
//   { title: 'The Lion King', year: 1994 },
//   { title: 'Apocalypse Now', year: 1979 },
//   { title: 'Alien', year: 1979 },
//   { title: 'Sunset Boulevard', year: 1950 },
//   {
//     title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//     year: 1964,
//   },
//   { title: 'The Great Dictator', year: 1940 },
//   { title: 'Cinema Paradiso', year: 1988 },
//   { title: 'The Lives of Others', year: 2006 },
//   { title: 'Grave of the Fireflies', year: 1988 },
//   { title: 'Paths of Glory', year: 1957 },
//   { title: 'Django Unchained', year: 2012 },
//   { title: 'The Shining', year: 1980 },
//   { title: 'WALL·E', year: 2008 },
//   { title: 'American Beauty', year: 1999 },
//   { title: 'The Dark Knight Rises', year: 2012 },
//   { title: 'Princess Mononoke', year: 1997 },
//   { title: 'Aliens', year: 1986 },
//   { title: 'Oldboy', year: 2003 },
//   { title: 'Once Upon a Time in America', year: 1984 },
//   { title: 'Witness for the Prosecution', year: 1957 },
//   { title: 'Das Boot', year: 1981 },
//   { title: 'Citizen Kane', year: 1941 },
//   { title: 'North by Northwest', year: 1959 },
//   { title: 'Vertigo', year: 1958 },
//   {
//     title: 'Star Wars: Episode VI - Return of the Jedi',
//     year: 1983,
//   },
//   { title: 'Reservoir Dogs', year: 1992 },
//   { title: 'Braveheart', year: 1995 },
//   { title: 'M', year: 1931 },
//   { title: 'Requiem for a Dream', year: 2000 },
//   { title: 'Amélie', year: 2001 },
//   { title: 'A Clockwork Orange', year: 1971 },
//   { title: 'Like Stars on Earth', year: 2007 },
//   { title: 'Taxi Driver', year: 1976 },
//   { title: 'Lawrence of Arabia', year: 1962 },
//   { title: 'Double Indemnity', year: 1944 },
//   {
//     title: 'Eternal Sunshine of the Spotless Mind',
//     year: 2004,
//   },
//   { title: 'Amadeus', year: 1984 },
//   { title: 'To Kill a Mockingbird', year: 1962 },
//   { title: 'Toy Story 3', year: 2010 },
//   { title: 'Logan', year: 2017 },
//   { title: 'Full Metal Jacket', year: 1987 },
//   { title: 'Dangal', year: 2016 },
//   { title: 'The Sting', year: 1973 },
//   { title: '2001: A Space Odyssey', year: 1968 },
//   { title: "Singin' in the Rain", year: 1952 },
//   { title: 'Toy Story', year: 1995 },
//   { title: 'Bicycle Thieves', year: 1948 },
//   { title: 'The Kid', year: 1921 },
//   { title: 'Inglourious Basterds', year: 2009 },
//   { title: 'Snatch', year: 2000 },
//   { title: '3 Idiots', year: 2009 },
//   { title: 'Monty Python and the Holy Grail', year: 1975 },
// ];

//////////////country code////////////////////////
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// export default function CountrySelect() {
//   return (
//     <Autocomplete
//       id="country-select-demo"
//       sx={{ width: 300 }}
//       options={countries}
//       autoHighlight
//       getOptionLabel={(option) => option.label}
//       renderOption={(props, option) => {
//         const { key, ...optionProps } = props;
//         return (
//           <Box
//             key={key}
//             component="li"
//             sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
//             {...optionProps}
//           >
//             <img
//               loading="lazy"
//               width="20"
//               srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
//               src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
//               alt=""
//             />
//             {option.label} ({option.code}) +{option.phone}
//           </Box>
//         );
//       }}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Choose a country"
//           slotProps={{
//             htmlInput: {
//               ...params.inputProps,
//               autoComplete: 'new-password', // disable autocomplete and autofill
//             },
//           }}
//         />
//       )}
//     />
//   );
// }

// // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
// const countries = [
//   { code: 'AD', label: 'Andorra', phone: '376' },
//   {
//     code: 'AE',
//     label: 'United Arab Emirates',
//     phone: '971',
//   },
//   { code: 'AF', label: 'Afghanistan', phone: '93' },
//   {
//     code: 'AG',
//     label: 'Antigua and Barbuda',
//     phone: '1-268',
//   },
//   { code: 'AI', label: 'Anguilla', phone: '1-264' },
//   { code: 'AL', label: 'Albania', phone: '355' },
//   { code: 'AM', label: 'Armenia', phone: '374' },
//   { code: 'AO', label: 'Angola', phone: '244' },
//   { code: 'AQ', label: 'Antarctica', phone: '672' },
//   { code: 'AR', label: 'Argentina', phone: '54' },
//   { code: 'AS', label: 'American Samoa', phone: '1-684' },
//   { code: 'AT', label: 'Austria', phone: '43' },
//   {
//     code: 'AU',
//     label: 'Australia',
//     phone: '61',
//     suggested: true,
//   },
//   { code: 'AW', label: 'Aruba', phone: '297' },
//   { code: 'AX', label: 'Alland Islands', phone: '358' },
//   { code: 'AZ', label: 'Azerbaijan', phone: '994' },
//   {
//     code: 'BA',
//     label: 'Bosnia and Herzegovina',
//     phone: '387',
//   },
//   { code: 'BB', label: 'Barbados', phone: '1-246' },
//   { code: 'BD', label: 'Bangladesh', phone: '880' },
//   { code: 'BE', label: 'Belgium', phone: '32' },
//   { code: 'BF', label: 'Burkina Faso', phone: '226' },
//   { code: 'BG', label: 'Bulgaria', phone: '359' },
//   { code: 'BH', label: 'Bahrain', phone: '973' },
//   { code: 'BI', label: 'Burundi', phone: '257' },
//   { code: 'BJ', label: 'Benin', phone: '229' },
//   { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
//   { code: 'BM', label: 'Bermuda', phone: '1-441' },
//   { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
//   { code: 'BO', label: 'Bolivia', phone: '591' },
//   { code: 'BR', label: 'Brazil', phone: '55' },
//   { code: 'BS', label: 'Bahamas', phone: '1-242' },
//   { code: 'BT', label: 'Bhutan', phone: '975' },
//   { code: 'BV', label: 'Bouvet Island', phone: '47' },
//   { code: 'BW', label: 'Botswana', phone: '267' },
//   { code: 'BY', label: 'Belarus', phone: '375' },
//   { code: 'BZ', label: 'Belize', phone: '501' },
//   {
//     code: 'CA',
//     label: 'Canada',
//     phone: '1',
//     suggested: true,
//   },
//   {
//     code: 'CC',
//     label: 'Cocos (Keeling) Islands',
//     phone: '61',
//   },
//   {
//     code: 'CD',
//     label: 'Congo, Democratic Republic of the',
//     phone: '243',
//   },
//   {
//     code: 'CF',
//     label: 'Central African Republic',
//     phone: '236',
//   },
//   {
//     code: 'CG',
//     label: 'Congo, Republic of the',
//     phone: '242',
//   },
//   { code: 'CH', label: 'Switzerland', phone: '41' },
//   { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
//   { code: 'CK', label: 'Cook Islands', phone: '682' },
//   { code: 'CL', label: 'Chile', phone: '56' },
//   { code: 'CM', label: 'Cameroon', phone: '237' },
//   { code: 'CN', label: 'China', phone: '86' },
//   { code: 'CO', label: 'Colombia', phone: '57' },
//   { code: 'CR', label: 'Costa Rica', phone: '506' },
//   { code: 'CU', label: 'Cuba', phone: '53' },
//   { code: 'CV', label: 'Cape Verde', phone: '238' },
//   { code: 'CW', label: 'Curacao', phone: '599' },
//   { code: 'CX', label: 'Christmas Island', phone: '61' },
//   { code: 'CY', label: 'Cyprus', phone: '357' },
//   { code: 'CZ', label: 'Czech Republic', phone: '420' },
//   {
//     code: 'DE',
//     label: 'Germany',
//     phone: '49',
//     suggested: true,
//   },
//   { code: 'DJ', label: 'Djibouti', phone: '253' },
//   { code: 'DK', label: 'Denmark', phone: '45' },
//   { code: 'DM', label: 'Dominica', phone: '1-767' },
//   {
//     code: 'DO',
//     label: 'Dominican Republic',
//     phone: '1-809',
//   },
//   { code: 'DZ', label: 'Algeria', phone: '213' },
//   { code: 'EC', label: 'Ecuador', phone: '593' },
//   { code: 'EE', label: 'Estonia', phone: '372' },
//   { code: 'EG', label: 'Egypt', phone: '20' },
//   { code: 'EH', label: 'Western Sahara', phone: '212' },
//   { code: 'ER', label: 'Eritrea', phone: '291' },
//   { code: 'ES', label: 'Spain', phone: '34' },
//   { code: 'ET', label: 'Ethiopia', phone: '251' },
//   { code: 'FI', label: 'Finland', phone: '358' },
//   { code: 'FJ', label: 'Fiji', phone: '679' },
//   {
//     code: 'FK',
//     label: 'Falkland Islands (Malvinas)',
//     phone: '500',
//   },
//   {
//     code: 'FM',
//     label: 'Micronesia, Federated States of',
//     phone: '691',
//   },
//   { code: 'FO', label: 'Faroe Islands', phone: '298' },
//   {
//     code: 'FR',
//     label: 'France',
//     phone: '33',
//     suggested: true,
//   },
//   { code: 'GA', label: 'Gabon', phone: '241' },
//   { code: 'GB', label: 'United Kingdom', phone: '44' },
//   { code: 'GD', label: 'Grenada', phone: '1-473' },
//   { code: 'GE', label: 'Georgia', phone: '995' },
//   { code: 'GF', label: 'French Guiana', phone: '594' },
//   { code: 'GG', label: 'Guernsey', phone: '44' },
//   { code: 'GH', label: 'Ghana', phone: '233' },
//   { code: 'GI', label: 'Gibraltar', phone: '350' },
//   { code: 'GL', label: 'Greenland', phone: '299' },
//   { code: 'GM', label: 'Gambia', phone: '220' },
//   { code: 'GN', label: 'Guinea', phone: '224' },
//   { code: 'GP', label: 'Guadeloupe', phone: '590' },
//   { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
//   { code: 'GR', label: 'Greece', phone: '30' },
//   {
//     code: 'GS',
//     label: 'South Georgia and the South Sandwich Islands',
//     phone: '500',
//   },
//   { code: 'GT', label: 'Guatemala', phone: '502' },
//   { code: 'GU', label: 'Guam', phone: '1-671' },
//   { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
//   { code: 'GY', label: 'Guyana', phone: '592' },
//   { code: 'HK', label: 'Hong Kong', phone: '852' },
//   {
//     code: 'HM',
//     label: 'Heard Island and McDonald Islands',
//     phone: '672',
//   },
//   { code: 'HN', label: 'Honduras', phone: '504' },
//   { code: 'HR', label: 'Croatia', phone: '385' },
//   { code: 'HT', label: 'Haiti', phone: '509' },
//   { code: 'HU', label: 'Hungary', phone: '36' },
//   { code: 'ID', label: 'Indonesia', phone: '62' },
//   { code: 'IE', label: 'Ireland', phone: '353' },
//   { code: 'IL', label: 'Israel', phone: '972' },
//   { code: 'IM', label: 'Isle of Man', phone: '44' },
//   { code: 'IN', label: 'India', phone: '91' },
//   {
//     code: 'IO',
//     label: 'British Indian Ocean Territory',
//     phone: '246',
//   },
//   { code: 'IQ', label: 'Iraq', phone: '964' },
//   {
//     code: 'IR',
//     label: 'Iran, Islamic Republic of',
//     phone: '98',
//   },
//   { code: 'IS', label: 'Iceland', phone: '354' },
//   { code: 'IT', label: 'Italy', phone: '39' },
//   { code: 'JE', label: 'Jersey', phone: '44' },
//   { code: 'JM', label: 'Jamaica', phone: '1-876' },
//   { code: 'JO', label: 'Jordan', phone: '962' },
//   {
//     code: 'JP',
//     label: 'Japan',
//     phone: '81',
//     suggested: true,
//   },
//   { code: 'KE', label: 'Kenya', phone: '254' },
//   { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
//   { code: 'KH', label: 'Cambodia', phone: '855' },
//   { code: 'KI', label: 'Kiribati', phone: '686' },
//   { code: 'KM', label: 'Comoros', phone: '269' },
//   {
//     code: 'KN',
//     label: 'Saint Kitts and Nevis',
//     phone: '1-869',
//   },
//   {
//     code: 'KP',
//     label: "Korea, Democratic People's Republic of",
//     phone: '850',
//   },
//   { code: 'KR', label: 'Korea, Republic of', phone: '82' },
//   { code: 'KW', label: 'Kuwait', phone: '965' },
//   { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
//   { code: 'KZ', label: 'Kazakhstan', phone: '7' },
//   {
//     code: 'LA',
//     label: "Lao People's Democratic Republic",
//     phone: '856',
//   },
//   { code: 'LB', label: 'Lebanon', phone: '961' },
//   { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
//   { code: 'LI', label: 'Liechtenstein', phone: '423' },
//   { code: 'LK', label: 'Sri Lanka', phone: '94' },
//   { code: 'LR', label: 'Liberia', phone: '231' },
//   { code: 'LS', label: 'Lesotho', phone: '266' },
//   { code: 'LT', label: 'Lithuania', phone: '370' },
//   { code: 'LU', label: 'Luxembourg', phone: '352' },
//   { code: 'LV', label: 'Latvia', phone: '371' },
//   { code: 'LY', label: 'Libya', phone: '218' },
//   { code: 'MA', label: 'Morocco', phone: '212' },
//   { code: 'MC', label: 'Monaco', phone: '377' },
//   {
//     code: 'MD',
//     label: 'Moldova, Republic of',
//     phone: '373',
//   },
//   { code: 'ME', label: 'Montenegro', phone: '382' },
//   {
//     code: 'MF',
//     label: 'Saint Martin (French part)',
//     phone: '590',
//   },
//   { code: 'MG', label: 'Madagascar', phone: '261' },
//   { code: 'MH', label: 'Marshall Islands', phone: '692' },
//   {
//     code: 'MK',
//     label: 'Macedonia, the Former Yugoslav Republic of',
//     phone: '389',
//   },
//   { code: 'ML', label: 'Mali', phone: '223' },
//   { code: 'MM', label: 'Myanmar', phone: '95' },
//   { code: 'MN', label: 'Mongolia', phone: '976' },
//   { code: 'MO', label: 'Macao', phone: '853' },
//   {
//     code: 'MP',
//     label: 'Northern Mariana Islands',
//     phone: '1-670',
//   },
//   { code: 'MQ', label: 'Martinique', phone: '596' },
//   { code: 'MR', label: 'Mauritania', phone: '222' },
//   { code: 'MS', label: 'Montserrat', phone: '1-664' },
//   { code: 'MT', label: 'Malta', phone: '356' },
//   { code: 'MU', label: 'Mauritius', phone: '230' },
//   { code: 'MV', label: 'Maldives', phone: '960' },
//   { code: 'MW', label: 'Malawi', phone: '265' },
//   { code: 'MX', label: 'Mexico', phone: '52' },
//   { code: 'MY', label: 'Malaysia', phone: '60' },
//   { code: 'MZ', label: 'Mozambique', phone: '258' },
//   { code: 'NA', label: 'Namibia', phone: '264' },
//   { code: 'NC', label: 'New Caledonia', phone: '687' },
//   { code: 'NE', label: 'Niger', phone: '227' },
//   { code: 'NF', label: 'Norfolk Island', phone: '672' },
//   { code: 'NG', label: 'Nigeria', phone: '234' },
//   { code: 'NI', label: 'Nicaragua', phone: '505' },
//   { code: 'NL', label: 'Netherlands', phone: '31' },
//   { code: 'NO', label: 'Norway', phone: '47' },
//   { code: 'NP', label: 'Nepal', phone: '977' },
//   { code: 'NR', label: 'Nauru', phone: '674' },
//   { code: 'NU', label: 'Niue', phone: '683' },
//   { code: 'NZ', label: 'New Zealand', phone: '64' },
//   { code: 'OM', label: 'Oman', phone: '968' },
//   { code: 'PA', label: 'Panama', phone: '507' },
//   { code: 'PE', label: 'Peru', phone: '51' },
//   { code: 'PF', label: 'French Polynesia', phone: '689' },
//   { code: 'PG', label: 'Papua New Guinea', phone: '675' },
//   { code: 'PH', label: 'Philippines', phone: '63' },
//   { code: 'PK', label: 'Pakistan', phone: '92' },
//   { code: 'PL', label: 'Poland', phone: '48' },
//   {
//     code: 'PM',
//     label: 'Saint Pierre and Miquelon',
//     phone: '508',
//   },
//   { code: 'PN', label: 'Pitcairn', phone: '870' },
//   { code: 'PR', label: 'Puerto Rico', phone: '1' },
//   {
//     code: 'PS',
//     label: 'Palestine, State of',
//     phone: '970',
//   },
//   { code: 'PT', label: 'Portugal', phone: '351' },
//   { code: 'PW', label: 'Palau', phone: '680' },
//   { code: 'PY', label: 'Paraguay', phone: '595' },
//   { code: 'QA', label: 'Qatar', phone: '974' },
//   { code: 'RE', label: 'Reunion', phone: '262' },
//   { code: 'RO', label: 'Romania', phone: '40' },
//   { code: 'RS', label: 'Serbia', phone: '381' },
//   { code: 'RU', label: 'Russian Federation', phone: '7' },
//   { code: 'RW', label: 'Rwanda', phone: '250' },
//   { code: 'SA', label: 'Saudi Arabia', phone: '966' },
//   { code: 'SB', label: 'Solomon Islands', phone: '677' },
//   { code: 'SC', label: 'Seychelles', phone: '248' },
//   { code: 'SD', label: 'Sudan', phone: '249' },
//   { code: 'SE', label: 'Sweden', phone: '46' },
//   { code: 'SG', label: 'Singapore', phone: '65' },
//   { code: 'SH', label: 'Saint Helena', phone: '290' },
//   { code: 'SI', label: 'Slovenia', phone: '386' },
//   {
//     code: 'SJ',
//     label: 'Svalbard and Jan Mayen',
//     phone: '47',
//   },
//   { code: 'SK', label: 'Slovakia', phone: '421' },
//   { code: 'SL', label: 'Sierra Leone', phone: '232' },
//   { code: 'SM', label: 'San Marino', phone: '378' },
//   { code: 'SN', label: 'Senegal', phone: '221' },
//   { code: 'SO', label: 'Somalia', phone: '252' },
//   { code: 'SR', label: 'Suriname', phone: '597' },
//   { code: 'SS', label: 'South Sudan', phone: '211' },
//   {
//     code: 'ST',
//     label: 'Sao Tome and Principe',
//     phone: '239',
//   },
//   { code: 'SV', label: 'El Salvador', phone: '503' },
//   {
//     code: 'SX',
//     label: 'Sint Maarten (Dutch part)',
//     phone: '1-721',
//   },
//   {
//     code: 'SY',
//     label: 'Syrian Arab Republic',
//     phone: '963',
//   },
//   { code: 'SZ', label: 'Swaziland', phone: '268' },
//   {
//     code: 'TC',
//     label: 'Turks and Caicos Islands',
//     phone: '1-649',
//   },
//   { code: 'TD', label: 'Chad', phone: '235' },
//   {
//     code: 'TF',
//     label: 'French Southern Territories',
//     phone: '262',
//   },
//   { code: 'TG', label: 'Togo', phone: '228' },
//   { code: 'TH', label: 'Thailand', phone: '66' },
//   { code: 'TJ', label: 'Tajikistan', phone: '992' },
//   { code: 'TK', label: 'Tokelau', phone: '690' },
//   { code: 'TL', label: 'Timor-Leste', phone: '670' },
//   { code: 'TM', label: 'Turkmenistan', phone: '993' },
//   { code: 'TN', label: 'Tunisia', phone: '216' },
//   { code: 'TO', label: 'Tonga', phone: '676' },
//   { code: 'TR', label: 'Turkey', phone: '90' },
//   {
//     code: 'TT',
//     label: 'Trinidad and Tobago',
//     phone: '1-868',
//   },
//   { code: 'TV', label: 'Tuvalu', phone: '688' },
//   {
//     code: 'TW',
//     label: 'Taiwan',
//     phone: '886',
//   },
//   {
//     code: 'TZ',
//     label: 'United Republic of Tanzania',
//     phone: '255',
//   },
//   { code: 'UA', label: 'Ukraine', phone: '380' },
//   { code: 'UG', label: 'Uganda', phone: '256' },
//   {
//     code: 'US',
//     label: 'United States',
//     phone: '1',
//     suggested: true,
//   },
//   { code: 'UY', label: 'Uruguay', phone: '598' },
//   { code: 'UZ', label: 'Uzbekistan', phone: '998' },
//   {
//     code: 'VA',
//     label: 'Holy See (Vatican City State)',
//     phone: '379',
//   },
//   {
//     code: 'VC',
//     label: 'Saint Vincent and the Grenadines',
//     phone: '1-784',
//   },
//   { code: 'VE', label: 'Venezuela', phone: '58' },
//   {
//     code: 'VG',
//     label: 'British Virgin Islands',
//     phone: '1-284',
//   },
//   {
//     code: 'VI',
//     label: 'US Virgin Islands',
//     phone: '1-340',
//   },
//   { code: 'VN', label: 'Vietnam', phone: '84' },
//   { code: 'VU', label: 'Vanuatu', phone: '678' },
//   { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
//   { code: 'WS', label: 'Samoa', phone: '685' },
//   { code: 'XK', label: 'Kosovo', phone: '383' },
//   { code: 'YE', label: 'Yemen', phone: '967' },
//   { code: 'YT', label: 'Mayotte', phone: '262' },
//   { code: 'ZA', label: 'South Africa', phone: '27' },
//   { code: 'ZM', label: 'Zambia', phone: '260' },
//   { code: 'ZW', label: 'Zimbabwe', phone: '263' },
// ];

////////////////////rating code////////////////////////
// import * as React from 'react';
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

// export default function HoverRating() {
//   const [value, setValue] = React.useState(2);
//   const [hover, setHover] = React.useState(-1);

//   return (
//     <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
//       <Rating
//         name="hover-feedback"
//         value={value}
//         precision={0.5}
//         getLabelText={getLabelText}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//       />
//       {value !== null && (
//         <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//       )}
//     </Box>
//   );
// }
// src/App.js
// /////////////////student form////////////////////////////////////////////////////////////////////////
// import React from "react";
// import "./App.css";
// import StudentRegistrationForm from "./studentrgform";

// function App() {
//   return (
//     <div className="App">
//       <StudentRegistrationForm />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import CarList from './carlist';
// import CarDetails from './cardetails';

// function App() {
//   const [selectedCar, setSelectedCar] = useState(null);

//   const cars = [
//     { id: 1, name: "Toyota Corolla", year: 2021, description: "A compact car with excellent fuel efficiency." },
//     { id: 2, name: "Honda Civic", year: 2022, description: "A stylish and reliable sedan with modern features." },
//     { id: 3, name: "Ford Mustang", year: 2020, description: "An iconic American muscle car with powerful performance." },
//     { id: 4, name: "Tesla Model S", year: 2023, description: "An electric luxury car with advanced tech." },
//   ];

//   return (
//     <div className="App">
//       <header>
//         <h1>Car Showcase</h1>
//       </header>
//       <main>
//         <CarList cars={cars} setSelectedCar={setSelectedCar} />
//         {selectedCar && <CarDetails car={selectedCar} />}
//       </main>
//     </div>
//   );
// }

// export default App;

/////////////////bike web////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import './App.css';
// import BikeList from './bikelist';
// import BikeDetails from './bikedetails';

// function App() {
//   const [selectedBike, setSelectedBike] = useState(null);

//   const bikes = [
//     { id: 1, name: "Mountain Bike", year: 2022, description: "A bike built for rough terrain with large knobby tires.",order:"successfully!" },
//     { id: 2, name: "Road Bike", year: 2023, description: "A lightweight bike designed for speed on paved roads.",order:"successfully!" },
//     { id: 3, name: "Hybrid Bike", year: 2021, description: "A versatile bike designed for both road and off-road use.",order:"successfully!" },
//     { id: 4, name: "Electric Bike", year: 2024, description: "A bike with an integrated electric motor for easier pedaling.",order:"successfully!" },
//     { id: 5, name:"NS200 Bike",     year:2020,  description:"jnwjnfwnijfnjefjnwnjnjnjnjnj",order:"successfully!"}
// ];

//   return (
//     <div className="App">
//       <header>
//         <h1>Bike Showcase</h1>
//       </header>
//       <main>
//         <BikeList bikes={bikes} setSelectedBike={setSelectedBike} />
//         {selectedBike && <BikeDetails bike={selectedBike} />}
//       </main>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import TourList from './tourlist';
// import TourDetails from './tourdetails';

// function App() {
//   const [selectedTour, setSelectedTour] = useState();

//   const tours = [
//     {
//       id: 1,
//       name: "Paris Adventure",
//       location: "Paris",
//       description: "Explore the city of lights with this exciting tour!",
//       },
//     {
//       id: 2,
//       name: "Safari in Kenya",
//       location: "Kenya",
//       description: "Go on a thrilling safari in the heart of Africa.",
//      },
//     {
//       id: 3,
//       name: "Mediterranean Cruise",
//       location: "Mediterranean",
//       description: "Enjoy luxurious cruising across the Mediterranean Sea.",
//       },
//     {
//       id: 4,
//       name: "Hiking in the Alps",
//       location: "Alps",
//       description: "Trek through the beautiful mountain range of the Alps.",
//      },
//   ];

//   return (
//     <div className="App">
//       <header>
//         <h1>Tour Showcase</h1>
//       </header>
//       <main>
//         <TourList tours={tours} setSelectedTour={setSelectedTour} />
//         {selectedTour && <TourDetails tour={selectedTour} />}
//       </main>
//     </div>
//   );
// }

// export default App;


// ///landing page//////////////////////////////
// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div className="App">
//       <header className="header">
//         <h1>Welcome to Our Landing Page</h1>
//         <p>We have amazing offers for you!</p>
//         <button onClick={toggleModal}>Show More</button>
//       </header>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Special Offer</h2>
//             <p>Exclusive deals just for you! Don't miss out on these amazing discounts.</p>
//             <button onClick={toggleModal}>Close</button>
//           </div>
//         </div>
//       )}

//       <footer className="footer">
//         <p>&copy; 2025 Landing Page. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

///////landing web page

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import './App.css';
// import Home from './components/home';
// import About from './components/about';
// import Contact from './components/contact';
// import Header from './components/header';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

////use effect
 
// import React, { useState, useEffect } from "react";

// function FetchDataExample() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // useEffect will run when the component mounts
//   useEffect(() => {
//     // Fetching data from an example API
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);  // Set the fetched data to state
//         setLoading(false);  // Set loading to false when data is fetched
//       })
//       .catch((error) => {
//         setError(error);  // If an error occurs, set error state
//         setLoading(false);  // Also set loading to false in case of error
//       });
//   }, []);  // Empty dependency array means this effect runs once when the component mounts

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h2>Fetched Posts</h2>
//       <ul>
//         {data.slice(1, 2).map((post) => (  // Limit to the first 5 posts
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FetchDataExample;

/////////////////useeffect

// import { useEffect, useState } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);
  

//   useEffect(() => {
//     console.log(`Count has changed to: ${count}`);
//   }, [count]); 

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count+ 1)}>Increment</button>
      
//     </div>
    
//   );
// }
// export default MyComponent;
// /////////////////////////////////////////////////////////////////////
// import { useEffect } from 'react';

// function TimerComponent() {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log('Timer running');
//     }, 2000);

//     // Cleanup function
//     return () => {
//       clearInterval(timer); // Stops the timer when the component unmounts
//       console.log('Timer cleaned up');
//     };
//   }, []);

//   return <div>Timer is running...</div>;
// }
// export default TimerComponent;
// import { useEffect } from 'react';

// function MyComponent() {
//   useEffect(() => {
//     console.log('Component mounted');
//   }, );

//   return <div>My Component</div>;
// }
// export default MyComponent;

// import { useState, useEffect } from 'react';
// import { fetchBio } from './api.js';

// export default function Page() {
//   const [person, setPerson] = useState('Alice');
//   const [bio, setBio] = useState(null);
//   useEffect(() => {
//     let ignore = false;
//     setBio(null);
//     fetchBio(person).then(result => {
//       if (!ignore) {
//         setBio(result);
//       }
//     });
//     return () => {
//       ignore = true;
//     }
//   }, [person]);

//   return (
//     <>
//       <select value={person} onChange={e => {
//         setPerson(e.target.value);
//       }}>
//         <option value="Alice">Alice</option>
//         <option value="Bob">Bob</option>
//         <option value="Taylor">Taylor</option>
//         <option value="rock">rock</option>
//       </select>
//       <hr />
//       <p><i>{bio ?? 'Loading...'}</i></p>
//     </>
//   );
// }
//////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState('https://localhost:1200');
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => {
//       connection.disconnect();
//     };
//   }, [serverUrl, roomId]);
//   useEffect(()=>{
//     const connection=createConnection(serverUrl,roomId);
//     connection.connect();
//     return()=>{
//         connection.pending();
//     };
//   },[serverUrl,roomId]);

//   return (
//     <>
//       <label>
//         Server URL:{' '}
//         <input
//           value={serverUrl}
//           onChange={e => setServerUrl(e.target.value)}
//         />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
//       <form onSubmit={setServerUrl}>
//       <label>
//         Your message:{' '}
//         <input 
//           type="text" 
//           value={message} 
//           onChange={e => setMessage(e.target.value)} 
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//     </>
//   );
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   const [roomId, setRoomId] = useState('general');
//   return (
//     <>
//       <label>
//         Choose the chat room:{' '},
//         <img src="public\img\img2.jpg" alt="no img" />
//         <select
//           value={roomId}
//           onChange={e => setRoomId(e.target.value)}
//         >
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//           <option value="spots">spots</option>
//         </select>
//         <button onClick={() => setShow(!show)}>
//           {show ? 'Close chat' : 'Open chat'}
//         </button>
//       </label>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId}/>}
//     </>
//   );
// }
// //////////////////dispatch//////////////////////////////////////////////////////////
// import React, { useReducer, useEffect } from 'react';

// // Initial state
// const initialState = {
//   count: 0,
// };

// // Reducer function to handle actions
// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function Counter() {
//   // Using useReducer to manage state
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Example of dispatching inside useEffect
//   useEffect(() => {
//     // Dispatching an action to increment the count after the component mounts
//     const timer = setInterval(() => {
//       dispatch({ type: 'increment' });
//     }, 5000);

//     // Cleanup the interval when the component unmounts
//     return () => {
//       clearInterval(timer);
//     };
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//     </div>
//   );
// }

// export default Counter;
////////////////dispatch servies
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     service: 'delivery',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Example dispatch action: You can replace this with an API call or other action
//     alert(`Dispatch Requested: \nName: ${formData.name} \nEmail: ${formData.email} \nService: ${formData.service} \nMessage: ${formData.message}`);

//     // Optionally, reset the form after submission
//     setFormData({
//       name: '',
//       email: '',
//       service: 'delivery',
//       message: ''
//     });
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <div className="header">
//           <h1>Dispatch Service</h1>
//           <p>Please fill out the form to request a dispatch</p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Your Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="service">Service Type</label>
//             <select
//               id="service"
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               required
//             >
//               <option value="delivery">Delivery</option>
//               <option value="pickup">Pickup</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Additional Information</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//             />
//           </div>
//           <button type="submit" className="button">Dispatch Request</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useMemo, useState } from 'react';

// const ExpensiveCalculation = ({ num }) => {
//   const expensiveComputation = (n) => {
//     console.log('Computing...');
//     return n * 2; // Just an example of an expensive computation
//   };

//   const result = useMemo(() => expensiveComputation(num), [num]);

//   return <div>Result: {result}</div>;
// };

// const App = () => {
//   const [num, setNum] = useState(1);

//   return (
//     <div>
//       <button onClick={() => setNum(num + 1)}>Increment</button>
//       <ExpensiveCalculation num={num} />
//     </div>
//   );
// };

// export default App;
/////pie chart////////////

// import React from "react";
// import { Chart } from "react-google-charts";

// const data = [
//   ["Year", "Sales", "Expenses"],
//   ["2014", 1000, 400],
//   ["2015", 1170, 460],
//   ["2016", 660, 1120],
//   ["2017", 1030, 540],
// ];

// // Material chart options
// const options = {
//   chart: {
//     title: "Company Performance",
//     subtitle: "Sales and Expenses over the Years",
//   },
// };

// function App() {
//   return (
//     <Chart
//       // Note the usage of Bar and not BarChart for the material version
//       chartType="Bar"
//       data={data}
//       options={options}
//     />
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/home';
// import Header from './components/header';
// import About from './components/about';
// import Contact from './components/contact';


// function App() {
//   return (
//     <Router>
//       <nav style={{ margin: 20 }}>
//           <Link to="/header"style={{ marginRight: 10 }}>header</Link>
//         <Link to="/" style={{ marginRight: 10 }}>Home</Link>
//         <Link to="/about" style={{ marginRight: 10 }}>About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path='/header' element={<Header/>}/>
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// src/App.jsx
// ///dashboard
// import Sidebar from './components/sidebar';
// import Navbar from './components/navbar';
// import Dashboard from './pages/dashbord';
// import Card from './components/card';

// function App() {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="hdigiu -bvejriubrg">
//         <Navbar />
//         <Dashboard />
//         <Card/>
//       </div>
//     </div>
//   );
// }
// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Sidebar from './components/sidebar';
// import Dashboard from './pages/dashbord';
// import ReportPage from './pages/Reportpage';
// import Users from './pages/users';
// import Settings from './pages/settings';
// import Profile from './pages/profile';

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Sidebar />
//         <div className="main-content">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/reports" element={<ReportPage />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="/profile" element={<Profile/>}/>
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// // ////new dashboard////////
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './component/navbar';
// import Dashboard from './page/dashboad';
// import Statistics from './page/static';
// import Balances from './page/balance';
// import Reports from './page/report';
// import Schedule from './page/Schedule';
// import Settings from './page/setting';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/statistics" element={<Statistics />} />
//           <Route path="/balances" element={<Balances />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/schedule" element={<Schedule />} />
//           <Route path="/settings" element={<Settings />} />
        
          
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
/// e-commerce/////
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './compontss/Navbar';
// import Footer from './compontss/Footer';
// import Home from './pagesss/Home';
// import Packages from './pagesss/Packages';
// import Booking from './pagesss/Booking';
// import Contact from './pagesss/Contact';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />  
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/packages" element={<Packages />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './portfliocomponents/Navbar';
import HeroSection from './portfliocomponents/Herosection';
import About from './portfliocomponents/About';
import Skills from './portfliocomponents/Skill';
import Projects from './portfliocomponents/project';
import Contact from './portfliocomponents/contact';
import Footer from './portfliocomponents/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
