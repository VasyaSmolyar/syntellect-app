import React from "react";
import CountryStore from "store/countryStore";
import AutoCompleteViewModel from "./model";
import { observer } from "mobx-react";

interface AutoCompleteControlProps {
  limit: number, 
  countryController: CountryStore
};

const AutoCompleteControl: React.FC<AutoCompleteControlProps> = observer(({ limit, countryController }) => {
  const { fetchCountries } = AutoCompleteViewModel({ limit, countryController });
  
  return (
    <div>
      <input
        type="search"
        placeholder="Автокомплит"
        onChange={(e) => {
          fetchCountries(e.target.value);
        }}
      />
      <div>
        {countryController.countries.map((el, i) => (
          <div key={i}> 
            {el.name} 
            {el.fullName}
            <img src={el.flag} alt={el.name} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default AutoCompleteControl;
