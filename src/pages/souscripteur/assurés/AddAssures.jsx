import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Stack } from "@mui/material";
import { FormattedMessage } from "react-intl";
import InputField from "../../../components/common/InputField";

const AddAssures = () => {

  const categories = [
    {
      label: <FormattedMessage id="maried" />,
      designation: 'maried',
      id: 1
    },
    {
      label: <FormattedMessage id="separed" />,
      designation: 'separed',
      id: 2
    },
    {
      label: <FormattedMessage id="single" />,
      designation: 'single',
      id: 3
    },
    {
      label: <FormattedMessage id="divorce" />,
      designation: 'divorce',
      id: 4
    },
    {
      label: <FormattedMessage id="widower" />,
      designation: 'widower',
      id: 5
    }
  ];

  const profession = [
    {
      label: <FormattedMessage id="military" />,
      designation: 'military',
      id: 1
    },
    {
      label: <FormattedMessage id="civil" />,
      designation: 'civil',
      id: 2
    },
  ]
  return (
    <div>
      <form >
        <Stack>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6} lg={3}>
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="firstName" />}
                id="firstName"
                name="firstName"
              // placeholder={`${formatMessage({ id: 'enterFirstName' })}`}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="middleName" />}
                id="firstName"
                name="firstName"
              // placeholder={`${formatMessage({ id: 'enterFirstName' })}`}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="lastName" />}
                id="lastName"
                name="lastName"
              // placeholder={`${formatMessage({ id: 'enterLastName' })}`}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="employer" />}
                id="employer"
                name="employer"
              // placeholder={`${formatMessage({ id: 'enterLastName' })}`}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputField
                select
                size="small"
                fullWidth
                label={<FormattedMessage id="maritalStatus" />}
                name="maritalStatus"
              >
                <MenuItem value="">
                  <em>
                    <FormattedMessage id="none" />
                  </em>
                </MenuItem>
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.designation}>
                    {option.label}
                  </MenuItem>
                ))}
              </InputField>
            </Grid>
            <Grid item xs={6} lg={3} >
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="phoneNumber" />}
                id="phoneNumber"
                name="phoneNumber"
              // placeholder={`${formatMessage({ id: 'phoneNumber' })}`}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="placeOfBirth" />}
                id="birthPlace"
                name="birthPlace"
              // placeholder={`${formatMessage({ id: 'enterPlaceOfBirth' })}`}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="idCard" />}
                id="idCard"
                name="idCard"
              // placeholder={`${formatMessage({ id: 'enterFirstName' })}`}
              />
            </Grid>





            <Grid item xs={6} lg={3}>
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="email" />}
                id="email"
                name="email"
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputField
                select
                size="small"
                fullWidth
                label={<FormattedMessage id="nationality" />}
                name="idCountry"
              >
                <MenuItem value="">
                  <em>
                    <FormattedMessage id="none" />
                  </em>
                </MenuItem>

              </InputField>
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="city" />}
                id="city"
                name="city"
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="residencePlace" />}
                id="residencePlace"
                name="residencePlace"
              // placeholder={`${formatMessage({ id: 'enterAddress' })}`}
              />
            </Grid>

            <Grid item xs={6} lg={3}>
              <InputField
                select
                size="small"
                fullWidth
                label={<FormattedMessage id="profession" />}
                name="idOccupation"
              >
                <MenuItem value="">
                  <em>
                    <FormattedMessage id="none" />
                  </em>
                </MenuItem>
                {profession.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.designation}
                  </MenuItem>
                ))}
              </InputField>
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputField
                size="small"
                fullWidth
                label={<FormattedMessage id="tin" />}
                id="tin"
                name="tin"
              />
            </Grid>

            <Grid item xs={6} lg={3}>
              <InputLabel>
                <FormattedMessage id="status" />
              </InputLabel>
              <FormControl>
                <RadioGroup
                  row
                  aria-label="status"
                >
                  <FormControlLabel value="0" control={<Radio />} label={<FormattedMessage id="false" />} />
                  <FormControlLabel value="1" control={<Radio />} label={<FormattedMessage id="True" />} />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6} lg={3}>
              <InputLabel>
                <FormattedMessage id="gender" />
              </InputLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                id="gender"
              >
                <FormControlLabel
                  defaultChecked
                  value="M"
                  control={<Radio color="primary" sx={{ color: 'primary.main' }} />}
                  label={<FormattedMessage id="male" />}
                />
                <FormControlLabel
                  value="F"
                  control={<Radio color="primary" sx={{ color: 'primary.main' }} />}
                  label={<FormattedMessage id="female" />}
                />
              </RadioGroup>

            </Grid>
          </Grid>
        </Stack>

      </form>

    </div>
  )
}

export default AddAssures