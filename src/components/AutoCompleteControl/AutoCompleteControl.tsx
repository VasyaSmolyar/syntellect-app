import React from "react";
import CountryStore from "store/countryStore";
import AutoCompleteViewModel from "./model";
import { observer } from "mobx-react";
import { TextField, Autocomplete, Box, Typography, Avatar } from "@mui/material";

interface AutoCompleteControlProps {
  limit: number;
  countryController: CountryStore;
};

const AutoCompleteControl: React.FC<AutoCompleteControlProps> = observer(({ limit, countryController }) => {
  const { fetchCountries } = AutoCompleteViewModel({ limit, countryController });

  return (
    <Box>
      <Autocomplete
        freeSolo
        options={countryController.countries}
        renderOption={(props, option) => (
          <Box display="flex" alignItems="center">
            <Avatar src={option.flag} alt={option.name} />
            <Typography variant="body1">{option.name}</Typography>
            <Typography variant="body2" color="textSecondary">{option.fullName}</Typography>
          </Box>
        )}
        renderInput={(params: any) => (
          <TextField
            {...params}
            label="Autocomplete"
            placeholder="Search countries"
            onChange={(e: { target: { value: string; }; }) => fetchCountries(e.target.value)}
          />
        )}
      />
    </Box>
  );
});

export default AutoCompleteControl;
