import { Grid, MenuItem, Stack } from "@mui/material"
import { FormattedMessage } from "react-intl"
import InputField from "../../components/common/InputField"

const AddSouscriptor = () => {
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
                label={<FormattedMessage id="residencePlace" />}
                id="residencePlace"
                name="residencePlace"
              // placeholder={`${formatMessage({ id: 'enterAddress' })}`}
              />
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


          </Grid>

        </Stack>


      </form>

    </div>
  )
}

export default AddSouscriptor