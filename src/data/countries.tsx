import React from "react";
import { IOption } from "../@interfaces";
import { CountryISO, images } from "./images";

interface ICountry {
  city: string;
  countryISO: CountryISO;
}

const countriesData: ICountry[] = [
  {
    city: "Amsterdam",
    countryISO: "NL",
  },
  {
    city: "Rome",
    countryISO: "IT",
  },
  {
    city: "Berlin",
    countryISO: "DE",
  },
  {
    city: "Paris",
    countryISO: "FR",
  },
  {
    city: "Washington",
    countryISO: "US",
  },
  {
    city: "Moscow",
    countryISO: "RU",
  },
  {
    city: "Brussels",
    countryISO: "BE",
  },
];

export const countries: IOption[] = countriesData.map((country) => ({
  value: country.countryISO,
  label: (
    <>
      <img
        src={images[country.countryISO]}
        alt={country.countryISO.toLowerCase()}
        className="w-5 h-5 mr-2"
      />{" "}
      {`${country.city}, ${country.countryISO}`}
    </>
  ),
}));
